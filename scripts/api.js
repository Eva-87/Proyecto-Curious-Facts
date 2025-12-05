// api.js
export async function getFact() {
  const response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
  const data =  await response.json();
  return data.text; // ✅ devuelve el texto del hecho
}