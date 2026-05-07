# VERSION V0.2 WORLD FLAVOR

## Release State

- Project: World of Homecraft / 魔坊世界
- Internal directory: `/Users/weilai/codex-test/wow-home-generator`
- Online URL: `https://eveningathalfhill.github.io/world-of-homecraft/`
- Current commit: `c6f731570da972b71c51499f93f3c9d91bce9243`
- Remote: `https://github.com/EveningAtHalfhill/world-of-homecraft.git`
- Deployment state: GitHub Pages is live.

## Current World Direction

World of Homecraft is built around:

- Warcraft after work
- 艾泽拉斯卸甲归田后的生活幻想
- folk archive / tavern dossier / RPG world fragments

The project should stay close to World of Warcraft culture: class identity, faction flavor, named regions, tavern humor, old-world materials, and Blizzard-like small jokes. It should not drift into generic fantasy or AI SaaS tool language.

The target feeling is:

> 像暴雪没做，但本该存在的 WoW 小角落。

## Completed In V0.2

- Western fantasy flavor system completed.
- English content moved beyond translation into localized RPG-flavor text.
- Explicit flavor lexicon roots added:
  - `LOCATION_ROOTS`
  - `MOOD_ROOTS`
  - `ATMOSPHERE_ROOTS`
- 13 classes have English content pools.
- Chinese world content pool remains intact.
- Language toggle supports Chinese and English.
- PNG poster export follows the active language.
- README has been polished into a bilingual fantasy archive tone.
- Archive glimpse screenshots now use formal V0.1/V0.2 world-dossier images.

## Bilingual Content Pools

Chinese mode keeps the original folk Azeroth voice.

English mode now uses western RPG flavor naming and short archive-style fragments:

- shorter home titles
- RPG-like place names
- tavern rumor snippets
- shorter NPC remarks
- worldbuilding style notes
- class-specific affixes and mythic affixes

## Current Known Issues

- The English content uses Warcraft-adjacent named characters and places. This supports the current direction, but a future public-facing edition may need a stricter “inspired but not official” naming strategy.
- PNG layout has static canvas sizing. It currently passes static checks, but future longer content may need adaptive canvas sections.
- Mainland China access to GitHub Pages may be unreliable.
- No analytics, no ad slots, no Cloudflare Pages mirror yet.
- No saved user history or share gallery.

## Next Stage Goals

### V0.2.x Polish

- Review all English content in browser, not only static checks.
- Generate fresh PNG posters for key classes in both languages.
- Add a small in-page archive note for V0.2.
- Consider a light “world record number” style for generated plans.

### Mainland Access Plan

- Prepare a Cloudflare Pages mirror.
- Keep GitHub Pages as canonical public repo deployment.
- Test access from mainland networks where possible.
- Avoid adding backend dependencies.

### Tavern Board Ad Plan

Future monetization should feel diegetic:

- tavern board notices
- guild bulletin scraps
- merchant placards
- innkeeper recommendations
- small “sponsored parchment” slots

Do not use modern banner-ad language inside the world.

### Cloudflare Pages Plan

- Connect the GitHub repository to Cloudflare Pages.
- Build command: none.
- Output directory: project root.
- Keep `index.html`, `styles.css`, `script.js` static.
- Use Cloudflare custom domain only after the GitHub Pages version is stable.

## Do Not Break

- Keep pure static HTML/CSS/JS.
- No npm.
- No backend.
- No API.
- No database.
- No generic fantasy drift.
- Do not remove Chinese content.
- Do not make the interface feel like an AI tool.
