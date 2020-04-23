/*Buscar en la api a partir de un string del usuario*/

const APIKEY = "DhEvyTwp8swMj1cYtO5Bgno6W8cKXuc5";
const GYPHY_BASE_URL = "http://api.giphy.com/v1/gifs/"; // por buenas prácticas las constantes globales van en mayúsculas


// la función se convierte en asíncrona para poder usar la sentencia 'await'
async function searchKeyword() {  
  let keyword = document.getElementById("keyword").value.trim(); //toma el keyword del imput
  let searchUrl = GYPHY_BASE_URL + "search?api_key=" + APIKEY + "&q=" + keyword + "&limit=4"; //endpoint para search
  // alert(searchUrl);
  return await fetchApi(searchUrl); // consumo el api, espero la respuesta (gracias al await) y la retorno.
}

async function fetchApi(searchUrl) {
  try {
    let response = await fetch(searchUrl); //pide datos de api
    let data = await response.json(); //extrae los datos de la respuesta http
    if (response.ok) {// valida que la respuesta del servidor sea ok (status 200)
      console.log(data);
      content = data;                  
    }
    return null; // sirve para determinar que el fetch no se realizó correctamente
  } catch (error) {
    console.error(error);
    alert("Ups! vuelve a intentar");
    return null; // sirve para determinar que el fetch no se realizó correctamente
  }
}
