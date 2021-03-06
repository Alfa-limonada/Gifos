/* Conectarse con la api de giphy, y tomar 4 sugerencias, 
generar el html dinámico y mostrarlas en 4 cajas con un botón de "ver más"
que va la caja de búsqueda */
document.addEventListener("DOMContentLoaded", searchSuggestion);

let randomUrl =
  GYPHY_BASE_URL + "search?api_key=" + APIKEY + "&q=" + "evil cat" + "&limit=4";
let content = {};

async function searchSuggestion() {
  await fetchApi(randomUrl); //espera la respuesta del Fetch
  appendSuggestion(); // imprime el resultado al DOM
}

function appendSuggestion() {
  let suggWrap = document.querySelector("#suggestionWrap");

  //Elementos
  let fig = document.createElement("figure");
  let img = document.createElement("img");
  let figcap = document.createElement("figcaption");

  //Append img - figcap to fig
  fig.appendChild(img);
  fig.appendChild(figcap);
  fig.classList.add("sugg-fig");

  //Atributos
  img.src = content.data[0].images.downsized.url;
  figcap.textContent = content.data[0].title;

  //Append fig to DOM
  suggWrap.appendChild(fig);
}