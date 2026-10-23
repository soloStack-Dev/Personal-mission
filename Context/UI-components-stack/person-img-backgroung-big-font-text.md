Create a hero section UI with the following EXACT layered composition:

LAYER 1 (BACKGROUND — Big Text):
- Massive oversized text "PORTFOLIO" spanning full viewport width
- Font: Ultra Bold, Condensed Sans-Serif (similar to Archivo Black, Helvetica Now Display Bold, or Druk Wide)
- Size: 180px-220px (desktop), scaling to 40vw width minimum
- Color: Solid Crimson Red (#e63946) — slightly muted, not neon
- Position: Top 20% of viewport, centered horizontally
- Text takes up 35-40% of screen height
- Letter spacing: -3px (tight)
- Opacity: 100% (solid, not transparent)
- Z-index: 1 (behind person)

LAYER 2 (MIDDLE — Person/Portrait):
- Professional photo of young male designer (black shirt, moody expression)
- Position: Right-center of viewport, overlapping the "PORTFOLIO" text
- Person covers approximately 40-50% of the text width
- Cutout/masked: Clean edge removal (no background box)
- Lighting: Dramatic side light with red rim light on left edge
- Color treatment: Desaturated 20%, contrast +15%, subtle film grain
- Z-index: 2 (in front of text)
- Drop shadow: Soft 20px blur, 40% opacity black shadow on right side for depth

LAYER 3 (FOREGROUND — Content Overlay):
- Left-aligned content block positioned over black space (left 40%):
  * "Hello, I'm" — Italic script font, 28px, Cream white (#f5f5f5)
  * "RAYHAN ADITYA" — Bold condensed, 72px-96px, Pure white, stacked 2 lines
  * "WEB DESIGNER & UI/UX CREATOR" — Red (#e63946), 16px, uppercase, letter spacing 3px
  * Description paragraph — 14px, Light gray (#a0a0a0), max-width 320px
  * "AVAILABLE WORLDWIDE" — 10px, uppercase, with red globe icon
- Z-index: 3 (top layer)

LAYER 4 (FLOATING ELEMENTS):
- Small red plus icon (+) — positioned near person's shoulder, 24px, thin lines
- Vertical stats bar (right edge):
  * "3+ YEARS EXPERIENCE"
  * "40+ PROJECTS COMPLETED"
  * "20+ HAPPY CLIENTS"
  * Red thin divider lines between each stat
  * Numbers: Bold red 36px, Labels: Gray 10px uppercase

COMPOSITION RULES:
- Text-behind-person effect must be clean — no jagged edges on cutout
- Person's head must break the top boundary of "PORTFOLIO" text slightly
- Black background (#0a0a0a) fills all empty space
- No gradients — solid colors only
- Sharp rectangular edges everywhere (no border radius)
- Overall mood: Dark, editorial, high-fashion magazine aesthetic

RESPONSIVE BEHAVIOR:
- Mobile: Text scales to 80px, person moves below text, content stacks vertically
- Tablet: Text 120px, person 50% width, side-by-side layout
- Desktop: Full composition as described above

TECHNICAL SPECS:
- Aspect ratio: 16:9 (desktop hero)
- Safe area: Keep all text within 80% of viewport
- Export: 1920x1080px minimum for hero background