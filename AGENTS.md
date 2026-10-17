# AGENTS.md — Kiya Birthday Website

## Mission
Build a polished, personal, mobile-first Sweet Seventeen gift website for Saskia (“Kiya”) using `PRD.md` as the product source of truth. The experience should feel like a small memory scrapbook: pink, warm, playful, and heartfelt, without making the relationship overtly romantic.

Work directly in the current repository. Inspect the existing files before choosing commands or changing architecture. Preserve useful existing work and avoid unrelated rewrites.

## Priority Order
1. Meet the requirements and acceptance criteria in `PRD.md`.
2. Keep the site usable and attractive on mobile devices.
3. Make all interactive elements actually work.
4. Handle missing photos/audio gracefully.
5. Keep dependencies, code, and deployment simple.

## Stack and Repository Rules
- Default stack for a new repository: React + Vite + TypeScript.
- If the repository already uses a working frontend stack, keep it unless a concrete technical issue requires a change.
- Use the current styling system if present. Do not add Tailwind or replace CSS tooling unless the project setup supports it and it materially helps.
- Do not add a backend, database, authentication, analytics, tracking, or an API for this static gift website.
- Avoid large dependencies for small effects. Prefer CSS transitions/animations where practical.
- Do not remove, rename, overwrite, or reformat unrelated files/assets.
- Use readable component names, typed props/state, and small components with clear responsibilities.
- Centralize changeable copy and media paths where practical so the owner can edit content quickly.

## Design Direction
- Mobile-first: design and test at approximately 360–430 px width first, then tablet and desktop.
- Visual concept: personal scrapbook/journal; soft pink, blush, warm off-white/cream, and accessible dark text.
- Include restrained hand-drawn accents such as small stars, flowers, paper edges, or doodles. Keep spacing generous and the main message easy to read.
- Photo frames may resemble polaroids, but photos must not have persistent captions.
- Use subtle fade/slide transitions and only light confetti for the reveal moment. Do not overuse gradients, glow, parallax, or floating objects.
- Make the first screen immediately understandable, with one clear primary action such as “Buka Kado”.
- Do not reproduce an inaccessible Instagram reference by guessing its exact details. If a reference screenshot exists in project assets, inspect and use it as inspiration. Otherwise follow `PRD.md`.
- Do not use generic stock photos as substitutes for the couple/friend photos. Use polished placeholders until supplied assets are present.

## Content Rules
- The recipient is Saskia, nicknamed Kiya, celebrating her 17th birthday on 18 October 2026.
- The friendship began through Roblox roughly three months earlier.
- Known memories: first in-person meeting; riding the MRT; going to GBK; seeing Jakarta city lights; nightly calls and daily stories; playing Minecraft and laughing at random jokes.
- Known interests: drawing/painting, pink, chocolate, mellow music.
- Required inside jokes: `AMANSAJA` and `ABIS TKA`.
- Preserve the supplied birthday message's intent and casual Indonesian-English voice. Only make light punctuation/capitalization adjustments unless the owner explicitly requests deeper editing.
- Avoid adding explicit romantic confessions, love declarations, or heavy relationship language. Do not invent dates, events, conversations, or personal facts.
- Do not add captions to individual photos.
- Never display the recipient's private information beyond what is specified in the project brief.

## Asset Handling
- Prefer the following paths unless the current repo already uses a better asset convention:
  - `public/images/kiya-photo-01.jpg`
  - `public/images/kiya-photo-02.jpg`
  - `public/images/kiya-photo-03.jpg`
  - `public/images/kiya-photo-04.jpg` (optional)
  - `public/images/kiya-photo-05.jpg` (optional)
  - `public/audio/mari-bercerita.mp3`
- Allow 3–5 photos. If assets are missing, show a graceful development placeholder or omit unavailable slides; never show broken image icons or fabricated memories.
- Add sensible image sizing/cropping and lazy-load below-the-fold photos where appropriate.
- Do not download copyrighted music from unauthorized sources or claim to have included a song file that does not exist. Use a user-provided/authorized audio asset or an official supported embed/link. Keep the app functional if no audio file is present.
- Avoid unnecessary third-party assets and scripts. Do not send personal assets to external services.

## Audio / Autoplay Requirements
- The intended soundtrack is “Mari Bercerita”.
- Attempt to start the supplied audio when the page loads, but treat autoplay as best-effort only: browsers—especially on mobile—may block audible autoplay until the user interacts.
- Handle the Promise returned by `audio.play()`; catch rejected playback without uncaught errors or repeated autoplay loops.
- If the initial autoplay attempt is blocked, start playback from the user's first deliberate interaction, preferably the “Buka Kado” button. This fallback must not require another separate step.
- Provide a visible and accessible music control for play/pause and mute/unmute. The user must be able to silence the site at any point.
- Use a moderate default volume, around 0.25–0.35, and loop only after playback has started.
- Use `playsInline` where applicable. Do not falsely show a playing state before playback succeeds.
- If the audio path is missing or fails to load, disable or clearly annotate the control without breaking the website. Do not spam console errors or continuously retry.
- Do not promise that music will autoplay on every device; implementation must respect browser policies.

## Interaction and Accessibility
- Every visible button, link, gallery control, and surprise element must perform its labelled action.
- Make touch targets comfortable (aim for at least 44×44 CSS pixels where practical).
- Provide visible focus styles and semantic HTML.
- Support keyboard operation for buttons and the photo lightbox. The lightbox should close through a close button and Escape key.
- Use descriptive alt text for photographs, without inventing identities or details.
- Respect `prefers-reduced-motion`; reduce decorative animation when this setting is enabled.
- Never make users wait through a long typing animation to read the birthday message. Keep the full text accessible immediately.
- Avoid interactions that trap the user or block reading the main message.

## Suggested Structure
Adapt to the existing repository; do not force this exact structure if the codebase already has a clear convention.

```text
src/
  components/
    OpeningCover.tsx
    MemoryJourney.tsx
    PhotoGallery.tsx
    BirthdayLetter.tsx
    SurpriseReveal.tsx
    MusicControl.tsx
    ClosingSection.tsx
  content/
    birthdayContent.ts
  App.tsx
  main.tsx
  styles/ or index.css
public/
  images/
  audio/
PRD.md
AGENTS.md
README.md
```

Keep content/copy separate from UI where practical. Do not create a component for every decorative element.

## Implementation Workflow
1. Inspect repository, package manager, existing scripts, assets, and current framework.
2. Read `PRD.md` and implement P0 requirements before optional flourishes.
3. Build the opening, story flow, photo gallery, birthday message, hidden surprise, closing, and music fallback.
4. Ensure the page remains useful if images or audio have not yet been supplied.
5. Run available lint, type-check, test, and production build commands. Use the commands appropriate to the actual project; do not invent scripts.
6. Fix errors introduced by the implementation. Check mobile overflow, button functionality, missing-asset behavior, and console warnings where possible.
7. Update or create `README.md` with setup/build instructions and clear asset placement instructions.
8. At completion, report what was implemented, which checks passed, and any user-supplied assets still needed. Do not claim a check passed unless it was actually run.

## Quality Bar
- Finished design should look deliberately art-directed, not like an unmodified AI template.
- Keep the initial loading state quick and the overall page lightweight.
- Keep body copy readable and line lengths comfortable on a phone.
- Ensure photos and cards do not overflow the viewport horizontally.
- Avoid placeholder lorem ipsum in the final user-facing content.
- Do not fabricate photos, audio, links, or completed deployment status.
- Favor a complete, stable, emotionally appropriate experience over extra features.

<!-- antislop:start -->
## antislop
For UI, copy, people, mobile layout, or code comments work, read these installed skill files directly (use these paths even if a same-named global skill exists):
- Core filter, always on: `antislop`: `.opencode/skills/antislop/SKILL.md`
- UI / visual: `antislop-ui`: `.opencode/skills/antislop-ui/SKILL.md`
- Copy & text: `antislop-copywriting`: `.opencode/skills/antislop-copywriting/SKILL.md`
- People: `antislop-human`: `.opencode/skills/antislop-human/SKILL.md`
- Mobile / responsive: `antislop-layoutmobile`: `.opencode/skills/antislop-layoutmobile/SKILL.md`
- Code comments: `antislop-code`: `.opencode/skills/antislop-code/SKILL.md`
Before starting, follow the core's "Two Usage Modes" section in strict order: explicit session instruction first, then global preference, then ask. A session instruction always wins. For a resolved mode, say `antislop active: <mode> (session override).` or `antislop active: <mode> (global preference).` once before presenting findings or making edits, using the actual mode and source. Acknowledging the user's request without naming the source does not replace this notice.
Only an explicit choice of antislop during or after selects a session mode. A request to review, audit, or avoid file edits does not select a mode; read the global preference in that case. Another skill's mode does not select antislop's mode.
If the mode is unresolved, ask during/after and end the response; wait for the answer before any UI review, planning, or concept. For read-only tasks, put the active-mode notice only at the start of the final answer, never in progress messages. For editing tasks, announce before the first edit and omit it from the final answer.
To update antislop later: `npx antislop-ai --update`, or run `npx antislop-ai` and pick Overwrite them.
<!-- antislop:end -->
