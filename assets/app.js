var biterisURL = "https://api.coinranking.com/v2/coin/2XQWDois";
var proxyUrl = "https://cors-anywhere.herokuapp.com/";
var apiKey = "coinranking41977498c63c9f9e6fdbd3c946d3011fdff963f70ccc7ddc";
var baseUrl = "https://api.coinranking.com/v2/coins";

var apiUrl = `${proxyUrl}${biterisURL}`;
console.log(apiUrl);

fetch(`${proxyUrl}${biterisURL}`, { 
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-My-Custom-Header': `${apiKey}`,
      'Access-Control-Allow-Origin': "*"
    }
})
  .then((response) => {
    if (response.ok) {
      response.json().then((json) => {
        console.log(json.data.coin.price);
        let Biteris = json.data.coin.price;
        if (Biteris.length > 0);
        {
        document.getElementById('currentprice').innerHTML = "$" + Math.round(Biteris)/100*100;
        }
      });
    }
  })
  .catch((error) => {
    console.log(error);
  });
