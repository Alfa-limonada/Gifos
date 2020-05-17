document.addEventListener("DOMContentLoaded", searchTrending);
let trendingUrl = GYPHY_BASE_URL + "trending?api_key=" + APIKEY + "&limit=12";
let trendWrap = document.querySelector("#trendWrap");

async function searchTrending() {
    await fetchApi(trendingUrl);
    append(content, trendWrap);
}
