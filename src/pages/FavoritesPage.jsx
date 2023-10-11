import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetCarsList } from "../redux/cars/operations";
import { selectors } from "../redux/selectors";
import CardsList from "../components/CardsList/CardsList";
import EmptyFavoriteSection from "../components/EmptyFavoriteSection/EmptyFavoriteSection";
import { initFilter } from "../const/initFilter";
import { getFilterContacts } from "../utils/helpers";
import Filter from "../components/Filter/Filter";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState(initFilter);
  const { favoritesCarsList } = selectors();
  const favoriteCars = useSelector(favoritesCarsList);

  useEffect(() => {
    dispatch(resetCarsList());
  }, [dispatch]);
  const cardsListForRender = getFilterContacts(favoriteCars, filters);
  return (
    <>
      <Filter setFilters={setFilters} />
      {favoriteCars.length > 0 ? (
        <CardsList cars={cardsListForRender} />
      ) : (
        <EmptyFavoriteSection />
      )}
    </>
  );
};

export default FavoritesPage;
