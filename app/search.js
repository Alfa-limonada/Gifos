// Event listener
document.getElementById("search-button").addEventListener("click", searchKeyword);

document.getElementById("keyword").addEventListener("keydown", function(ev) {
  if (ev.keyCode === 13) {
    ev.preventDefault();
    searchKeyword();
    setTimeout(eraseAutoComplete, 500)
  }
});

async function searchKeyword() {
  let keyword = document.getElementById("keyword").value.trim(); //toma el keyword del imput
  let searchUrl = `${GYPHY_BASE_URL}search?api_key=${APIKEY}&q=${keyword}&limit=4`; //endpoint para search
  
 
  let searchWrap = document.querySelector("#searchWrap");
  //valida que no esté  vacío el campo de búsqueda
  if (keyword === "") {
    return alert("Por favor ingresa una búsqueda");
  }
  await fetchApi(searchUrl); // consumo el api, espero la respuesta (gracias al await) y la retorno.  
  append(content, searchWrap); // pongo resultados en DOM
  appendTags();
  document.querySelector("#keyword").value = ""; //clear form
};

async function appendTags() {
  let keyword = document.getElementById("keyword").value.trim(); //toma el keyword del imput
  let tagsUrl = `http://api.giphy.com/v1/tags/related/${keyword}?api_key=${APIKEY}&limit=4`;
  console.log(tagsUrl);
  await fetchApi(tagsUrl); // consumo api de tags
  console.log(content) 

  //Acá hacer elappend a los 3 cositos con sugerencias de búsqueda.
  
}