# New-Chat Instructions: Build the Tare Company Website

We are continuing work on **Tare**, a company developing immersive, story-based behavioral assessments. The first product is **Tare: The Weigh Station**, an assessment prototype initially designed for law-firm hiring.

This document governs the creation of the **Tare company website**. Read it completely before opening, creating, editing, or publishing anything.

---

## 1. Critical project separation

The Tare company website and The Weigh Station immersive are **two separate Sites projects**.

### Protected immersive project

- Name: **Tare: The Weigh Station**
- Live URL: https://tare-weigh-station.workspace-535676.chatgpt.site
- Project ID: `appgprj_6a5c3912b1948191af9ac8658f1940d4`
- Protected recovery baseline: **Version 13 — “Connect and verify the complete approved fifty-scenario live bank”**
- Current verified release: **Version 14 — “Make Inquiry Mark deductions unmistakable”**

Do not use this project as the company website. Do not redesign it, replace its homepage, reuse it as a starter, or modify its assessment logic while working on the company website.

### Separate company-website project

A separate Tare company site was already initialized with:

- Title: **Tare**
- Slug: **`tare-assessment`**
- Expected local checkout: `/workspace/sites/tare-assessment`

The earlier setup process may have been interrupted while its dependencies were finishing. Before doing anything else, search for and open this existing Sites project by slug or checkout. **Do not create another site unless it is conclusively established that this initialization failed and no project exists.** Never create a duplicate merely because the local setup needs to resume.

---

## 2. Company positioning

Tare is not merely the name of a legal simulation. Tare is a company built around the idea of **thoughtful assessment**.

Its purpose is to reveal how people:

- reason under ambiguity;
- decide what or whom to trust;
- question incomplete information;
- balance competing human values;
- respond when judgment has consequences;
- revise their thinking after new evidence; and
- interact with authority, disagreement, and uncertainty.

The Weigh Station is Tare’s first product, not its complete identity. The company website must leave conceptual and visual room for future products and industries.

The current recommended business objective is to recruit **law-firm pilot partners** who can help test and validate the first product. However, this direction has not yet been finally approved by the user. Confirm the homepage’s primary audience before writing or designing it.

---

## 3. Brand and tone

The website should feel:

- thoughtful;
- curious;
- humane;
- intelligent;
- story-driven;
- soft rather than authoritarian;
- sophisticated without becoming sterile or clinical; and
- credible without pretending the assessment has already been scientifically validated.

The logo direction previously approved was softer and company-centered, with a scale incorporated into it and a thin decorative underline whose ends swoop in opposite directions. The company must not look like a government station, court, law-enforcement body, or intimidating testing authority.

The Weigh Station’s dark, foggy visual-novel environment should not automatically become the visual system for the entire company website. The site may share subtle conceptual or color connections with the product, but it should be warmer, broader, and capable of representing future Tare products.

Avoid:

- generic technology-company language;
- excessive legal imagery;
- gavels, courthouses, police-like insignia, or authoritarian seals;
- clinical personality-test language;
- claims that Tare can definitively identify a person’s character;
- vague phrases that say nothing specific;
- presenting AI as the central product;
- describing one candidate response as universally correct; and
- implying that Tare replaces human hiring judgment.

---

## 4. Non-negotiable product boundaries

When the company website discusses The Weigh Station:

1. Do not expose hidden scoring dimensions, preferred choices, construct mappings, psychological interpretations, or what any choice supposedly indicates.
2. Do not reproduce or alter the approved 50-scenario bank as website marketing copy.
3. Do not imply that there is an obviously correct ruling.
4. Describe the experience at a high level: candidates navigate immersive, ambiguous decisions while the system records patterns for responsible human review.
5. State clearly that the present assessment is a prototype or pilot-stage product unless the user later approves a different claim based on real validation evidence.
6. Do not call the assessment scientifically validated unless genuine validation work has been completed.
7. Do not link the company site to the live immersive without explicit user approval.
8. Do not add new mechanics to the immersive while building the company website.

---

## 5. Proposed website architecture

The complete company website is expected eventually to include the following pages.

### Home

The main introduction to Tare. It should explain the company before explaining the game.

Likely sections:

1. Navigation and Tare logo
2. Hero statement explaining Tare’s central promise
3. The problem with conventional assessments
4. Tare’s immersive alternative
5. A restrained introduction to The Weigh Station
6. How a pilot engagement might work
7. Responsible-assessment principles
8. A short origin-story or founder preview
9. A clear primary call to action
10. Footer and future-page links

### Products

Initially focused on The Weigh Station while leaving room for future products.

It may eventually explain:

- the intended audience;
- the candidate experience;
- what the system observes at a responsible, non-revealing level;
- what an administrator receives;
- how the experience differs from reaction-time, memory, or conventional personality tests; and
- the product’s current pilot or development status.

### Our Mission

The philosophical heart of Tare:

- people cannot be understood through reaction speed or memorized answers alone;
- judgment becomes visible through meaningful choices;
- human complexity and ambiguity should be preserved;
- assessment should support, not replace, human judgment; and
- different organizations may value different reasoning profiles.

### About Tare

The origin story may include:

- inspiration from narrative decision games;
- the observation that different players reveal different ways of thinking;
- the difficulty law firms face in seeing judgment through ordinary hiring materials;
- how the idea became Tare; and
- the meaning of “tare”: weighing carefully while accounting for what surrounds the thing being measured.

Ask the user how personally she wants to identify herself before writing founder details or publishing personal information.

### Contact

Contact pathways may eventually serve:

- law firms;
- pilot-testing partners;
- assessment or research experts;
- collaborators; and
- general inquiries.

Before implementation, ask whether the user wants a working contact form or a displayed contact address. A form introduces data handling, spam prevention, and privacy requirements.

### Responsible Assessment

This is strongly recommended as a trust-building page. It should establish that Tare:

- does not claim one ruling is universally correct;
- does not diagnose personality or mental health;
- does not disclose hidden interpretations to candidates;
- requires employer-specific validation;
- should be paired with structured human review; and
- treats accessibility, privacy, and bias testing as essential.

### Supporting pages

Before a broad public launch, add concise versions of:

- Privacy;
- Terms or prototype-use notice;
- Accessibility statement; and
- optionally, FAQ.

---

## 6. Required step-by-step workflow

Do not attempt to design and write the entire website at once. Proceed through the following phases and obtain user approval at each meaningful decision point.

### Phase 1 — Recover and inspect the separate company project

1. Open the existing `tare-assessment` Sites project.
2. Confirm that it is separate from the protected Weigh Station project.
3. Allow any interrupted dependency setup to finish or safely resume it.
4. Inspect only the company-site starter and its hosting identity.
5. Do not edit The Weigh Station source.
6. Report what exists before proposing changes.

### Phase 2 — Confirm the homepage objective

Ask the user to select or revise the primary homepage audience:

1. **Law-firm pilot partners** — recruit firms to test and help validate Tare.
2. **Potential customers** — present Tare as a purchasing decision.
3. **General audience** — explain Tare and its philosophy without a strong sales objective.

The current recommendation is option 1, supported by the professional credibility of option 2. Do not treat this recommendation as final approval.

Also confirm the homepage’s main call to action, such as:

- Become a pilot partner;
- Request a conversation;
- Learn about The Weigh Station; or
- Join early testing.

Do not invent a scheduling link, email address, form recipient, price, testimonial, client, research partnership, or performance statistic.

### Phase 3 — Create the homepage content outline

Before writing polished copy:

1. Define the purpose of each homepage section.
2. Decide the section order.
3. Identify which claims require evidence or qualification.
4. Decide how prominently The Weigh Station should appear.
5. Decide whether the live immersive is mentioned without a link or linked after explicit approval.
6. Present the outline to the user and revise it until approved.

### Phase 4 — Draft homepage wording collaboratively

Draft one section at a time or in small coherent groups.

For every section:

1. State what the section must accomplish.
2. Offer concise wording rather than large amounts of generic filler.
3. Preserve the user’s voice and central ideas.
4. Flag claims that may sound stronger than the existing evidence supports.
5. Revise based on the user’s response.
6. Lock approved wording before implementation.

Do not silently rewrite approved copy during coding.

### Phase 5 — Choose a visual direction

Once the homepage structure and message are clear:

1. Follow the Sites design-choice workflow.
2. Prepare three distinct first-viewport visual directions using the same approved homepage content.
3. Keep differences meaningful: composition, typography, warmth, visual metaphor, and balance between company and product.
4. Preserve the approved logo direction and avoid authoritarian visual cues.
5. Show all three directions to the user.
6. Wait for selection or combination instructions.
7. Inspect the selected reference before implementing it.

Do not generate a complete website design before the user selects a first-viewport direction.

### Phase 6 — Build only the approved homepage

For the first implementation milestone:

1. Build only the homepage and shared navigation/footer needed for it.
2. Use approved copy literally unless the user authorizes revisions.
3. Keep unbuilt navigation destinations visibly appropriate; do not create deceptive functional links to nonexistent pages.
4. Ensure responsive desktop, tablet, and mobile behavior.
5. Include accessible landmarks, headings, labels, focus states, and reduced-motion support.
6. Do not add a contact form, database, analytics, tracking, authentication, or external integration unless explicitly approved.
7. Do not connect the immersive unless explicitly approved.

Before editing, state exactly what files and user-visible elements will change.

### Phase 7 — Test the homepage

Before saving a checkpoint:

1. Run the complete automated test suite.
2. Run the production build.
3. Use the available agent preview for visual and interaction testing whenever possible.
4. Test desktop and mobile layouts.
5. Test navigation, buttons, keyboard focus, and readable contrast.
6. Confirm that no hidden assessment interpretation appears.
7. Confirm that no approved Weigh Station files changed.
8. Confirm that all public claims accurately reflect the pilot-stage product.

### Phase 8 — Save and publish safely

1. Preserve a local source archive before or alongside the first verified deployment.
2. Create a new immutable checkpoint only after verification.
3. Never overwrite or repurpose the protected Weigh Station versions.
4. If the company site is shared or public, obtain the user’s required publishing approval.
5. Verify the deployment status directly.
6. Provide the user with the verified company-site URL.
7. Save the source, approved copy, visual assets, and a recovery guide persistently.

---

## 7. Working style with the user

The user wants to solve the website one meaningful problem at a time. Do not rush ahead or treat a general approval as authorization for every later choice.

Use this collaboration pattern:

1. Explain the immediate decision in plain language.
2. Present a small number of meaningful options when necessary.
3. Make a recommendation and explain why.
4. Wait for the user’s choice when the decision materially changes the result.
5. State the exact next change before editing.
6. Make the smallest coherent change.
7. Test it.
8. Show the user what changed.
9. Save a checkpoint only when the milestone is verified.

Do not bury the user in technical details. Communicate in terms of the homepage, message, design, and visitor experience unless technical action is required from her.

---

## 8. First action for the new chat

After reading this handoff:

1. Confirm that you understand the strict separation between the company website and The Weigh Station immersive.
2. Open or recover the existing `tare-assessment` company-site project without creating a duplicate.
3. Inspect its current state without making creative changes.
4. Report whether the site is ready.
5. Ask the user to choose or refine the homepage’s primary audience and call to action.

Do not begin writing homepage copy, generating visual directions, or editing the site until that first strategic choice is confirmed.
