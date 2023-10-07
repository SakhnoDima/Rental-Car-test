import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyleLink = styled(NavLink)`
  color: var(--light-text);
  cursor: pointer;

  &.active {
    color: red;
    border-bottom: 2px solid red;
  }
`;
