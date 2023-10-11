import styled from "styled-components";
import { breakpoints } from "../Container/Container.styled";

export const SelectorsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin: 0 auto;
  @media screen and (${breakpoints.tablet}) {
    flex-direction: row;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  margin: 50px 0;
`;

export const StyledSpan = styled.span`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: var(--label-color);
`;

export const StyledInput = styled.input`
  width: 160px;
  height: 48px;
  padding: 14px 70px 14px 24px;
  border-radius: ${({ name }) =>
    name === "mileFrom" ? " 14px 0px 0px 14px" : "0px 14px 14px 0px"};
  border: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;

  &:focus-visible {
    border: 1px solid #3470ff;
    outline: none;
  }
  &::placeholder {
    color: #121417;
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
`;

export const StyledSubmitButton = styled.button`
  color: var(--white-color);
  width: 136px;
  height: 50px;
  display: flex;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  cursor: pointer;
  margin-top: auto;
  outline: none;
  &:disabled {
    background: #88a7edac;
    &:hover {
      background: #88a7edac;
    }
  }
  &:hover {
    background: var(--btn-bg-hover-color);
    color: var(--white-color);
  }
`;
