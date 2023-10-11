import React, { useEffect } from "react";
import CountUp from "react-countup";
import { StyledItem, StyledUl } from "./Counter.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectors } from "../../redux/selectors";
import { forCarData } from "../../redux/cars/operations";

const Counter = () => {
  const dispatch = useDispatch();
  const { carsData } = selectors();
  const cars = useSelector(carsData);

  useEffect(() => {
    dispatch(forCarData());
  }, [dispatch]);
  const makes = cars.map((elem) => elem.make);

  return (
    <section>
      <StyledUl>
        <StyledItem>
          <CountUp end={cars.length} duration={2.75} />
          <p>Total Cars Available</p>
        </StyledItem>
        <StyledItem>
          <CountUp end={[...new Set(makes)].length} duration={2.75} />
          <p>Total Makes Available</p>
        </StyledItem>
      </StyledUl>
    </section>
  );
};

export default Counter;
