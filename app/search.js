/* Conectarse con la api de giphy, y tomar 4 sugerencias, 
generar el html dinámico y mostrarlas en 4 cajas con un botón de "ver más"
que va la caja de búsqueda */

/*
Info
public key: dc6zaTOxFJmzC
Host: api.giphy.com
Search: api.giphy.com/v1/gifs/search
*/

const APIKEY = "dc6zaTOxFJmzC";
// document.addEventListener("DOMContentLoaded", giphySearch); //fires when the initial HTML document has been completely loaded and parsed

function getKeyword() {
  let keyword = document.getElementById("keyword").value.trim(); // get input from search erase spaces
  alert(keyword);
  giphySearch(keyword); //keyword le pasa el parámetro
  return;
}

function giphySearch(keyword) {
  let found = fetch(
    "http://api.giphy.com/v1/gifs/search?q=" +
      keyword +
      "&api_key=" +
      APIKEY +
      "&limit=4"
  )
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(error => {
      return error;
    });
  return found;
};
