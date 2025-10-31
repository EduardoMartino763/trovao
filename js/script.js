var APIKEY = "a65dbb2240a449bd8e7183620242804";

function addCidadeCard(event){
    console.log(event);
    let cidadeNome = document.getElementById("txtCidade").value;
    alert(cidadeNome);
}

function populaCard(event){
    let dadosClima = JSON.parse(this.responseText);
    let cityCard = document.getElementById(dadosClima.location.name + "Card");
    let cityName = cityCard.querySelector(".cityName");
    cityName.innerHTML = dadosClima.location.name;
    let cityTemp = cityCard.querySelector(".temp");
    cityTemp.innerHTML = dadosClima.current.temp_c + " C";
    let cityCondition = cityCard.querySelector(".condition");
    cityCondition.innerHTML = '<span>Clima<\span><span>'+dadosClima.current.condition.text+'<\span>';
    let citySensation = cityCard.querySelector(".sensacao");
    citySensation.innerHTML = '<span>Sensação Térmica</span><span>'+dadosClima.current.feelslike_c+'&deg;C</span>';
    //console.log(dadosClima);
}

function buscarDadosClima(cidade){
    let req = new XMLHttpRequest();
    req.addEventListener("load",populaCard);
    req.open("GET","http://api.weatherapi.com/v1/current.json?key="+APIKEY+"&q="+cidade+"&aqi=no");
    req.send();
}

function carregarSite(){
    let cidades = document.getElementsByClassName("cityName");
    for (let i = 0;i < cidades.length;i++){
        buscarDadosClima(cidades[i].innerHTML);
    }
    let btnAddCidade = document.getElementById("btnAddCity");
    btnAddCidade.addEventListener('click',addCidadeCard);
}