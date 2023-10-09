import React from "react";
import { useMediaQuery } from "react-responsive";
import { AiOutlineMenu } from "react-icons/ai";
import NavBar from "../NavBar/NavBar";
import useToggleModal from "../../hook/useToggleModal";
import { LogoStyled, HeaderBox } from "./Header.styled";
import MobNav from "../MobNav/MobNav";

const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767.9px)" });

  const { toggleModal, isOpen } = useToggleModal();
  return (
    <>
      <HeaderBox>
        <LogoStyled />
        {isMobile ? (
          <button onClick={toggleModal}>
            <AiOutlineMenu />
          </button>
        ) : (
          <NavBar />
        )}
      </HeaderBox>
      {isOpen && <MobNav handleClick={toggleModal} />}
    </>
  );
};

export default Header;
