import { currentFact, favorites } from "./state.js";

export function renderFact() {
  const factContainer = document.getElementById("fact");
  factContainer.textContent = currentFact;
}

export function renderFavorites() {
  const favContainer = document.getElementById("favorites");
  favContainer.innerHTML = "";

  favorites.forEach((fact, index) => {
    const li = document.createElement("li");
    li.textContent = fact;

    // Crear botón de borrar
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Borrar";
    deleteBtn.classList.add("delete-btn");

    // Evento para eliminar el favorito
    deleteBtn.addEventListener("click", () => {
      favorites.splice(index, 1); // quitar del array
      renderFavorites();          // volver a renderizar la lista
    });

    // Añadir botón al <li>
    li.appendChild(deleteBtn);
    favContainer.appendChild(li);
  });
}