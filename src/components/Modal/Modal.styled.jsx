import styled from "styled-components";

export const ModalBackdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(18, 20, 23, 0.5);
  backdrop-filter: blur(3.5px);
  transition: opacity 500ms ease-in-out, visibility 500ms ease-in-out;
  opacity: 1;
  visibility: visible;
`;

export const ModalBody = styled.div`
  width: 541px;
  height: 752px;
  padding: 15px 40px 40px;
  position: relative;
  border-radius: 24px;
  background: var(--white-color);
`;

export const StyledImg = styled.img`
  margin: 0 auto;
  border-radius: 25px;
`;

export const ModelListModal = styled.div`
  margin: 14px 0 8px;
  display: flex;
  justify-content: space-between;
  color: var(--primary-text-color);
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  span {
    color: var(--blue-text-color);
  }
`;

export const DetailsList = styled.div`
  margin-bottom: 4px;
  color: var(--secondary-text-color);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  gap: 6px;
`;

export const Description = styled.h2`
  margin: 14px 0 24px;
  color: var(--primary-text-color);
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const AccessoriesList = styled.ul`
  display: flex;
`;
