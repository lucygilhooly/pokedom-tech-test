import {
    pokemonArray
} from './data/pokemon.js';

const getPokemon = ((pokemon) => {
    return `<div class="card">
            <img class="card__image" src="${pokemon.sprite}">
            <h1 class="card-container card__heading"> ${pokemon.name}</h1>
            <p class="card-container card__content card__text">${pokemon.name} (#${pokemon.id}) is a ${pokemon.types} type pokemon.</p>
            </div>`
})


const newContainer = document.querySelector(".card-container");

pokemonArray.forEach((pokemon) => {
    newContainer.innerHTML += getPokemon(pokemon);
})