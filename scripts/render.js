// render.js
import { currentFact, favorites } from "./state.js";

export function renderFact() {
  const factContainer = document.getElementById("fact");
  if (!factContainer) return;
  factContainer.textContent = currentFact || "Sin hecho cargado aún.";
}

export function renderFavorites() {
  const favContainer = document.getElementById("favorites");
  favContainer.innerHTML = "";

  favorites.forEach((fact, index) => {
    const li = document.createElement("li");
    li.textContent = fact;

    // Botón de borrar
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Borrar";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", () => {
      favorites.splice(index, 1);
      renderFavorites();
    });

    li.appendChild(deleteBtn);
    favContainer.appendChild(li);
  });
}