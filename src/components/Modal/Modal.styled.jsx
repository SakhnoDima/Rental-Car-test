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
  padding: 150px 0;
  overflow: hidden;
`;

export const ModalBody = styled.div`
  width: 541px;
  padding: 40px;
  position: relative;
  border-radius: 24px;
  background: var(--white-color);
`;
export const BtnClose = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 16px;
  right: 16px;
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

export const Description = styled.p`
  margin-top: 14px;
  color: var(--primary-text-color);
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const AccessoriesList = styled.ul`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  color: var(--secondary-text-color);
  li {
    padding-right: 6px;
    display: flex;
    align-items: center;
    border-right: 1px solid rgba(18, 20, 23, 0.1);
    &:last-child {
      border: none;
    }
  }
`;

export const ModalTitleText = styled.p`
  margin: 24px 0 8px;
  color: var(--primary-text-color);
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const RentalConditionBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const RentalConditionItem = styled.p`
  padding: 7px 14px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  border-radius: 35px;
  background: var(--dark-gray);
  span {
    font-family: Montserrat;
    letter-spacing: -0.24px;
  }
`;

export const SpanBlueColor = styled.span`
  color: #3470ff;
  font-weight: 600;
`;
export const Button = styled.a`
  width: 168px;
  height: 44px;
  padding: 12px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #3470ff;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: var(--white-color);
  margin-top: auto;

  &:hover,
  &:focus {
    background-color: var(--btn-bg-hover-color);
  }
`;
