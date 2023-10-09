import { Link } from "react-router-dom";
import styled from "styled-components";

export const MobMenuBox = styled.div`
  position: fixed;
  top: 50px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: var(--white-color);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  padding-top: 100px;
`;

export const StyledLink = styled(Link)`
  color: #3470ff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  border: 1px solid #3470ff;
  padding: 14px 44px;
  border-radius: 12px;
  &:active {
    color: var(--white-color);
    background-color: var(--btn-bg-hover-color);
  }
`;
