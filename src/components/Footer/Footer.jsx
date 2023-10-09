import React from "react";
import { FooterBox } from "./Footer.styled";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <FooterBox>
      <a href="https://github.com/SakhnoDima">
        <AiFillGithub />
      </a>
      <p>&copy; {new Date().getFullYear()} Movie Search </p>
    </FooterBox>
  );
};

export default Footer;
