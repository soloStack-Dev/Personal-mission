Create a mobile-first responsive design for Faleel H's Java Developer portfolio with the following EXACT specifications:

BREAKPOINTS:
- Mobile: 320px - 767px (Primary design target)
- Tablet: 768px - 1023px
- Desktop: 1024px+ (Enhanced, not required)

MOBILE LAYOUT STRUCTURE:

1. MOBILE NAVIGATION:
   - Fixed top bar, height: 64px
   - Background: rgba(13, 17, 23, 0.95) with backdrop-filter: blur(12px)
   - Left: "FH" logo or "FALEEL H" text, 16px, bold, white
   - Right: Hamburger menu icon (3 lines, 24px, #f85149)
   - Menu opens: Full-screen overlay, dark background #0d1117
   - Menu items: Large touch targets (48px min height)
   - Menu animation: Slide from right, staggered item reveal

2. MOBILE HERO SECTION:
   - Padding: 100px top, 60px bottom
   - Background text: "JAVA" or "DEV", 80px-100px, opacity 0.1, centered
   - Content stack order:
     * Status badge: "● OPEN TO WORK" (pulsing green dot, 12px text)
     * "Hello, I'm" — italic script, 20px, #c9d1d9
     * "FALEEL H" — 48px-56px, bold, white, line-height 0.95
     * "JAVA DEVELOPER & AI ENGINEER" — 14px, #f85149, letter-spacing 2px
     * Description: 14px, #8b949e, max-width 100%, 3-4 lines
     * CTA buttons: Stacked vertically, full-width, 48px height
       - "VIEW PROJECTS" (primary, red border)
       - "CONTACT ME" (secondary, ghost button)
   - No portrait on mobile (or small circular avatar, 120px)
   - Stats: Horizontal scroll row OR 3-column grid, compact

3. MOBILE PROJECTS SECTION:
   - Single column layout, full-width cards
   - Card structure:
     * Image: 16:9 aspect ratio, full-width
     * Content padding: 20px
     * Number: "01", 36px, red
     * Title: 20px, bold, white
     * Description: 14px, gray, 3 lines max
     * Tech pills: Wrap, 2-3 per row, small (10px font)
     * Buttons: Stacked, full-width
   - Swipe hint: "← SWIPE TO EXPLORE →" or dots indicator

4. MOBILE SKILLS SECTION:
   - Accordion/collapsible categories
   - Default: All collapsed, tap to expand
   - OR: Horizontal scroll tabs (Languages | Backend | Frontend | Database | DevOps)
   - Skill tags: Full-width rows, 44px touch height
   - Icon + text layout for clarity

5. MOBILE EXPERIENCE/EDUCATION:
   - Vertical timeline, left-aligned
   - Line: 2px, #30363d, left: 20px
   - Dots: 12px circles, red, left: 14px
   - Content: Full-width, padding-left: 48px
   - Cards: Full-width, stacked, 16px gap

6. MOBILE CERTIFICATIONS:
   - 2-column grid (small cards)
   - OR: Horizontal scroll carousel with snap
   - Card: 160px width, logo + title + date
   - Swipe indicators: Dots below

7. MOBILE CONTACT:
   - Stacked form fields, full-width
   - Input height: 48px, font-size: 16px (prevents zoom)
   - Buttons: Full-width, 48px height
   - Social icons: Row of 4, 44px touch targets
   - Direct contact cards: Tap to call, tap to email

8. MOBILE FOOTER:
   - Simplified: Logo, tagline, social icons
   - Copyright: Small, centered
   - Back-to-top button: Fixed, 48px circle, bottom-right

MOBILE-SPECIFIC FEATURES:
- Touch gestures: Swipe between projects, pull-to-refresh
- Haptic feedback: On button taps (if PWA)
- Offline indicator: "You're offline" banner
- Performance: Lazy load images, compressed assets
- Font sizes: Minimum 14px body, 16px inputs

MOBILE PERFORMANCE:
- Target: 90+ Lighthouse score
- First Contentful Paint: <1.5s
- Time to Interactive: <3.5s
- Image optimization: WebP, srcset, lazy loading
- Critical CSS: Inlined, above-the-fold only