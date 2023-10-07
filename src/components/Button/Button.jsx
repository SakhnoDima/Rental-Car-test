import React from "react";
import { ButtonStyled } from "./Button.styles";

const Button = ({ loadMore = false, children, onClick }) => {
  return (
    <ButtonStyled type="button" $loadMore={loadMore} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
