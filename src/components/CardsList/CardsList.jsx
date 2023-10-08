import React from "react";
import CardItem from "../CardItem/CardItem";
import { StyledList } from "./CardList.styled";

const CardsList = ({ cars }) => {
  return (
    <StyledList>
      {cars?.map((car) => (
        <li key={car.id}>
          <CardItem car={car} />
        </li>
      ))}
    </StyledList>
  );
};

export default CardsList;
