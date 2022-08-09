let activate = document.querySelector("#submit-btn");
activate.onclick = character;

function characterRange(num){
    switch (num){
        case 1:
            return { lower: 1, upper: 76 };
    }
}

const characterNumGen = function(upper, lower){
    let num = Math.random();

    let numSelect = upper - lower;

    num *= numSelect;

    num += lower;

    return Math.floor(num);
}

function character(profile){
    let nameHeading = document.querySelector("#_name");
    nameHeading.innerHTML = `${profile.id}`;

    let pokeImg = document.querySelector("img");
    pokeImg.src = profile.image;

}

9
function loadAllCharacter (characterId){
    const url = `https://randomuser.me/api/?results=75${characterId}`;

    fetch(url) 
        .then(function(response) {
            // the HTTP reponse object, not the data we need
            console.log(response);
            return response.json();
        })

        .then(function(jsonData){
            console.log(jsonData);

           let whichChar = {
                id: jsonData.id, 
                name: jsonData.name,
                img:jsonData.picture.large
           }

           character(whichChar);
        })
}


