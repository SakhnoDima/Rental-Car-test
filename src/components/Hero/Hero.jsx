import React from "react";
import { HomeBanner, StyledLink } from "./Hero.styled";

const Hero = () => {
  return (
    <HomeBanner>
      <h1>Your best choice is already waiting</h1>
      <StyledLink to={"/catalog"}>Best cars here</StyledLink>
    </HomeBanner>
  );
};

export default Hero;
