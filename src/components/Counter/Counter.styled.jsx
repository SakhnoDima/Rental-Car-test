import styled from "styled-components";
import { breakpoints } from "../Container/Container.styled";

export const StyledUl = styled.ul`
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 50px;
  @media screen and (${breakpoints.tablet}) {
    flex-direction: row;
  }
`;
export const StyledItem = styled.li`
  padding: 8px;
  text-align: center;
  font-family: Manrope;
  font-size: 32px;
  background-color: var(--dark-gray);
  border-radius: 16px;
`;
