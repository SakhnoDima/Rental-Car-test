import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetCarsList } from "../redux/cars/operations";
import { selectors } from "../redux/selectors";
import CardsList from "../components/CardsList/CardsList";
import EmptyFavoriteSection from "../components/EmptyFavoriteSection/EmptyFavoriteSection";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const { favoritesCarsList } = selectors();
  const favoriteCars = useSelector(favoritesCarsList);
  useEffect(() => {
    dispatch(resetCarsList());
  }, [dispatch]);

  return (
    <>
      {favoriteCars.length > 0 ? (
        <CardsList cars={favoriteCars} />
      ) : (
        <EmptyFavoriteSection />
      )}
    </>
  );
};

export default FavoritesPage;
