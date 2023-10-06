import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCars } from "../redux/operations";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars(2));
  }, [dispatch]);
  return <div>HomePage</div>;
};

export default HomePage;
