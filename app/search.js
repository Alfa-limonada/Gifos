/*Buscar en la api a partir de un string del usuario*/

const APIKEY = "DhEvyTwp8swMj1cYtO5Bgno6W8cKXuc5";
const giphyUrl = "http://api.giphy.com/v1/gifs/";
const searchUrl = giphyUrl + "search?api_key=" + APIKEY + "&q=" + keyword + "&limit=4"; //endpoint para search


function searchKeyword() {  
  const keyword = document.getElementById("keyword").value.trim(); //toma el keyword del imput
  alert(keyword);
  fetchApi(keyword);
  return;
}

async function fetchApi(keyword) {
  console.log(searchUrl);  
  try {
    let response = await fetch(searchUrl); //pide datos de api
    let data = await response.json(); //extrae los datos de la respuesta http
    return console.log(data); //return data; cambiar luego
  } catch (error) {
    console.error(error);
    alert("Ups! vuelve a intentar");
  }
}

// fetchApi();

// function fetchApi() {
//   return fetch(searchUrl) //Poner el endpoint necesario
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => { // Si fracasa el Fetch por conexión
//       console.error(error);
//       alert("Ups! vuelve a intentar");
//     });
// };
