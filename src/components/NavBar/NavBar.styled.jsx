import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBox = styled.div`
  display: flex;
  gap: 12px;

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const StyleLink = styled(NavLink)`
  color: var(--white-color);
  border-radius: 12px;
  cursor: pointer;

  &.active {
    text-shadow: -1px 1px 20px #ffffff;
    color: var(--btn-bg-hover-color);
  }
`;
