import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import {
  AccessoriesList,
  BtnClose,
  Button,
  Description,
  DetailsList,
  ModalBackdrop,
  ModalBody,
  ModalTitleText,
  ModelListModal,
  RentalConditionBox,
  RentalConditionItem,
  SpanBlueColor,
  StyledImg,
} from "./Modal.styled";
import { ReactComponent as BtnX } from "../../svg/x.svg";
import { ReactComponent as ReactLogo } from "../../svg/Vector 6.svg";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ onClick, carInfo, handleKeyDown, handleBackdropClick }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalBody>
        <BtnClose onClick={onClick}>
          <BtnX />
        </BtnClose>
        <div>
          <StyledImg src={carInfo.img} alt="make" />
          <ModelListModal>
            <p>
              {carInfo.make}&nbsp;
              <span>{carInfo.model}</span>,&nbsp;
              {carInfo.year}
            </p>
          </ModelListModal>
          <DetailsList>
            <p>{carInfo.address.split(",")[1]}</p>
            <ReactLogo />
            <p>{carInfo.address.split(",")[2]}</p>
            <ReactLogo />
            <p>Id:&nbsp;{carInfo.id}</p>
            <ReactLogo />
            <p>Year:&nbsp;{carInfo.year}</p>
            <ReactLogo />
            <p>Type:&nbsp;{carInfo.type}</p>
          </DetailsList>
          <DetailsList>
            <p>Fuel Consumption:&nbsp;{carInfo.fuelConsumption}</p>
            <ReactLogo />
            <p>Engine Size:&nbsp;{carInfo.engineSize}</p>
          </DetailsList>
          <Description>{carInfo.description}</Description>
          <ModalTitleText>Accessories and functionalities:</ModalTitleText>
          <AccessoriesList>
            {[...carInfo.accessories, ...carInfo.functionalities].map(
              (item) => (
                <li key={item}>{item}</li>
              )
            )}
          </AccessoriesList>
          <ModalTitleText>Rental Conditions:</ModalTitleText>
          <RentalConditionBox>
            {carInfo.rentalConditions.split("\n").map((item) => {
              if (item.includes("Minimum age")) {
                return (
                  <RentalConditionItem>
                    <span>
                      Minimum age:&nbsp;
                      <SpanBlueColor>{item.split(":")[1]}</SpanBlueColor>
                    </span>
                  </RentalConditionItem>
                );
              } else return <RentalConditionItem>{item}</RentalConditionItem>;
            })}
            <RentalConditionItem>
              <span>
                Mileage:&nbsp;
                <SpanBlueColor>
                  {carInfo.mileage.toLocaleString("en-US")}
                </SpanBlueColor>
              </span>
            </RentalConditionItem>
            <RentalConditionItem>
              <span>
                Price:&nbsp;
                <SpanBlueColor>{carInfo.rentalPrice}</SpanBlueColor>
              </span>
            </RentalConditionItem>
          </RentalConditionBox>
          <Button href="tel:+380730000000">Rental car</Button>
        </div>
      </ModalBody>
    </ModalBackdrop>,
    modalRoot
  );
};

export default Modal;
