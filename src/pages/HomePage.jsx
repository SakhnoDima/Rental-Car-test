import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetCarsList } from "../redux/cars/operations";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetCarsList());
  }, [dispatch]);

  return <div>HomePage</div>;
};

export default HomePage;
