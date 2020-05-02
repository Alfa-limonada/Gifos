
const APIKEY = "DhEvyTwp8swMj1cYtO5Bgno6W8cKXuc5";
const GYPHY_BASE_URL = "http://api.giphy.com/v1/gifs/"; // por buenas prácticas las constantes globales van en mayúsculas

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