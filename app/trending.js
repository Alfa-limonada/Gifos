
// function showTrending() {

// }


// const APIKEY = "DhEvyTwp8swMj1cYtO5Bgno6W8cKXuc5";
// const giphyUrl = "http://api.giphy.com/v1/gifs/";

// function searchKeyword() {
//   let keyword = document.getElementById("keyword").value.trim(); //toma el keyword del imput
//   alert(keyword);
//   fetchApi(keyword);
//   return;
// }

// async function fetchApi(keyword) {
//   let searchUrl = giphyUrl + "search?api_key=" + APIKEY + "&q=" + keyword + "&limit=4"; //endpoint para search
//   console.log(searchUrl);  
//   try {
//     let response = await fetch(searchUrl); //pide datos de api
//     let data = await response.json(); //extrae los datos de la respuesta http
//     return console.log(data); //return data; cambiar luego
//   } catch (error) {
//     console.error(error);
//     alert("Ups! vuelve a intentar");
//   }
// }


// document.addEventListener("DOMContentLoaded", giphyTrend);
// let url =
//   "http://api.giphy.com/v1/stickers/trending?api_key=dc6zaTOxFJmzC&limit=10";

// function giphyTrend(keyword) {
//   let found = fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       return data;
//     })
//     .catch(error => {
//       return error;
//     });
//   return found;
// };

// giphyTrend();
 
