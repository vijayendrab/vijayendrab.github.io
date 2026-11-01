# Vijayendra’s little arcade

A static personal game gallery for GitHub Pages. Each game lives in `/games`; the homepage reads its title, short description, category, cover art, and launch path from `games.json`.

The gallery currently includes Tic-Tac-Toe, Snake, and Balloon Pop. Snake and Balloon Pop are single-player; shared live boards would need a realtime backend in addition to GitHub Pages.

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

The workflow in `.github/workflows/pages.yml` deploys the static site whenever `main` changes. This repository is named `vijayendrab.github.io`, so its user-site address is `https://vijayendrab.github.io/`. GitHub Pages is configured to publish through GitHub Actions.
