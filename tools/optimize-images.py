"""
Optimize images in asset/img/ for web delivery.

For each .png in asset/img/ (top level, not _source/):
  1. Move original to asset/img/_source/<name>.png (backup)
  2. Generate optimized .webp at target quality
  3. Generate optimized fallback .png (palette-indexed when possible)

Per-file overrides specify: max width, webp quality, optional white-to-alpha
(for the Bintware logo v2 which has a white RGB background).

Run from project root:
    python tools/optimize-images.py
"""

from pathlib import Path
from PIL import Image
import shutil
import sys

ROOT = Path(__file__).resolve().parent.parent
IMG_DIR = ROOT / "asset" / "img"
SRC_DIR = IMG_DIR / "_source"

# Per-image rules. max_w = 0 means keep original width.
RULES = {
    "logo-bintware-v2.png": {"max_w": 256, "webp_q": 90, "white_to_alpha": True},
    "logo-ai-gateway.png":  {"max_w": 512, "webp_q": 90, "white_to_alpha": False},
    "diagramma-sip-vertex.png": {"max_w": 1600, "webp_q": 85, "white_to_alpha": False},
    "scenario-scuola.png":    {"max_w": 1200, "webp_q": 82, "white_to_alpha": False},
    "scenario-voicemail.png": {"max_w": 1200, "webp_q": 82, "white_to_alpha": False},
    "scenario-sanita.png":    {"max_w": 1200, "webp_q": 82, "white_to_alpha": False},
    "scenario-legale.png":    {"max_w": 1200, "webp_q": 82, "white_to_alpha": False},
}

DEFAULT_RULE = {"max_w": 1200, "webp_q": 82, "white_to_alpha": False}


def white_to_alpha(img: Image.Image, threshold: int = 240) -> Image.Image:
    """Make near-white pixels transparent. Threshold = min RGB value to be considered white."""
    img = img.convert("RGBA")
    pixels = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if r >= threshold and g >= threshold and b >= threshold:
                # Fade to transparent based on how white it is
                whiteness = min(r, g, b)
                new_a = int((255 - whiteness) * 255 / (255 - threshold)) if whiteness < 255 else 0
                pixels[x, y] = (r, g, b, new_a)
    return img


def resize_keep_ratio(img: Image.Image, max_w: int) -> Image.Image:
    if max_w <= 0 or img.width <= max_w:
        return img
    ratio = max_w / img.width
    new_size = (max_w, int(img.height * ratio))
    return img.resize(new_size, Image.LANCZOS)


def fmt_size(n: int) -> str:
    for unit in ("B", "KB", "MB"):
        if n < 1024:
            return f"{n:.1f} {unit}"
        n /= 1024
    return f"{n:.1f} GB"


def process(png_path: Path, rule: dict) -> tuple[int, int, int]:
    """Returns (original_size, webp_size, png_optimized_size)."""
    original_size = png_path.stat().st_size

    # Backup if not already done
    backup = SRC_DIR / png_path.name
    if not backup.exists():
        shutil.copy2(png_path, backup)

    # Load and process
    img = Image.open(png_path)
    if rule.get("white_to_alpha"):
        img = white_to_alpha(img)
    else:
        img = img.convert("RGBA")

    img = resize_keep_ratio(img, rule["max_w"])

    # Save WebP
    webp_path = png_path.with_suffix(".webp")
    img.save(webp_path, "WEBP", quality=rule["webp_q"], method=6)
    webp_size = webp_path.stat().st_size

    # Save optimized PNG fallback (overwrite original .png in place)
    img.save(png_path, "PNG", optimize=True)
    png_optimized_size = png_path.stat().st_size

    return original_size, webp_size, png_optimized_size


def main():
    if not IMG_DIR.exists():
        print(f"ERROR: {IMG_DIR} not found", file=sys.stderr)
        sys.exit(1)

    SRC_DIR.mkdir(exist_ok=True)

    pngs = sorted(p for p in IMG_DIR.glob("*.png"))
    if not pngs:
        print(f"No PNGs found in {IMG_DIR}")
        return

    print(f"{'file':<32} {'orig':>10}  {'webp':>10}  {'png-opt':>10}")
    print("-" * 70)

    total_orig = total_webp = total_png = 0
    for png_path in pngs:
        rule = RULES.get(png_path.name, DEFAULT_RULE)
        orig, webp, png_opt = process(png_path, rule)
        total_orig += orig
        total_webp += webp
        total_png += png_opt
        print(f"{png_path.name:<32} {fmt_size(orig):>10}  {fmt_size(webp):>10}  {fmt_size(png_opt):>10}")

    print("-" * 70)
    print(f"{'TOTAL':<32} {fmt_size(total_orig):>10}  {fmt_size(total_webp):>10}  {fmt_size(total_png):>10}")
    print(f"\nBackup degli originali in {SRC_DIR.relative_to(ROOT)}/")
    print(f"Risparmio (WebP vs originali): {(1 - total_webp/total_orig) * 100:.1f}%")


if __name__ == "__main__":
    main()
