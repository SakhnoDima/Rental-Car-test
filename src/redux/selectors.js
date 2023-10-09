export const selectors = () => {
  const carsList = (state) => state.cars.cars;
  const isLoadingCarsList = (state) => state.cars.isLoading;
  const favoritesCarsList = (state) => state.favorites.favorites;

  return { carsList, isLoadingCarsList, favoritesCarsList };
};
