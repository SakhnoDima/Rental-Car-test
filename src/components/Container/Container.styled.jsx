import styled from "styled-components";

const size = {
  mobile: "375px",
  tablet: "768px",
  desktop: "1280px",
};
export const breakpoints = {
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const ContainerStyled = styled.div`
  max-width: ${size.mobile};
  margin: 0 auto;

  @media screen and (${breakpoints.tablet}) {
    max-width: 1024px;
  }

  @media screen and (${breakpoints.desktop}) {
    max-width: 1440px;
  }
`;
