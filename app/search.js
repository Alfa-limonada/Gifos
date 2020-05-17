// Event listener
document
  .getElementById("search-button")
  .addEventListener("click", searchKeyword);

document
.getElementById("keyword")
.addEventListener("keydown", function(ev) {
  if (event.keyCode === 13) {
    ev.preventDefault();
    document.getElementById("search-button").click();
  }
});

// la función se convierte en asíncrona para poder usar la sentencia 'await'
async function searchKeyword() {
  let keyword = document.getElementById("keyword").value.trim(); //toma el keyword del imput
  let searchUrl =
    GYPHY_BASE_URL + "search?api_key=" + APIKEY + "&q=" + keyword + "&limit=4"; //endpoint para search
  let searchWrap = document.querySelector("#searchWrap");
  await fetchApi(searchUrl); // consumo el api, espero la respuesta (gracias al await) y la retorno.
  append(content, searchWrap); // pongo resultados en DOM
  document.querySelector("#keyword").value = ""; //clear form
}








