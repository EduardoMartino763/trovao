var APIKEY = "a65dbb2240a449bd8e7183620242804";

function populaCard(event){
    let dadosClima = JSON.parse(this.responseText);
    console.log(dadosClima);
}

function buscarDadosClima(cidade){
    let req = new XMLHttpRequest();
    req.addEventListener("load",populaCard);
    req.open("GET","http://api.weatherapi.com/v1/current.json?key="+APIKEY+"&q="+cidade+"&aqi=no");
    req.send();
}

buscarDadosClima("São Paulo");
buscarDadosClima("Rio de Janeiro");
buscarDadosClima("Belo Horizonte");
buscarDadosClima("Marília");
buscarDadosClima("Assis");