/* Conectarse con la api de giphy, y tomar 4 sugerencias, 
generar el html dinámico y mostrarlas en 4 cajas con un botón de "ver más"
que va la caja de búsqueda */

let randomUrl = GYPHY_BASE_URL + "search?api_key=" + APIKEY + "&q=" + "evil cat" + "&limit=4";

function searchSuggestion() {
  fetchApi(randomUrl);
  alert("Jerónimo");
}

document.addEventListener("DOMContentLoaded", searchSuggestion);