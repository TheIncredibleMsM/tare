# Tare: The Weigh Station — Adaptive Prototype Continuation Brief

## Non-negotiable opening instruction for the next chat

**Open the existing hosted Sites project. Do not create a new site.**

- Live site: https://tare-weigh-station.workspace-535676.chatgpt.site
- Project ID: `appgprj_6a5c3912b1948191af9ac8658f1940d4`
- Current saved version: **Version 16**
- Current source commit: `87dd9097c6d1ed82c671c2f63b3acd744513fa94`
- Version 15 is the preserved pre-adaptive version and must remain recoverable.

## What Tare is

Tare is a game-based behavioral assessment concept for law-firm hiring. Its first product, **The Weigh Station**, places the player at a mysterious crossing where travelers present morally and procedurally ambiguous claims. The player may spend Inquiry Marks to ask questions or consult the personified Ledger, then must enter a ruling.

The goal is not to identify a universally “correct” or “balanced” candidate. Tare observes which considerations a player notices, which principles they repeatedly protect, what causes those principles to change, and where their moral or judgment boundaries appear.

## Current protected content

The project contains an approved bank of **50 complete scenarios** in:

`content/approved-bank/scenarios-01-05.json` through `scenarios-46-50.json`

The live compiled copy is:

`public/approved-bank.js`

### Critical constraint

The approved scenario bank was **not changed** while creating the adaptive prototype. Arrivals, character names, inquiries, inquiry answers, Ledger responses, rulings, consequences, and dependency relationships remain verbatim. Tests confirm that the live bank is structurally and literally identical to the protected bank.

Do not rewrite, summarize, replace, or regenerate the question bank unless Maddie explicitly asks.

## What was implemented in Version 16

The simulation now contains exactly **30 decisions**:

- 29 principal encounters selected from the approved bank
- Scenario 27, **The Ledger Objects**, remains the automatic free-interruption encounter and now counts as Decision 16
- No scenario repeats within a run
- Follow-up scenarios never precede their prerequisites
- Conditional follow-ups only appear when their triggering choice permits them

The structure is:

1. **Broad observation — Decisions 1–10**
   - One scenario is selected from each broad judgment family.
   - The system does not begin with a presumption about the player.

2. **Hypothesis testing — Decisions 11–20**
   - After Decision 10, the rule-based engine examines the strongest emerging hypotheses.
   - It chooses clarifying scenarios related to the top three patterns.
   - Direct narrative follow-ups are prioritized when their prerequisites occurred.
   - The automatic Scenario 27 interruption is Decision 16 and costs no Inquiry Marks.

3. **Boundary testing — Decisions 21–26**
   - Scenarios place the apparent principles into conflict with competing values.

4. **Integration and responsibility — Decisions 27–30**
   - The final scenarios emphasize process, revision, delegation, confidentiality, and ownership of judgment.

## Level One adaptive model

This is a deterministic **Level One** prototype. It uses no AI and makes no external model calls.

The adaptive engine is in:

`public/adaptive-assessment.js`

It currently tracks ten non-evaluative axes:

- Personal autonomy
- Rules and exceptions
- Process and outcome
- Authority and independent judgment
- Trust and verification
- Precaution under uncertainty
- Consequences and constraints
- Confidentiality and transparency
- Ownership of judgment
- Uniformity and equitable context

Each ruling contributes directional evidence. Positive and negative directions do **not** mean good and bad. The system records:

- which hypothesis a ruling might support;
- how many distinct contexts support it;
- which scenarios point the other way;
- whether the reversal may reveal a boundary rather than inconsistency.

The confidential administrator report now presents the three strongest adaptive patterns first. It names supporting contexts and contradicting contexts. It explicitly states that neither the center nor an extreme is universally preferable. The original prototype axes remain below under **Legacy directional axes** for comparison during validation.

## Existing mechanics preserved

- 20 Inquiry Marks per assessment
- Highly visible `−1 Inquiry Mark` notice and animated counter
- Paid traveler inquiries
- Paid voluntary Ledger consultations
- Free automatic Scenario 27 inquiries and Ledger consultation
- Inquiry dependency unlocks
- “Have you taken this simulation before?” disclosure
- Admin access
- Admin pause and resume
- Restart button on the paused screen
- Admin-only confidential report
- Admin-only retake control
- Timing with paused time excluded
- Immersive background, scale, traveler, and Ledger presentation
- Existing scenario consequences and dependency callbacks

Prototype administrator passcode: `2140`. This is a prototype-only client-side gate, not production security.

## Direct story dependencies preserved

- 1 → 36
- 2 → 41
- 3 → 38
- 22 → 37
- 42 → 39
- 10 choice A → 40
- 9 choice C → 43

## Testing completed

All **21 automated tests passed** before Version 16 was published. The checks cover:

- exactly 30 decisions per adaptive route;
- 29 unique principal scenarios plus automatic Scenario 27;
- no duplicate scenarios;
- follow-up ordering;
- adaptive reports with supporting and contradicting contexts;
- all 50 protected scenarios present;
- live bank identical to the protected bank;
- complete player-facing records;
- valid knowledge-state graphs;
- preserved special encounters;
- preserved Ledger access;
- visible Inquiry Mark deductions;
- pause-screen restart behavior;
- production build and hosted artifact validity.

The agent preview also confirmed that the live flow opens as:

`Decision 1 of 30 · Broad observation`

and correctly displays the 30-scenario adaptive prototype on the cover. No browser console errors were found during the tested flow.

## Important interpretation limits

This is an exploratory prototype, not a validated psychometric or hiring instrument.

- A single ruling never establishes a trait.
- A repeated direction is a hypothesis, not a diagnosis.
- Reversals may identify context boundaries rather than inconsistency.
- No direction should automatically be treated as preferable.
- Results require structured interview follow-up and eventual validation against performance data across a large, varied beta population.
- The current evidence tags and scenario-to-axis mappings are design hypotheses that require human review and beta testing.

## Recommended next steps after dinner

Proceed without rewriting scenarios. A careful next sequence would be:

1. Play one complete 30-decision run and measure actual completion time.
2. Confirm that the transition after Decision 10 feels adaptive without feeling accusatory.
3. Inspect whether Decision 16, the automatic Ledger objection, is clearly counted as part of the 30.
4. Examine the final administrator report for specificity and neutrality.
5. Review the hidden evidence tags one scenario at a time, checking whether each option genuinely supports the assigned hypothesis.
6. Run contrasting test paths—for example, a consistently autonomy-protective path and a context-dependent autonomy path—and compare reports.
7. Record any moral hypotheses that have too few clarifying or boundary scenarios.
8. Only after that evidence audit should new scenarios be considered.

## Instructions for working safely in the next chat

1. Open the existing project using the project ID above.
2. Inspect the current saved Version 16 before editing.
3. Treat the approved 50-scenario JSON files as protected source material.
4. Make adaptive-engine changes outside the approved bank whenever possible.
5. Run the full test suite after any change.
6. Preserve the current live version in version history before publishing another one.
7. Do not create a replacement site or overwrite the bank with an earlier draft.

## Current status

**Version 16 is saved, deployed, and functioning as the first 30-scenario Level One adaptive prototype.** The pre-adaptive Version 15 and all earlier saved versions remain available for recovery.
