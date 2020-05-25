/* Por mejorar: hacer que se pueda bajar a cada autoCompleteLi con el mouse o teclado y 
al presionar accionar link de búsqueda */

//Crea listener cuando se presiona una tecla
window.onkeyup = autoComplete;

// // borrar autocomplete con click 
document.getElementById("search-button").addEventListener("click", eraseAutoComplete);

// variables
let searchTextValue;
let autoCompleteUrl;
let autoCompleteLi = []; 

//agregar input text al endpoint
async function autoComplete(ev) {
    searchTextValue = ev.target.value.trim();
    autoCompleteUrl = `${GYPHY_BASE_URL}search/tags?api_key=${APIKEY}&q=${searchTextValue}&limit=3`;
    autoCompleteLi = document.querySelectorAll('.auto-li');    
    // console.log(searchTextValue);
    // console.log(autoCompleteUrl);

    if (searchTextValue.length >= 2 && autoCompleteLi.length === 0) {
        await fetchApi(autoCompleteUrl);
        appendAutoComplete(content, autoWrap);
    } else if (searchTextValue.length > 3) { 
        await fetchApi(autoCompleteUrl);
        updateAutoComplete(content)
    }    
}

function appendAutoComplete(content, wrap) {
    let i = 0;
    autoCompleteLi = document.querySelectorAll('.auto-li');
    while (i < content.data.length) {
        //Elementos
        let li = document.createElement("li");
        li.classList.add("auto-li"); 
        //Apend Text node
        li.textContent = content.data[i].name;
        //Append li to DOM
        wrap.appendChild(li);
        i++;
    }
}

function updateAutoComplete(content) {
    let i = 0;
    autoCompleteLi = document.querySelectorAll('.auto-li');
    while (i < content.data.length) {        
        autoCompleteLi[i].innerText = content.data[i].name;
        i++;
    }
}

function eraseAutoComplete() {
    document.querySelectorAll(".auto-li").forEach(e => e.parentNode.removeChild(e));
}