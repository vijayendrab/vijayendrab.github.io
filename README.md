# Vijayendra’s little arcade

A static personal game gallery for GitHub Pages. Each game lives in `/games`; the homepage reads its title, short description, category, cover art, and launch path from `games.json`.

## Add a game

1. Add the standalone game page, for example `games/meteor-dash/index.html`.
2. Add an optional cover image under `assets/`.
3. Add an entry to `games.json`:

```json
[
  {
    "title": "Meteor Dash",
    "description": "Dodge the falling rocks and see how long you last.",
    "category": "Arcade · 2 min",
    "path": "games/meteor-dash/",
    "cover": "assets/meteor-dash.png",
    "color": "#ffd45e"
  }
]
```

`cover` is optional; without one, the gallery makes a simple typographic cover from the game title. Use a relative `path` so links work on both the GitHub Pages site and its project path. Keep each game self-contained so it can run from its own folder.

## Personalize the page

- Change the intro copy in `index.html`.
- Change the accent colors and layout in `styles.css`.
- Edit the gallery entries in `games.json` as you add games.

## GitHub Pages

The workflow in `.github/workflows/pages.yml` deploys the static site whenever `main` changes. In the repository’s **Settings → Pages**, set the build and deployment source to **GitHub Actions**. Because this repository is named `vijayendrab` rather than `vijayendrab.github.io`, its project-site address will be `https://vijayendrab.github.io/vijayendrab/` once Pages is enabled and the workflow succeeds. GitHub requires a repository named `<owner>.github.io` for a user site at the domain root.
