#!/usr/bin/env python3
"""Build an offline demonstration from the repository's actual training files."""

import json
import re
import subprocess
from pathlib import Path

HERE = Path(__file__).resolve().parent
TRAINING = HERE.parent
ROOT = HERE.parents[2]


def build_data():
    form = json.loads(subprocess.check_output([
        "ruby", "-r", "yaml", "-r", "json", "-e",
        "puts JSON.generate(YAML.safe_load(File.read(ARGV[0])))",
        str(ROOT / ".github/ISSUE_TEMPLATE/eitf-training.yml"),
    ], text=True))
    sections, fields = [], []
    introduction, after = "", ""
    for item in form["body"]:
        if item["type"] == "markdown":
            value = item["attributes"]["value"]
            match = re.search(r"^## (\d+)\. (.+)$", value, re.M)
            if match:
                if not sections:
                    introduction = value[:match.start()].strip()
                sections.append({"number": match[1], "title": match[2], "description": value[match.end():].strip(), "fields": []})
            else:
                after += value
        else:
            if not sections:
                raise ValueError("Form field appears before a section")
            fields.append(item)
            sections[-1]["fields"].append(item["id"])
    examples = []
    for level in (1, 2, 3):
        source = (TRAINING / f"examples/level-{level}.md").read_text()
        answers = {}
        for match in re.finditer(r"^### (.+)\n+([\s\S]*?)(?=^#{1,3} |\Z)", source, re.M):
            answers[match[1]] = match[2].strip()
        values = {}
        for field in fields:
            value = answers[field["attributes"]["label"]]
            if value == "_No response_":
                value = ""
            if field["id"] == "resource_url":
                link = re.fullmatch(r"\[[^\]]+\]\((https?://[^)]+)\)", value)
                if link:
                    value = link[1]
            if field["type"] == "dropdown":
                if field["attributes"].get("multiple"):
                    value = [v.strip() for v in value.split(",")]
                    assert all(v in field["attributes"]["options"] for v in value)
                else:
                    assert value in field["attributes"]["options"], (field["id"], value)
            values[field["id"]] = value
        examples.append({"id": f"level-{level}", "title": source.splitlines()[0][2:], "values": values})
    document_specs = [
        ("guide", "Contributor guide", "README.md"),
        ("maintainers", "Curator workflow", "maintainers.md"),
        ("intake", "Intake & Level 1 listing", "templates/intake.md"),
        ("validation", "Validation", "templates/validation.md"),
        ("review", "Review & maintenance", "templates/review.md"),
        ("current", "Current record", "templates/current-record.md"),
        ("mapping", "D5.2 crosswalk", "annex-mapping.md"),
        ("setup", "Later GitHub setup", "setup.md"),
        *[(f"level-{n}", f"Level {n} worked example", f"examples/level-{n}.md") for n in (1, 2, 3)],
    ]
    documents = [{"id": key, "title": title, "path": path, "markdown": (TRAINING / path).read_text()} for key, title, path in document_specs]
    return {"form": {key: form[key] for key in ("name", "title", "labels")}, "fields": fields, "sections": sections, "introduction": introduction, "after": after, "examples": examples, "documents": documents}


def main():
    data = build_data()
    encoded = json.dumps(data, ensure_ascii=False).replace("<", "\\u003c").replace("\u2028", "\\u2028").replace("\u2029", "\\u2029")
    page = (HERE / "index.template.html").read_text()
    page = page.replace("/* DEMO_STYLE */", (HERE / "style.css").read_text())
    page = page.replace("/* DEMO_DATA */", "window.EITF_DEMO_DATA = " + encoded + ";")
    page = page.replace("/* DEMO_SCRIPT */", (HERE / "app.js").read_text())
    output = HERE / "dist/index.html"
    output.parent.mkdir(exist_ok=True)
    output.write_text(page)
    print(f"Built {output}")
    print(f"{len(data['fields'])} fields, {len(data['sections'])} sections, {len(data['examples'])} examples, {len(data['documents'])} reference documents. No network dependencies.")


if __name__ == "__main__":
    main()
