Design a complete UI component library for a dark-themed editorial portfolio website with the following EXACT specifications:

═══════════════════════════════════════════════════════════
1. NAVIGATION BAR COMPONENT
═══════════════════════════════════════════════════════════

Structure:
- Fixed top bar, height: 80px
- Background: rgba(10, 10, 10, 0.95) with backdrop-filter: blur(10px)
- Layout: Flexbox, space-between
- Left: Logo text "WEB DESIGNER / DIGITAL CREATOR" stacked, 10px, uppercase, letter-spacing: 2px, color: #a0a0a0
- Right: Availability badge with pulsing red dot (8px circle, #e63946, animation: pulse 2s infinite)
- Badge text: "AVAILABLE FOR FREELANCE", 10px, uppercase, #ffffff
- Border-bottom: 1px solid #2a2a2a

Behavior:
- On scroll: Shrink to 60px height, add shadow 0 4px 20px rgba(0,0,0,0.5)
- Mobile: Hamburger menu icon (3 lines, 24px, #ffffff)

═══════════════════════════════════════════════════════════
2. HERO SECTION COMPONENT
═══════════════════════════════════════════════════════════

Layout: Full viewport height (100vh), position: relative

Background Layer:
- Massive text "PORTFOLIO" — font-size: clamp(120px, 20vw, 280px), font-weight: 900, color: #e63946, position: absolute, top: 10%, left: 50%, transform: translateX(-50%), z-index: 1, white-space: nowrap, letter-spacing: -5px, opacity: 0.9

Person Layer:
- Image: PNG cutout of male designer, height: 85vh, position: absolute, right: 12%, bottom: 0, z-index: 2
- Filter: grayscale(20%) contrast(1.1)
- Drop shadow: 30px 0 60px rgba(0,0,0,0.6)

Content Layer (Left-aligned):
- "Hello, I'm" — font: 'Playfair Display' italic, 28px, color: #f5f5f5, margin-bottom: 10px
- "RAYHAN ADITYA" — font: 'Archivo Black', 72px-96px, line-height: 0.9, color: #ffffff, text-transform: uppercase
- "WEB DESIGNER & UI/UX CREATOR" — 14px, uppercase, letter-spacing: 3px, color: #e63946, margin-top: 20px
- Description paragraph — 14px, color: #a0a0a0, max-width: 340px, line-height: 1.7
- Location tag: Globe icon (16px, #e63946) + "AVAILABLE WORLDWIDE" — 10px, uppercase, #a0a0a0

Stats Bar (Right edge, vertical):
- Container: position: absolute, right: 40px, top: 50%, transform: translateY(-50%), z-index: 3
- Items: 3 stats stacked, 40px gap
- Number: 48px, font-weight: 800, color: #e63946
- Label: 10px, uppercase, color: #a0a0a0, letter-spacing: 1px
- Divider: 1px line, 40px width, #2a2a2a, between stats

Floating Elements:
- Plus icon (+): 32px, thin lines (1px), color: #e63946, position: absolute, right: 35%, top: 25%, z-index: 3
- Animation: Slow rotation 360deg over 20s

═══════════════════════════════════════════════════════════
3. SECTION HEADER COMPONENT
═══════════════════════════════════════════════════════════

Structure:
- Flex container, justify-content: space-between, align-items: center
- Left: Section title — 24px-32px, font-weight: 700, uppercase, color: #ffffff, letter-spacing: 1px
- Right: "VIEW ALL PROJECTS →" — 12px, uppercase, color: #a0a0a0, hover: color changes to #e63946, arrow translates 5px right
- Margin-bottom: 40px

═══════════════════════════════════════════════════════════
4. PROJECT CARD COMPONENT
═══════════════════════════════════════════════════════════

Container:
- Width: 100%, aspect-ratio: 16/10, background: #141414, overflow: hidden, position: relative
- Border: none, border-radius: 0

Image:
- Width: 100%, height: 100%, object-fit: cover
- Filter: brightness(0.8)
- Transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.3s

Hover State:
- Image: scale(1.05), filter: brightness(1)
- Overlay: Arrow icon appears (→, 24px, #ffffff), position: absolute, bottom: 20px, right: 20px, background: #e63946, padding: 12px, opacity: 0 → 1

Content Below Image:
- Number: "01" — 48px, font-weight: 800, color: #e63946, line-height: 1
- Title: "VELOCE BIKES" — 16px, font-weight: 700, uppercase, color: #ffffff, margin-top: 12px
- Category: "E-COMMERCE WEBSITE" — 11px, uppercase, color: #a0a0a0, letter-spacing: 1px, margin-top: 4px

Grid Layout:
- Desktop: 3 columns, 30px gap
- Tablet: 2 columns, 24px gap
- Mobile: 1 column, 20px gap

═══════════════════════════════════════════════════════════
5. EDUCATION ITEM COMPONENT
═══════════════════════════════════════════════════════════

Structure:
- Margin-bottom: 32px
- Degree: "B.Sc. in Visual Communication Design" — 16px, font-weight: 600, color: #ffffff
- Institution: "Biruni University" — 13px, color: #a0a0a0, margin-top: 4px
- Year: "2018-2022" — 12px, color: #e63946, font-weight: 600, margin-top: 4px
- Layout: Left-aligned, no icons

═══════════════════════════════════════════════════════════
6. SKILL TAG COMPONENT
═══════════════════════════════════════════════════════════

Default State:
- Display: inline-block
- Padding: 10px 20px
- Border: 1px solid #555555
- Background: transparent
- Text: 10px, uppercase, letter-spacing: 1px, color: #a0a0a0
- Font-weight: 500
- Margin: 0 8px 8px 0

Hover State:
- Border-color: #e63946
- Color: #ffffff
- Background: rgba(230, 57, 70, 0.1)
- Transition: all 0.3s ease

Container:
- Flex-wrap: wrap, gap: 8px

═══════════════════════════════════════════════════════════
7. WORK PROCESS TIMELINE COMPONENT
═══════════════════════════════════════════════════════════

Container:
- Position: relative
- Vertical line: 1px solid #2a2a2a, position: absolute, left: 20px, top: 0, bottom: 0

Timeline Item:
- Display: flex, align-items: flex-start, gap: 24px
- Margin-bottom: 40px

Number:
- "01" — 20px, font-weight: 800, color: #e63946, width: 40px, text-align: right

Icon Circle:
- Width: 40px, height: 40px, border-radius: 50%
- Border: 1px solid #e63946
- Background: #0a0a0a
- Icon inside: 16px, stroke: #e63946, stroke-width: 1.5px
- Icons: Search (Discover), Lightbulb (Create), Pen (Design), Code (Develop), Rocket (Deliver)
- Position: relative, z-index: 2 (covers the line)

Content:
- Title: "DISCOVER" — 14px, font-weight: 700, uppercase, color: #e63946, letter-spacing: 1px
- Description: "Understanding goals, audience..." — 12px, color: #a0a0a0, line-height: 1.6, max-width: 280px, margin-top: 6px

═══════════════════════════════════════════════════════════
8. QUOTE/TESTIMONIAL COMPONENT
═══════════════════════════════════════════════════════════

Container:
- Background: #e63946
- Padding: 60px 40px
- Position: relative

Quote Mark:
- Font: 'Playfair Display', 120px, color: rgba(0,0,0,0.2)
- Position: absolute, top: 20px, left: 30px
- Line-height: 1

Quote Text:
- "Good design is not just how it looks, but how it works." — 24px-32px, font-weight: 500, color: #ffffff, line-height: 1.4, font-style: italic

Signature:
- "Rayhan" — 'Playfair Display' italic, 28px, color: #ffffff, margin-top: 24px

CTA Text:
- "LET'S CREATE SOMETHING GREAT TOGETHER" — 12px, uppercase, letter-spacing: 2px, color: rgba(255,255,255,0.8), margin-top: 40px

═══════════════════════════════════════════════════════════
9. CONTACT INFO ITEM COMPONENT
═══════════════════════════════════════════════════════════

Structure:
- Display: flex, align-items: center, gap: 16px
- Margin-bottom: 24px

Icon:
- Size: 20px, stroke: #e63946, stroke-width: 1.5px
- Icons: Mail, Globe, Phone, Map Pin

Text:
- "hello@rayhanaditya.com" — 14px, color: #a0a0a0
- Hover: color changes to #ffffff

Divider:
- 1px line, #2a2a2a, width: 100%, margin: 16px 0

═══════════════════════════════════════════════════════════
10. BUTTON COMPONENTS
═══════════════════════════════════════════════════════════

Primary Button (Available for Freelance):
- Padding: 16px 32px
- Background: transparent
- Border: 1px solid #e63946
- Text: "AVAILABLE FOR FREELANCE" — 12px, uppercase, letter-spacing: 2px, color: #e63946
- Border-radius: 0
- Hover: Background fills #e63946, text becomes #ffffff
- Transition: all 0.3s ease
- Icon: Arrow (→) on left, 16px

Secondary Button (View All):
- Text only: "VIEW ALL PROJECTS →" — 12px, uppercase, #a0a0a0
- No border, no background
- Hover: Color #e63946, arrow moves 5px right

═══════════════════════════════════════════════════════════
11. FOOTER SECTION COMPONENT
═══════════════════════════════════════════════════════════

Layout: 2 columns, 50/50 split

Left Column:
- Heading: "LET'S WORK TOGETHER" — 48px-64px, font-weight: 800, uppercase, color: #ffffff, line-height: 0.95
- Plus icon (+): Red, 24px, positioned after "LET'S"
- Subtext: 14px, #a0a0a0, max-width: 400px, margin-top: 20px
- Button: Primary button (as above), margin-top: 32px

Right Column:
- Background: Laptop mockup image, position: absolute, right: 0, bottom: 0, width: 50%, opacity: 0.9
- Contact info list overlays on top

═══════════════════════════════════════════════════════════
12. GLOBAL STYLES
═══════════════════════════════════════════════════════════

Borders:
- Width: 1px only
- Color: #2a2a2a (subtle) or #e63946 (accent)
- Style: Solid only, no rounded corners

Shadows:
- Cards: 0 10px 40px rgba(0,0,0,0.4)
- Images: 0 20px 60px rgba(0,0,0,0.6)
- No colored shadows (only black)

Transitions:
- Duration: 0.3s-0.6s
- Easing: cubic-bezier(0.16, 1, 0.3, 1) (smooth, dramatic)
- Properties: color, background, transform, opacity, border-color

Spacing Scale:
- 4px, 8px, 16px, 24px, 32px, 48px, 64px, 96px, 128px
- Section padding: 96px-128px vertical
- Component gaps: 24px-32px

Border Radius:
- ALL components: 0px (sharp, editorial style)
- Exception: Icon circles in timeline (50%)