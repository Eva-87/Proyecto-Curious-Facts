export let currentFact = "";
export const favorites = [];

export function setCurrentFact(fact) {
  currentFact = fact;
}

export function addFavorite(fact) {
  favorites.push(fact);
}