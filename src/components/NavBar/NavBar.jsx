import React from "react";
import { NavBox, StyleLink } from "./NavBar.styled";

const NavBar = () => {
  return (
    <NavBox>
      <StyleLink to="/">Home</StyleLink>
      <StyleLink to="/catalog">Catalog</StyleLink>
      <StyleLink to="/favorites">Favorites</StyleLink>
    </NavBox>
  );
};

export default NavBar;
