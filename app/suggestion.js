/* Conectarse con la api de giphy, y tomar 4 sugerencias, 
generar el html dinámico y mostrarlas en 4 cajas con un botón de "ver más"
que va la caja de búsqueda */

document.addEventListener("DOMContentLoaded", searchSuggestion);

let randomUrl =
  GYPHY_BASE_URL + "search?api_key=" + APIKEY + "&q=" + "evil cat" + "&limit=4";
let wrap = document.querySelector("#suggestionWrap");


async function searchSuggestion() {
  await fetchApi(randomUrl); //espera la respuesta del Fetch  
  append(content, wrap);  
}


