import React from "react";
import PropTypes from "prop-types";

import { MobMenuBox, StyledLink } from "./MobNav.styled";

const MobNav = ({ handleClick }) => {
  return (
    <MobMenuBox>
      <StyledLink onClick={handleClick} to="/">
        Home
      </StyledLink>
      <StyledLink onClick={handleClick} to="/catalog">
        Catalog
      </StyledLink>
      <StyledLink onClick={handleClick} to="/favorites">
        Favorites
      </StyledLink>
    </MobMenuBox>
  );
};

export default MobNav;

MobNav.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
