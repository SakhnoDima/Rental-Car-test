export const selectors = () => {
  const carsList = (state) => state.cars.cars;
  const isLoadingCarsList = (state) => state.cars.isLoading;
  const favoritesCarsList = (state) => state.favorites.favorites;
  const carsData = (state) => state.cars.carsData;

  return { carsList, isLoadingCarsList, favoritesCarsList, carsData };
};
