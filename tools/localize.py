"""Download Figma MCP asset URLs referenced in a screen file and rewrite them to local paths.

Usage: python3 -I tools/localize.py screens/NowShowing.jsx [more files...]
Also normalises Figma font names (e.g. font-['Roboto:Bold'] -> font-['Roboto']).
"""
import os
import re
import sys
import subprocess

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

PREFIX_RE = re.compile(r'const (\w+) = "(https://www\.figma\.com/api/mcp/asset/[^"]+)";\n?')
FONT_RE = re.compile(r"font-\['(Roboto|Inter|Roboto_Mono)(?::[^']*)?'\]")


def localize(path):
    src = open(path, encoding="utf-8").read()
    name = os.path.splitext(os.path.basename(path))[0]
    prefixes = dict(PREFIX_RE.findall(src))
    if prefixes:
        outdir = os.path.join(ROOT, "assets", name)
        os.makedirs(outdir, exist_ok=True)
        for var, prefix in prefixes.items():
            asset_re = re.compile(r'`\$\{' + var + r'\}/([A-Za-z0-9._-]+)`')
            for fname in sorted(set(asset_re.findall(src))):
                dest = os.path.join(outdir, fname)
                if not os.path.exists(dest) or os.path.getsize(dest) == 0:
                    subprocess.run(["curl", "-sfL", "-o", dest, f"{prefix}/{fname}"], check=True)
                print(f"  {name}/{fname}: {os.path.getsize(dest)} bytes")
            src = asset_re.sub(lambda a: f'"assets/{name}/{a.group(1)}"', src)
        src = PREFIX_RE.sub("", src)
    if not src.startswith("(() => {"):
        src = "(() => {\n" + src.rstrip() + "\n})();\n"
    src = FONT_RE.sub(lambda f: f"font-['{f.group(1).replace('_', ' ')}']", src)
    open(path, "w", encoding="utf-8").write(src)
    left = src.count("figma.com/api/mcp/asset")
    print(f"{path}: done, {left} remote URLs left")


if __name__ == "__main__":
    for p in sys.argv[1:]:
        localize(p)
