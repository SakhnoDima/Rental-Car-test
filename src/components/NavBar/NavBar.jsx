import React from "react";
import { StyleLink } from "./NavBar.styled";

const NavBar = () => {
  return (
    <div>
      <StyleLink to="/">Home</StyleLink>
      <StyleLink to="/catalog">Catalog</StyleLink>
      <StyleLink to="/favorites">Favorites</StyleLink>
    </div>
  );
};

export default NavBar;
