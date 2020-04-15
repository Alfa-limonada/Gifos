let trendingUrl = GYPHY_BASE_URL + "trending?api_key=" + APIKEY + "&limit=12";

function searchTrending() {
    fetchApi(trendingUrl);
    alert("eureka");
}

document.addEventListener("DOMContentLoaded", searchTrending);


