import { currentFact, favorites } from "./state.js";
export function renderFact() {
  const factContainer = document.getElementById("fact");
  factContainer.textContent = currentFact;
}
export function renderFavorites() {
  const favContainer = document.getElementById("favorites");
  favContainer.innerHTML = "";
  favorites.forEach(fact => {
    const li = document.createElement("li");
    li.textContent = fact;
    favContainer.appendChild(li);
  });
}