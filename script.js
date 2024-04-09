var cardsDiv = document.querySelector("#cards")
var curentusername = "";

function getusername(element){
    console.log(element.value);
    curentusername = element.value;
}

function makeCoderCard(data){
    var res = `<div class="card">
                <img src="${data.avatar_url}" alt="${data.login}">
                <h3>${data.login} - ${data.neme} </h3>
                <p>Location: ${data.location}</p>
                <p>Repositories: ${data.public_repos}</p>
    
                </div>` 
    return res;
}

async function search(){
    var response = await fetch("https://api.github.com/users/" + curentusername);
    var coderData = await response.json();    
    console.log(coderData);
    makeCoderCard(coderData);
    cardsDiv.innerHTML = makeCoderCard(coderData) + cardsDiv.innerHTML;
} 