// events.js
import { getFact } from "./api.js";
import { setCurrentFact, addFavorite, currentFact } from "./state.js";
import { renderFact, renderFavorites } from "./render.js";

export function setupEvents() {
  const newBtn = document.getElementById("newFactBtn");
  const saveBtn = document.getElementById("saveBtn");

  newBtn?.addEventListener("click", async () => {
    const fact = await getFact();
    setCurrentFact(fact);
    renderFact();
  });

  saveBtn?.addEventListener("click", () => {
    if (currentFact) {
      addFavorite(currentFact);
      renderFavorites();
    }
  });
}