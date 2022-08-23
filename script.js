import {
    pokemonArray
} from './data/pokemon.js';

const getPokemon = ((pokemon) => {
    return `<div class="card">
            <img class="card__image" src="${pokemon.sprite}">
            <h1 class="card__heading"> ${pokemon.name}</h1>
            <p class="card__content">${pokemon.name} (#${pokemon.id}) is a ${pokemon.types} ${pokemon.type}</p>
            </div>`
})


const newContainer = document.querySelector(".card-container");

pokemonArray.forEach((pokemon) => {
    newContainer.innerHTML += getPokemon(pokemon);
})