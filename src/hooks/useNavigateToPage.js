import { useHistory } from "react-router-dom";

import { PAGE_ROUTES } from "../utils";

const useNavigateToPage = () => {
  const history = useHistory();

  const navigateToAllPokemonsPageHandler = () => history.push(PAGE_ROUTES.home);
  const navigateToCaughtPokemonsPageHandler = () =>
    history.push(PAGE_ROUTES.caughtPokemons);
  const navigateToFavoritePokemonsPageHandler = () =>
    history.push(PAGE_ROUTES.favoritePokemons);

  const handlers = [
    navigateToAllPokemonsPageHandler,
    navigateToCaughtPokemonsPageHandler,
    navigateToFavoritePokemonsPageHandler,
  ];

  return handlers;
};

export default useNavigateToPage;
