import styled from "styled-components";
import { ReactComponent as Logo } from "../../svg/car-inspection-icon.svg";
import { breakpoints } from "../Container/Container.styled";

export const HeaderBox = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 25px;
  background-color: #3470ff;

  button {
    color: var(--white-color);
    &:active {
      color: var(--btn-bg-hover-color);
    }
  }

  @media screen and (${breakpoints.tablet}) {
    padding: 10px 100px;
  }
`;

export const LogoStyled = styled(Logo)`
  width: 30px;
  height: 30px;
  fill: var(--white-color);
`;
