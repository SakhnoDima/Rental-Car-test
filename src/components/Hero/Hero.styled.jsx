import styled from "styled-components";
import bg from "../../img/Japan-car-rental-iStock-Chaiyaporn1144-1024x600.jpg";
import { Link } from "react-router-dom";

export const HomeBanner = styled.section`
  height: 500px;
  padding: 150px 0;
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  h1 {
    color: var(--white-color);
    text-align: center;
    font-family: Manrope;
    font-size: 40px;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  text-align: center;
  margin: 16px auto;
  width: 170px;
  color: var(--white-color);
  border-radius: 12px;
  cursor: pointer;
  padding: 14px 24px;
  background: #3470ff;
  &:hover {
    background: var(--btn-bg-hover-color);
  }
`;
