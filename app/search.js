
// la función se convierte en asíncrona para poder usar la sentencia 'await'
async function searchKeyword() {  
  let keyword = document.getElementById("keyword").value.trim(); //toma el keyword del imput
  let searchUrl = GYPHY_BASE_URL + "search?api_key=" + APIKEY + "&q=" + keyword + "&limit=4"; //endpoint para search
  // alert(searchUrl);
  return await fetchApi(searchUrl); // consumo el api, espero la respuesta (gracias al await) y la retorno.
  
}



