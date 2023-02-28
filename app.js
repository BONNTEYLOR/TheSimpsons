const btnGenerateCharacter = document.getElementById ('btn-generation-character');

btnGenerateCharacter.addEventListener('click', getCharacter);

function createCard(character) {
    const conterinerCard = document.getElementById('container-card');
    conterinerCard.innerHTML=''

    const imgcharacter = document.createElement('img');
    const namecharacter = document.createElement('h2');
    const quotecharacter = document.createElement('p');
    
    conterinerCard.classList.add('container-card');
    imgcharacter.classList.add('img-character');
    namecharacter.classList.add('name-character');
    quotecharacter.classList.add('quote-character');
    
    imgcharacter.src = character.image;
    imgcharacter.alt = character.character;
    namecharacter.textContent = character.character;
    quotecharacter.textContent = character.quote;
    
    conterinerCard.appendChild(imgcharacter);
    conterinerCard.appendChild(namecharacter);
    conterinerCard.appendChild(quotecharacter);
}

function getCharacter (){
    const requestMethod = {method: 'GET'};
    const URL = 'https://thesimpsonsquoteapi.glitch.me/quotes'

fetch(URL, requestMethod) 
    .then(response => response.json())
    .then(data => createCard(data[0]))
    .catch(err => console.error(err));
}

