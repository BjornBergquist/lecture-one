import http from "../pokemonApi"

const searchPokemon = (pokemon) => {
    return http.get("/pokemon/"+pokemon.toLowerCase())
}

export default { searchPokemon }