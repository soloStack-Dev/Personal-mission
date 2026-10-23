Implement modern scroll-based animations for the portfolio with the following EXACT specifications:

ANIMATION LIBRARY:
- Primary: GSAP + ScrollTrigger
- Alternative: Framer Motion (React) or AOS (Animate On Scroll)
- Fallback: Intersection Observer API with CSS transitions

GLOBAL ANIMATION SETTINGS:
- Duration: 0.6s - 1s
- Easing: cubic-bezier(0.16, 1, 0.3, 1) (smooth, dramatic)
- Stagger: 0.1s between items
- Offset: Trigger at 80% viewport height (start: "top 80%")
- Once: true (animate only once, no repeat)

SECTION-BY-SCROLL ANIMATIONS:

1. HERO SECTION (Page Load):
   - Preloader: "FALEEL H" types out, then fades
   - Background text "JAVA": 
     * Scale: 0.8 → 1.0
     * Opacity: 0 → 0.1
     * Duration: 1.2s, delay: 0.3s
   - Name "FALEEL H":
     * y: 50px → 0
     * Opacity: 0 → 1
     * Duration: 0.8s, delay: 0.5s
     * Stagger per letter: 0.05s
   - Role text:
     * x: -30px → 0
     * Opacity: 0 → 1
     * Duration: 0.6s, delay: 0.8s
   - CTA buttons:
     * Scale: 0.9 → 1
     * Opacity: 0 → 1
     * Duration: 0.4s, delay: 1s, stagger: 0.1s
   - Scroll indicator: Bouncing animation, infinite

2. NAVIGATION (Scroll Triggered):
   - On scroll > 100px:
     * Background: transparent → rgba(13, 17, 23, 0.95)
     * Height: 80px → 64px
     * Add shadow: 0 4px 20px rgba(0,0,0,0.3)
     * Duration: 0.3s

3. PROJECTS SECTION (Scroll Reveal):
   - Section title:
     * y: 40px → 0, Opacity: 0 → 1
     * Duration: 0.6s
   - Project cards (staggered):
     * y: 60px → 0
     * Opacity: 0 → 1
     * Scale: 0.95 → 1
     * Duration: 0.8s
     * Stagger: 0.15s per card
     * Trigger: Each card at "top 85%"
   - Card image:
     * Scale: 1.1 → 1.0 (parallax effect)
     * Duration: 1.2s
   - Tech pills:
     * Scale: 0.8 → 1
     * Opacity: 0 → 1
     * Stagger: 0.05s per pill

4. SKILLS SECTION (Scroll Progress):
   - Category headers:
     * x: -40px → 0
     * Opacity: 0 → 1
     * Duration: 0.5s
   - Skill tags:
     * Scale: 0.9 → 1
     * Opacity: 0 → 1
     * Stagger: 0.03s per tag
     * Trigger: Batch by row
   - Progress bars (if used):
     * Width: 0% → X%
     * Duration: 1.2s
     * Easing: power2.out

5. EXPERIENCE/EDUCATION TIMELINE (Scroll Draw):
   - Timeline line:
     * ScaleY: 0 → 1
     * Transform origin: top
     * Duration: 1s
     * Trigger: Section enter
   - Timeline dots:
     * Scale: 0 → 1
     * Duration: 0.3s
     * Stagger: 0.2s
   - Content cards:
     * x: -40px → 0 (left side) OR x: 40px → 0 (right side)
     * Opacity: 0 → 1
     * Duration: 0.6s
     * Stagger: 0.2s

6. CERTIFICATIONS (Grid Reveal):
   - Cards:
     * y: 30px → 0
     * Opacity: 0 → 1
     * Scale: 0.95 → 1
     * Stagger: 0.1s
     * Grid pattern: Left-to-right, top-to-bottom

7. QUOTE/TESTIMONIAL (Parallax):
   - Background text:
     * y: 0 → -50px (parallax, slower than scroll)
     * Opacity: 0.1 → 0.2
   - Quote text:
     * y: 30px → 0
     * Opacity: 0 → 1
     * Duration: 0.8s
     * Blur: 10px → 0 (optional, cinematic)

8. CONTACT SECTION (Final Reveal):
   - Heading:
     * Scale: 0.9 → 1
     * Opacity: 0 → 1
     * Duration: 0.6s
   - Form fields:
     * y: 20px → 0
     * Opacity: 0 → 1
     * Stagger: 0.1s per field
   - Social icons:
     * Scale: 0 → 1
     * Rotation: -90deg → 0deg
     * Stagger: 0.05s

9. FOOTER (Fade Out):
   - On scroll to bottom:
     * Opacity: 0 → 1 (reverse: fade in when reaching)
     * y: 20px → 0

SPECIAL SCROLL EFFECTS:

A. PARALLAX LAYERS:
   - Hero background text: Moves at 0.5x scroll speed
   - Section backgrounds: Subtle 0.8x speed
   - Project images: 1.1x speed (opposite direction)

B. HORIZONTAL SCROLL SECTION (Optional):
   - Projects section on desktop:
     * Pin section, translateX based on scroll
     * Cards move horizontally as user scrolls vertically
     * Progress bar shows scroll position

C. TEXT REVEAL:
   - Section titles:
     * Split by words or letters
     * y: 100% → 0%
     * Stagger: 0.02s per letter
     * Overflow: hidden container

D. IMAGE REVEAL:
   - Project images:
     * Clip-path: inset(100% 0 0 0) → inset(0% 0 0 0)
     * Duration: 1s
     * Easing: power4.out

E. COUNTER ANIMATION:
   - Stats numbers (3+, 40+, 20+):
     * Count up: 0 → final number
     * Duration: 2s
     * Trigger: When visible
     * Easing: power2.out

MOBILE SCROLL ADJUSTMENTS:
- Reduce parallax intensity (0.8x → 0.9x)
- Disable horizontal scroll sections (stack vertically)
- Reduce stagger amounts (0.15s → 0.08s)
- Shorter durations (0.8s → 0.5s)
- Respect prefers-reduced-motion: Disable all animations

PERFORMANCE:
- Use transform3d for GPU acceleration
- will-change: transform on animated elements
- Debounce scroll events (or use ScrollTrigger)
- Total animation budget: <16ms per frame