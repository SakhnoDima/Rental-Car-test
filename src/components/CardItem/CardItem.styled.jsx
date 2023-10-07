import styled from "styled-components";
import { ReactComponent as Heard } from "../../svg/normal.svg";
export const CarImgWrapper = styled.div`
  overflow: hidden;
  border-radius: 12px;
  position: relative;
`;

export const ButtonHeard = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
`;
export const StyledHeardSvg = styled(Heard)`
  fill: ${({ $active }) => ($active ? "var(--blue-text-color)" : "")};
  stroke: ${({ $active }) =>
    $active ? "var(--blue-text-color)" : "var(--white-color);"};
  cursor: pointer;

  &:hover {
    fill: var(--blue-text-color);
    stroke: transparent;
  }
`;

export const CarImg = styled.img`
  width: 274px;
  height: 228px;
`;
export const DetailsBox = styled.div`
  margin-bottom: 28px;
`;

export const ModelList = styled.div`
  margin: 14px 0 8px;
  display: flex;
  justify-content: space-between;
  color: var(--primary-text-color);
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
export const DetailersList = styled.div`
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  color: var(--secondary-text-color);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
`;

export const Dropdown = styled.div`
  cursor: pointer;
  position: relative;
  display: inline-block;
  &:hover ul {
    display: block;
  }
`;
export const DropdownChild = styled.ul`
  position: absolute;
  display: none;
  min-width: 100px;
  background-color: var(--light-gray-color);
  z-index: 1;
`;
export const StyledSpan = styled.span`
  color: var(--blue-text-color);
`;
