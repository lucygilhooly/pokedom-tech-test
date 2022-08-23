import {
    pokemonArray
} from './data/pokemon.js';

const getPokemon = ((pokemon) => {
    return `<div class="card">
            <div class="card__id card__content">${pokemon.id}</div>
            <p class="card__types card__content">${pokemon.types.join(", ")}</p>
            <img class="card__sprite card__image" src="${pokemon.sprite}">
            <h1 class="card__name card__heading"> ${pokemon.name}</h1>
            </div>`
})


const newContainer = document.querySelector(".card-container");

pokemonArray.forEach((pokemon) => {
    newContainer.innerHTML += getPokemon(pokemon);
})