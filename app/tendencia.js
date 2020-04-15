// document.addEventListener("DOMContentLoaded", giphyTrend);
let url =
  "http://api.giphy.com/v1/stickers/trending?api_key=dc6zaTOxFJmzC&limit=10";

function giphyTrend(keyword) {
  let found = fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(error => {
      return error;
    });
  return found;
};

giphyTrend();
 
