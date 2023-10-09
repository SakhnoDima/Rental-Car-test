import styled from "styled-components";

export const ButtonStyled = styled.button`
  display: flex;
  width: 274px;
  cursor: pointer;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  text-decoration: ${({ $loadMore }) => $loadMore && "underline"};
  background: ${({ $loadMore }) =>
    $loadMore ? "var(--white-color)" : "#3470ff"};
  color: ${({ $loadMore }) =>
    $loadMore ? "var(--blue-text-color)" : "var(--white-color)"};
  margin: ${({ $loadMore }) => $loadMore && "0 auto 20px"};
  &:hover {
    background: ${({ $loadMore }) =>
      $loadMore ? "transparent" : "var(--btn-bg-hover-color)"};
    color: ${({ $loadMore }) =>
      $loadMore ? "var(--btn-text-loadMore-hover)" : "var(--white-color)"};
  }
`;
