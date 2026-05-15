# Ferté Confluences Design System

## About

**Ferté Confluences** is a leisure port ("port de plaisance") situated at La Ferté-sous-Jouarre, on the Marne river — halfway between Paris and Épernay. It presents itself as a new force in fluvial tourism and sustainable leisure, combining a tourist stopover with a peaceful mooring destination. The brand vision: "Faire de ses confluences un port de plaisance remarquable et incontournable dans le tourisme fluvial."

**Full name:** Ferté Confluences – Port loisirs de la Marne
**Tagline:** PORT LOISIRS DE LA MARNE

### Products

| Product | Description |
|---|---|
| **Website** | Full marketing/informational website built in French, covering: Homepage, Activities & Leisure, Port de Plaisance, Events, Blog, Qui sommes-nous, Boutique |

### Sources

- **Figma file:** `Ferté Confluences - Livrable.fig` (mounted as virtual filesystem: 3 pages — Pages-web, Design-system, Charte-Graphique — 108 frames)
- **Brand document:** `uploads/Livrable FC 2025.zip` (not accessible at time of creation)

---

## CONTENT FUNDAMENTALS

### Language & Tone
- **Language:** French (primary). English via language toggle.
- **Register:** Warm, welcoming, aspirational but accessible. Evokes calm, nature, adventure, and community.
- **Voice:** Second-person "vous" implied (formal). Headlines use evocative, poetic phrasing ("Bienvenue à Ferté Confluences", "Découvrez la Destination Marne").
- **Casing:**
  - Section titles: Title Case (e.g. "Événements à la une", "Activités & loisirs")
  - Navigation: Title Case with accents
  - CTAs: Sentence case ("Découvrir tout nos événements")
  - Logo baseline: ALL CAPS ("PORT LOISIRS DE LA MARNE")
- **Emoji:** Not used. The brand relies on photography and SVG icons.
- **Copy style:** Concise on UI elements. Longer editorial copy in body sections and the blog.
- **Example CTAs:** "Découvrir tout nos événements", "Découvrir tout nos engagements", "Activités & loisirs", "Port de plaisance"
- **Brand copy example:** *"Ferté Confluences, c'est à la fois une escale touristique et un lieu de vie paisible pour plaisanciers. Véritable quartier tourné vers l'eau, il réunit nature, culture et convivialité."*

### Numerics & Dates
- French date format: "du 11 au 18 juin"
- Phone: "01 42 86 47 23" format

---

## VISUAL FOUNDATIONS

### Colors

| Role | Name | Hex | RGB |
|---|---|---|---|
| Primary | Bleu marine | `#033059` | rgb(3,48,89) |
| Background/Contrast | Blanc pur | `#FFFFFF` | rgb(255,255,255) |
| Secondary | Bleu ciel | `#D3E7F7` | rgb(211,231,247) |
| Accent | Jaune soleil | `#F4A700` | rgb(244,167,0) |
| Body text | Gris foncé | `#575757` | rgb(87,87,87) |
| Muted/placeholder | Gris moyen | `#AAAAAA` | rgb(170,170,170) |
| Subtle border | Gris clair | `#E3E3E3` | rgb(233,233,233) |
| Off-white bg | Gris fond | `#FAFAFA` | rgb(250,250,250) |
| Dark accent | Or foncé | `#5A3D00` | rgb(90,61,0) |

**Color vibe:** Deep ocean navy + crisp white + sky blue. The yellow accent ("jaune soleil") is used sparingly — only for highlights, hover glows, and CTA borders. The overall feeling is calm, premium, nautical.

### Typography

**Agenda** — Headlines and display only
- Font by Greg Thompson. Commercial license via Adobe Fonts (https://fonts.adobe.com/fonts/agenda).
- Weights used: Medium (primary), SemiBold Italic (hero display)
- Sizes: 36–104px for titles; 48px standard section headers
- Character: Rounded sans-serif, slightly humanist. Curves evoke water and flow.
- Substitution: **Nunito** (Google Fonts) is the closest free match — similar rounded forms.

**Montserrat** — Everything else
- Available free on Google Fonts.
- Weights used: Regular (400), Medium (500), SemiBold (600), Bold (700)
- Used for: body copy, navigation, buttons, labels, captions, tags
- Sizes: 14–38px on web; body text at 16–18px
- Letter spacing: -0.010em on large headings, 0.040em on ALL CAPS baseline

### Type Scale (Web)

| Level | Font | Weight | Size | Use |
|---|---|---|---|---|
| Hero | Agenda | SemiBold Italic | 100px | Hero splash text |
| H1 | Agenda | Medium | 48–56px | Page/section titles |
| H2 | Montserrat | SemiBold | 28–40px | Sub-headers |
| H3 | Montserrat | Medium/SemiBold | 20–28px | Card titles, section labels |
| Body | Montserrat | Medium | 16–18px | Paragraphs, descriptions |
| Caption | Montserrat | Medium | 14px | Tags, labels, metadata |
| Button | Montserrat | Medium/SemiBold | 16–20px | CTAs, navigation |

### Backgrounds & Surfaces

- **Hero sections:** Full-bleed photography with a subtle golden overlay `rgba(217,149,0,0.06)` — barely visible warm tint
- **Dark sections:** Deep navy background `#033059` with white text — used for "vision" / editorial panels
- **Light sections:** Off-white `#FAFAFA` or pure white for content-heavy areas
- **Cards:** White or off-white, border-radius 24–32px, subtle shadow (none visible; card identity comes from rounding and content)
- **Image overlays on hover:** Golden gradient `linear-gradient(rgba(244,167,0,0) 0%, rgba(244,167,0,0.4) 100%)` — slides in from bottom
- **Navy text on image:** `linear-gradient(rgba(3,48,89,0) 0%, rgb(3,48,89) 100%)` — gradient scrim for readability

### Spacing & Layout

- **Page width:** 1920px design width; max content 1360–1472px centered
- **Section padding:** 48–100px vertical; 32px horizontal gaps between cards
- **Card corner radius:** 24px (standard cards), 32px (large feature cards)
- **Button corner radius:** 48px (full pill)
- **Grid:** 3-column cards (432px each @ 32px gap within 1360px container)

### Border & Stroke

- **Pill tags (categories):** 1px solid white on dark backgrounds
- **Outline buttons:** 1px solid `#033059` (navy)
- **Hover glow:** `box-shadow: 0px 0px 32px 0px rgba(244,167,0,0.3)` + 1px border `#F4A700`
- **No inner shadows on cards**

### Shadows

- **Image text protection:** `box-shadow: 0px 0px 24px 0px rgba(106,72,0,0.5)` on title overlays over images
- **Navigation overlay:** `rgba(3,48,89,0.45)` and `rgba(3,48,89,0.8)` for overlays

### Animations & Interactions

- **Hover on nav items:** Underline appears beneath text (solid line, 2px, white)
- **Hover on nav dropdown:** Item name stays; underline slides in
- **Hover on category buttons:** Golden border + glow effect appears
- **Hover on article cards:** Golden gradient overlay appears on image
- **No bounce or elastic easing apparent** — clean, subtle transitions implied

### Corner Radii Summary

| Context | Radius |
|---|---|
| Standard cards | 24px |
| Large feature cards | 32px |
| Pill buttons / tags | 48px |
| Icon containers | 32px |
| Small badges | 48px |

### Decorative Elements

- **Wave divider:** SVG wave (`Vague.svg`) separates hero from content — white wave on transparent, 1920×128px
- **Anchor watermark:** Large transparent anchor/logo mark used as a decorative background watermark (especially in hero sections at 30% opacity)
- **Golden filter:** Subtle warm amber tint applied to hero photos
- **Sidebar accent (Charte):** Vertical dark band with nautical imagery on presentation slides

### Imagery Style

- **Color:** Rich, saturated. Warm golden tones favored — sunlit water, outdoor activity, French riverside.
- **Subjects:** River/Marne water, boats, nautical activities, outdoor sport (triathlon, kayak), countryside, gatherings
- **No B&W or heavy grain** — photography is vivid, real, lifestyle-oriented
- **Cropping:** Full-bleed, hero portraits. Card images cropped to fixed 432×377–524px

---

## ICONOGRAPHY

### Approach

- **No external icon library** — all icons are custom SVGs embedded in the design
- **Style:** Minimalist, outline/line-based with some fill. Clean strokes, 2px weight
- **Sizes:** 24px (navigation/standard), 28px (feature buttons), 48px (circle buttons), 56px (large)
- **Colors:** White on dark backgrounds; `#575757` grey on light backgrounds; navy for dark-on-light contexts
- **No emoji used anywhere**

### Icon Set

| Icon | File | Usage |
|---|---|---|
| Arrow left | `assets/icons/arrow-left.svg` | Card carousel navigation |
| Arrow right | `assets/icons/arrow-right.svg` | Card carousel navigation |
| Anchor | `assets/icons/vector-anchor.svg` | Logo mark, Port de plaisance button |
| Watermark | `assets/icons/vector-watermark.svg` | Hero background watermark |
| Wave | `assets/logo/Vague.svg` | Section divider |

### Social Icons

Social platform icons are available in the design system components as SVG components (Facebook, Instagram, X/Twitter, YouTube, LinkedIn, etc.) — see `/Design-system/components/Platform*/`.

---

## FILES

```
README.md                          ← This file (start here)
SKILL.md                           ← Agent skill descriptor for Claude Code
colors_and_type.css                ← CSS custom properties: colors, type scale, spacing, radii, shadows

assets/
  logo/
    Confluences.svg                ← "Confluences" wordmark SVG
    PORT-LOISIRS-DE-LA-MARNE.svg   ← Tagline baseline SVG (all caps)
    ert.svg                        ← "erté" letterform SVG (part of Ferté logotype)
    Vector-anchor.svg              ← Anchor/wave mark (the F-wave logo symbol)
    Vector-watermark.svg           ← Large decorative watermark version
    Vague.svg                      ← Wave section divider (1920×128px)
  icons/
    arrow-left.svg                 ← Carousel left arrow
    arrow-right.svg                ← Carousel right arrow
    vector-anchor.svg              ← Compact anchor icon for UI use
    vector-watermark.svg           ← Decorative anchor watermark
  images/
    hero-port.jpg                  ← Primary hero: aerial port view (full-bleed)
    hero-2.jpg                     ← Hero variant: river/activity scene
    marina.jpg                     ← Marina / mooring image
    riverside.jpg                  ← Riverside landscape
    activities.png                 ← Activities lifestyle image
    events.png                     ← Events / crowd image
    background-sidebar.png         ← Brand presentation sidebar (nautical vertical strip)

preview/
  colors-primary.html              ← Navy, white, sky blue, gold swatches [Colors]
  colors-neutrals.html             ← Gray scale swatches [Colors]
  colors-usage.html                ← Semantic color usage chips [Colors]
  type-headings.html               ← Hero, H1–H4 type specimens [Type]
  type-body.html                   ← Body, subheading, button, nav, caption [Type]
  spacing-tokens.html              ← 4–100px spacing scale bars [Spacing]
  spacing-radii-shadows.html       ← Border radii + shadow specimens [Spacing]
  components-nav.html              ← Full navigation header [Components]
  components-buttons.html          ← Pill CTAs, category buttons, arrows, nav links [Components]
  components-card.html             ← Article card default + hover states [Components]
  components-event-card.html       ← Event cards with gradient overlays [Components]
  components-search.html           ← Search bars + filter tag pills [Components]
  brand-logo.html                  ← Logo on 4 color backgrounds [Brand]
  brand-visual-motifs.html         ← Hero overlay, gold filter, wave divider [Brand]
  brand-iconography.html           ← Custom SVG icon set [Brand]

ui_kits/
  website/
    index.html                     ← ★ Main clickable prototype (open this)
    Header.jsx                     ← Fixed navigation header component
    Footer.jsx                     ← Three-column footer (navy + white + gray)
    HomePage.jsx                   ← Homepage: hero, events, articles, vision, engagements
    InnerPages.jsx                 ← FCActivitiesPage, FCBlogPage, FCAboutPage
    README.md                      ← UI kit notes
```

### Quick-start for agents

1. Read this README for brand context
2. Load `colors_and_type.css` for all design tokens
3. Use `assets/logo/` SVGs for the logo (compose: Vector-anchor + ert + Confluences + PORT-LOISIRS tagline)
4. Use `assets/images/` for photography
5. Reference `ui_kits/website/index.html` for a live prototype
6. Key rules: Nunito (→ Agenda) for display/titles, Montserrat for everything else; navy `#033059` + gold `#F4A700` + sky `#D3E7F7`; pill buttons (r:48px); cards (r:24-32px); golden hover glow `box-shadow: 0 0 32px rgba(244,167,0,0.3)`

### ⚠️ Caveats & font note

- **Agenda font** (the real display face) is a paid Adobe Fonts typeface. This design system substitutes **Nunito** from Google Fonts — similar rounded humanist forms, but not identical. For production, replace `'Nunito'` with `'Agenda'` via Adobe Fonts.
- The uploaded ZIP (`uploads/Livrable FC 2025.zip`) was not accessible at build time. If it contains additional brand assets (full logo SVG, brand guidelines PDF, etc.), re-import it to supplement this system.
- No real website codebase was available — the UI kit was built from Figma designs only.
