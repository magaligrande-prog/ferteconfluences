# Ferté Confluences — Website UI Kit

## Overview

A hi-fi clickable prototype of the Ferté Confluences marketing website. Built from Figma source designs, faithfully recreating the visual language, components and interaction patterns.

## Pages

| Page | Route key | Description |
|---|---|---|
| Homepage | `home` | Hero, category pills, events, articles, vision, engagements |
| Activités & loisirs | `activities` | Filter bar, 6-card activity grid |
| Blog | `blog` | Featured article + 6-card grid |
| Qui sommes-nous | `about` | Mission statement, story, values grid |

## Components

| File | Exports | Description |
|---|---|---|
| `Header.jsx` | `FCHeader` | Fixed nav with logo, left/right nav links, search CTA |
| `Footer.jsx` | `FCFooter` | Navy (logo+social) + white (nav) + gray (newsletter) |
| `HomePage.jsx` | `FCHomePage` | Full homepage sections |
| `InnerPages.jsx` | `FCActivitiesPage`, `FCBlogPage`, `FCAboutPage`, `FCInnerHero` | Inner page templates |

## Design Tokens Used

- `#033059` — Navy primary
- `#F4A700` — Gold accent
- `#D3E7F7` — Sky blue secondary
- `#575757` — Body text
- Border radius: 24px cards, 32px large cards, 48px pills
- Hover glow: `0 0 32px rgba(244,167,0,0.3)` + 1px `#F4A700` border

## Font

- Display: Nunito (→ Agenda — commercial license needed for production)
- Body: Montserrat (free, Google Fonts)

## Notes

- Images referenced as `../../assets/images/` — keep relative paths intact
- Uses React 18 + Babel standalone (prototype only, not production-ready)
- Tweaks panel accessible via toolbar: page switcher, accent color, font style
