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
  await fetchApi(searchUrl); // consumo el api, espero la respuesta (gracias al await) y la retorno.
  appendSearch(content); // pongo resultados en DOM
  document.querySelector("#keyword").value = ""; //clear form
}

function appendSearch(content) {
  let i = 0;
  while (i < content.data.length) {
    let suggWrap = document.querySelector("#searchWrap");
    //Elementos
    let fig = document.createElement("figure");
    let img = document.createElement("img");
    let figcap = document.createElement("figcaption");
    //Append img - figcap to fig
    fig.appendChild(img);
    fig.appendChild(figcap);
    fig.classList.add("sugg-fig");
    //Atributos
    img.src = content.data[i].images.fixed_height.url;
    figcap.textContent = content.data[i].title;
    //Append fig to DOM
    searchWrap.insertAdjacentElement("afterbegin", fig);
    i++;
  }
}
