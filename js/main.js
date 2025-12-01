import { getFact } from "./api.js";
import { setCurrentFact } from "./state.js";
import { renderFact } from "./render.js";
import { setupEvents } from "./events.js";
async function init() {
  const fact = await getFact();
  setCurrentFact(fact);
  renderFact();
  setupEvents();
}

init();