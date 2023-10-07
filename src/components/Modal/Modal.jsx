import React from "react";
import { createPortal } from "react-dom";
import {
  AccessoriesList,
  Description,
  DetailsList,
  ModalBackdrop,
  ModalBody,
  ModelListModal,
  StyledImg,
} from "./Modal.styled";
import { ReactComponent as ReactLogo } from "../../svg/Vector 6.svg";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ onClick, carInfo }) => {
  console.log(carInfo);
  return createPortal(
    <ModalBackdrop>
      <ModalBody>
        <button onClick={onClick}>X</button>

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
          <AccessoriesList>
            {carInfo.accessories.map((item) => (
              <li>
                {item}&nbsp;
                <ReactLogo />
              </li>
            ))}
          </AccessoriesList>
        </div>
      </ModalBody>
    </ModalBackdrop>,
    modalRoot
  );
};

export default Modal;
