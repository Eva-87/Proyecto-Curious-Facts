import { getFact } from "./api.js";
import { setCurrentFact, addFavorite, currentFact } from "./state.js";
import { renderFact, renderFavorites } from "./render.js";

export function setupEvents() {
  document.getElementById("newFactBtn").addEventListener("click", async () => {
    const fact = await getFact();
    setCurrentFact(fact);
    renderFact();
  });

  document.getElementById("saveBtn").addEventListener("click", () => {
    if (currentFact) {
      addFavorite(currentFact);
      renderFavorites();
    }
  });
}