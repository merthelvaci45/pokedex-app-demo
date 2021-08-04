import { configureStore } from "@reduxjs/toolkit";

import { pokedexReducer } from "./slices";

const store = configureStore({
  reducer: { pokedexSlice: pokedexReducer },
});

export default store;
