import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectors } from "../redux/selectors";
import { toast } from "react-toastify";

import CardsList from "../components/CardsList/CardsList";
import Button from "../components/Button/Button";
import { getAllCars } from "../redux/cars/operations";
import Loader from "../components/Loader/Loader";
import Filter from "../components/Filter/Filter";
import { getFilterContacts } from "../utils/helpers";
import { initFilter } from "../const/initFilter";

const CatalogPage = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState(initFilter);

  const { carsList, isLoadingCarsList } = selectors();
  const loading = useSelector(isLoadingCarsList);

  const cars = useSelector(carsList);

  const cardsListForRender = getFilterContacts(cars, filters);

  useEffect(() => {
    dispatch(getAllCars(page));
  }, [dispatch, page]);

  const isLastPage = () => {
    const length = cars.length;
    if (length % 8 !== 0) {
      toast.info("It was last page", {
        theme: "colored",
      });
      return false;
    } else {
      return true;
    }
  };

  const handleclick = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <Filter setFilters={setFilters} />
      <CardsList cars={cardsListForRender} />
      {loading ? (
        <Loader />
      ) : (
        <>
          {isLastPage() && (
            <Button onClick={handleclick} loadMore={true}>
              Load more
            </Button>
          )}
        </>
      )}
    </>
  );
};

export default CatalogPage;
