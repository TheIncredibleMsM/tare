# Tare Company Website — Version 1 Recovery Guide

## Preserved milestone

- Site: **Tare**
- Slug: `tare-assessment`
- Live URL: <https://tare-assessment.workspace-535676.chatgpt.site>
- Saved milestone: **Version 1 — “Build the complete Tare pilot-partner homepage”**
- Date preserved: July 19, 2026

This package contains the complete source for the first Tare company homepage, its approved Luminous Narrative Paths hero artwork, and the exact approved public wording embedded in `app/page.tsx`.

## Critical separation

This is the **Tare company website**, not the protected **Tare: The Weigh Station** immersive.

Do not use this package to overwrite, rebuild, or modify the immersive project at:

<https://tare-weigh-station.workspace-535676.chatgpt.site>

## What Version 1 contains

- Luminous Narrative Paths visual direction
- Pilot-partner homepage positioning
- The approved hero and problem statement
- The Tare approach
- A restrained introduction to The Weigh Station
- The four-step pilot-partnership process
- Responsible-assessment commitments
- Tare’s origin story
- The “Why Tare?” name explanation
- Responsive desktop and mobile layouts
- Keyboard focus and reduced-motion support

## Important product boundaries

- The Weigh Station is described only at a high level.
- Hidden scoring dimensions, construct mappings, preferred choices, and scenario content are not exposed.
- The assessment is identified as a pilot-stage prototype.
- The company site does not link to the live immersive.
- The website does not claim scientific validation or universal correct answers.
- Pilot buttons do not submit information or invent contact details.

## Primary source files

- `app/page.tsx` — complete homepage structure and approved wording
- `app/globals.css` — complete visual system and responsive styling
- `app/layout.tsx` — page metadata and global layout
- `public/tare-luminous-hero.png` — approved production hero artwork
- `.openai/hosting.json` — company-site identity; preserve it exactly

## Verification completed

- Production build passed.
- Automated rendered-page test passed.
- Deployment artifact validation passed.
- Version 1 deployment reached a verified successful state.

## Safe restoration approach

1. Recover or open the existing `tare-assessment` Sites project. Never create a duplicate unless the original is conclusively unavailable.
2. Preserve `.openai/hosting.json` so the checkout remains connected to the correct company project.
3. Restore the files in this package into that company-site checkout.
4. Install dependencies using the existing lockfile.
5. Run the production build and tests.
6. Inspect the homepage on desktop and mobile.
7. Save a new immutable version rather than altering the protected Weigh Station project.

## Next planned work

The homepage is complete. Future work may add Products, Our Mission, About, Responsible Assessment, Contact, Privacy, Terms/prototype-use, Accessibility, and FAQ pages. Those pages were intentionally not fabricated in Version 1.
