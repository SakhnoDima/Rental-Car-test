import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { forCarData, resetCarsList } from "../redux/cars/operations";
import Hero from "../components/Hero/Hero";
import Counter from "../components/Counter/Counter";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(forCarData());
    dispatch(resetCarsList());
  }, [dispatch]);

  return (
    <>
      <Hero />
      <Counter />
    </>
  );
};

export default HomePage;
