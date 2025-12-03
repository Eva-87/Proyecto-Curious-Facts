// main.js
import { getFact } from "./api.js";
import { setCurrentFact } from "./state.js";
import { renderFact, renderFavorites } from "./render.js";
import { setupEvents } from "./events.js";

async function init() {
  const fact = await getFact();
  setCurrentFact(fact);
  renderFact();
  renderFavorites();
  setupEvents();
}

init();