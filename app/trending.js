document.addEventListener("DOMContentLoaded", searchTrending);

let trendingUrl = GYPHY_BASE_URL + "trending?api_key=" + APIKEY + "&limit=12";


async function searchTrending() {
    await fetchApi(trendingUrl);
    appendTrending(content);
}


function appendTrending(content) {
    let i = 0
    while (i < content.data.length) {
        let trendWrap = document.querySelector("#trendWrap");
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
    trendWrap.appendChild(fig);
    i++
    }
  }

