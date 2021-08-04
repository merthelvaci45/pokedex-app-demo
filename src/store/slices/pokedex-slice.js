import { createSlice } from "@reduxjs/toolkit";

const initialState = { pokedex: [], favorites: [] };

const pokedexSlice = createSlice({
  name: "pokedex",
  initialState,
  reducers: {
    catchPokemon(state, action) {
      const existingPokemonIndex = state.pokedex.findIndex(
        (pokemon) => pokemon.name === action.payload.pokemon.name
      );
      if (existingPokemonIndex >= 0) return;
      state.pokedex = [...state.pokedex, action.payload.pokemon];
    },
    releasePokemon(state, action) {
      const existingPokemonIndex = state.pokedex.findIndex(
        (pokemon) => pokemon.name === action.payload.pokemonName
      );
      if (existingPokemonIndex < 0) return;
      state.pokedex = [...state.pokedex].filter(
        (pokemon) => pokemon.name !== action.payload.pokemonName
      );
    },
    toggleFavoriteStatus(state, action) {
      const existingPokemonIndex = state.favorites.findIndex(
        (pokemon) => pokemon.name === action.payload.pokemon.name
      );
      if (existingPokemonIndex < 0) {
        state.favorites = [...state.favorites, action.payload.pokemon];
      } else {
        state.favorites = [...state.favorites].filter(
          (pokemon) => pokemon.name !== action.payload.pokemon.name
        );
      }
    },
  },
});

export const pokedexReducer = pokedexSlice.reducer;
export const pokedexActions = pokedexSlice.actions;
