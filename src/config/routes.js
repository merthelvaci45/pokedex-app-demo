import React, { lazy, Suspense } from "react";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { PAGE_ROUTES } from "../utils";

const AllPokemons = lazy(() => import("../pages/AllPokemons"));
const CaughtPokemons = lazy(() => import("../pages/CaughtPokemons"));
const FavoritePokemons = lazy(() => import("../pages/FavoritePokemons"));
const PokemonDetails = lazy(() => import("../pages/PokemonDetails"));

/**
 * Routing Pages
 * Add all site pages here
 */
export default (
  <Router>
    <Suspense fallback={<small>Loading...</small>}>
      <Switch>
        <Route exact path={PAGE_ROUTES.home} component={AllPokemons} />
        <Route path={PAGE_ROUTES.caughtPokemons} component={CaughtPokemons} />
        <Route
          path={PAGE_ROUTES.favoritePokemons}
          component={FavoritePokemons}
        />
        <Route path="/pokemons/:id" component={PokemonDetails} />
      </Switch>
    </Suspense>
  </Router>
);
