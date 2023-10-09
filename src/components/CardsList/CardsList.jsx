import React from "react";
import PropTypes from "prop-types";
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

CardsList.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
