# DEPLOYMENT NOTES

## Public URLs

Official site:

- `https://worldofhomecraft.com`
- `https://www.worldofhomecraft.com`

Cloudflare Pages fallback:

- `https://world-of-homecraft.pages.dev`

Former GitHub Pages fallback:

- `https://eveningathalfhill.github.io/world-of-homecraft/`

## Repository

- `https://github.com/EveningAtHalfhill/world-of-homecraft`

## Deployment Method

```text
GitHub main branch
→ Cloudflare Pages
→ custom domain
```

Current deployment is static:

- `index.html`
- `styles.css`
- `script.js`
- static archive assets

No backend, database, npm, API, or build command is required.

## Operational Notes

- Pushes to `main` are the source for deployment.
- Keep secrets out of the repository.
- Do not document Cloudflare Account ID, tokens, payment details, private addresses, or private contact data.
- Keep the world tone close to Warcraft after work: folk archive, tavern dossier, class dwellings, NPC remarks, and RPG fragments.

## Next Deployment Tasks

1. Mainland access testing.
2. Cloudflare Pages stability check.
3. Homepage world-feel upgrade.
4. Tavern Board ad slot planning.
5. Content pool expansion.
6. Mobile screenshot review.
7. PNG poster export review.
