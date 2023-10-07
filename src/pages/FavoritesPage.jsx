import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetCarsList } from "../redux/cars/operations";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetCarsList());
  }, [dispatch]);

  return <div>FavotitesPare</div>;
};

export default FavoritesPage;
