let trendingUrl = giphyUrl + "trending?api_key=" + APIKEY + "&limit=12";

function searchTrending() {
    fetchApi(trendingUrl);
    alert("eureka");
}

document.addEventListener("DOMContentLoaded", searchTrending);


