import { createSlice } from "@reduxjs/toolkit";

const initialState = { pokedex: [], favorites: [] };

const pokedexSlice = createSlice({
  name: "pokedex",
  initialState,
  reducers: {
    catchPokemon(state, action) {
      //check if pokemon is already caught or not
      const existingPokemonIndex = state.pokedex.findIndex(
        (pokemon) => pokemon.name === action.payload.pokemon.name
      );
      if (existingPokemonIndex >= 0) return; // it means pokemon is already caught, so do nothing
      state.pokedex = [...state.pokedex, action.payload.pokemon]; // else, add pokemon to pokedex
    },
    releasePokemon(state, action) {
      //check if pokemon is already caught or not
      const existingPokemonIndex = state.pokedex.findIndex(
        (pokemon) => pokemon.name === action.payload.pokemonName
      );
      if (existingPokemonIndex < 0) return; // it means pokemon is already released, so do nothing
      state.pokedex = [...state.pokedex].filter(
        (pokemon) => pokemon.name !== action.payload.pokemonName
      ); // else, remove pokemon from pokedex
    },
    toggleFavoriteStatus(state, action) {
      //check if pokemon is already marked as favorite or not
      const existingPokemonIndex = state.favorites.findIndex(
        (pokemon) => pokemon.name === action.payload.pokemon.name
      );
      if (existingPokemonIndex < 0) {
        // if it is NOT marked as favorite yet, mark it
        state.favorites = [...state.favorites, action.payload.pokemon];
      } else {
        // else, unmark it
        state.favorites = [...state.favorites].filter(
          (pokemon) => pokemon.name !== action.payload.pokemon.name
        );
      }
    },
  },
});

export const pokedexReducer = pokedexSlice.reducer;
export const pokedexActions = pokedexSlice.actions;
