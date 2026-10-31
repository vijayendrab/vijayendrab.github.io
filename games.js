const grid = document.querySelector("#game-grid");
const emptyState = document.querySelector("#empty-state");
const dialog = document.querySelector("#game-dialog");

function openGamePreview(game) {
  document.querySelector("#dialog-title").textContent = game.title;
  document.querySelector("#dialog-category").textContent = game.category || "A little game";
  document.querySelector("#dialog-description").textContent = game.description;
  document.querySelector("#dialog-play").href = game.path;

  const art = document.querySelector("#dialog-art");
  art.replaceChildren();
  art.style.setProperty("--cover", game.color || "#d8f0e8");
  if (game.cover) {
    const image = document.createElement("img");
    image.src = game.cover;
    image.alt = `${game.title} cover art`;
    art.append(image);
  } else {
    const initials = document.createElement("span");
    initials.className = "cover-initials";
    initials.textContent = game.title.slice(0, 2).toUpperCase();
    initials.setAttribute("aria-hidden", "true");
    art.append(initials);
  }
  dialog.showModal();
}

function makeGameCard(game, index) {
  const card = document.createElement("article");
  card.className = `game-card game-card-${index % 3}`;
  card.style.setProperty("--cover", game.color || "#d8f0e8");

  const preview = document.createElement("button");
  preview.type = "button";
  preview.className = "game-cover";
  preview.setAttribute("aria-label", `Preview ${game.title}`);
  if (game.cover) {
    const image = document.createElement("img");
    image.src = game.cover;
    image.alt = "";
    image.loading = "lazy";
    preview.append(image);
  } else {
    const initials = document.createElement("span");
    initials.className = "cover-initials";
    initials.textContent = game.title.slice(0, 2).toUpperCase();
    initials.setAttribute("aria-hidden", "true");
    preview.append(initials);
  }
  const viewLabel = document.createElement("span");
  viewLabel.className = "cover-label";
  viewLabel.textContent = "Take a look";
  preview.append(viewLabel);
  preview.addEventListener("click", () => openGamePreview(game));

  const details = document.createElement("div");
  details.className = "game-details";
  const category = document.createElement("p");
  category.className = "game-category";
  category.textContent = game.category || "A little game";
  const title = document.createElement("h3");
  title.textContent = game.title;
  const description = document.createElement("p");
  description.className = "game-description";
  description.textContent = game.description;
  details.append(category, title, description);
  card.append(preview, details);
  return card;
}

async function loadGames() {
  try {
    const response = await fetch("games.json");
    if (!response.ok) throw new Error("Could not load the game list.");
    const games = await response.json();
    if (!Array.isArray(games)) throw new Error("The game list should be an array.");

    document.querySelector("#game-count").textContent = String(games.length).padStart(2, "0");
    document.querySelector("#nav-game-count").textContent = games.length;
    if (games.length === 0) {
      emptyState.hidden = false;
      return;
    }
    grid.replaceChildren(...games.map(makeGameCard));
  } catch (error) {
    emptyState.hidden = false;
    emptyState.querySelector("h3").textContent = "The game shelf needs a quick check.";
    emptyState.querySelector("p").textContent = "Couldn’t read games.json. Check that it contains a valid JSON list of games.";
    console.error(error);
  }
}

loadGames();
