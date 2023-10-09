import React from "react";
import PropTypes from "prop-types";
import { ButtonStyled } from "./Button.styles";
import { selectors } from "../../redux/selectors";
import { useSelector } from "react-redux";

const Button = ({ loadMore = false, children, onClick }) => {
  const { isLoadingCarsList } = selectors();
  const loading = useSelector(isLoadingCarsList);
  return (
    <ButtonStyled
      type="button"
      $loadMore={loadMore}
      onClick={onClick}
      disabled={loading}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;

Button.propTypes = {
  loadMore: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
};
