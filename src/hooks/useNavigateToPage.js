import { useHistory } from "react-router-dom";

import { PAGE_ROUTES } from "../utils";

/**
 * this hook is responsible for keeping the logic for page navigations
 * and required handler functions for navigating to a specific page
 */
const useNavigateToPage = () => {
  const history = useHistory();

  const navigateToAllPokemonsPageHandler = () => history.push(PAGE_ROUTES.home);
  const navigateToCaughtPokemonsPageHandler = () =>
    history.push(PAGE_ROUTES.caughtPokemons);
  const navigateToFavoritePokemonsPageHandler = () =>
    history.push(PAGE_ROUTES.favoritePokemons);

  return [
    navigateToAllPokemonsPageHandler,
    navigateToCaughtPokemonsPageHandler,
    navigateToFavoritePokemonsPageHandler,
  ];
};

export default useNavigateToPage;
