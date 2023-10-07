import React from "react";
import Button from "../Button/Button";
import {
  DetailsBox,
  ModelList,
  DetailersList,
  Dropdown,
  DropdownChild,
  CarImg,
  CarImgWrapper,
  ButtonHeard,
  StyledSpan,
  StyledHeardSvg,
} from "./CardItem.styled";
import { ReactComponent as ReactLogo } from "../../svg/Vector 6.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorites,
  removeFromFavorites,
} from "../../redux/favorites/operations";
import { getFavoriteCars } from "../../redux/selectors";
import useToggleModal from "../../hook/useToggleModal";
import Modal from "../Modal/Modal";

const CardItem = ({ car }) => {
  const dispatch = useDispatch();
  const favoriteCars = useSelector(getFavoriteCars);
  const { openModal, isOpen, closeModal } = useToggleModal();

  const isInclude = (id) => {
    return favoriteCars?.map((item) => item.id).includes(id);
  };

  const handleclick = (car) => {
    if (!isInclude(car.id)) {
      dispatch(addFavorites(car));
    } else dispatch(removeFromFavorites(car.id));
  };

  return (
    <div>
      <CarImgWrapper>
        <CarImg src={car.img} alt={car.model} />
        <ButtonHeard>
          <button type="button" onClick={() => handleclick(car)}>
            <StyledHeardSvg $active={isInclude(car.id)} />
          </button>
        </ButtonHeard>
      </CarImgWrapper>
      <DetailsBox>
        <ModelList>
          <p>
            <span>{car.make}&nbsp;</span>
            <StyledSpan>{car.model}</StyledSpan>,&nbsp;
            <span>{car.year}</span>
          </p>
          <p>{car.rentalPrice}</p>
        </ModelList>
        <DetailersList>
          <p>{car.address.split(",")[1]}</p>
          <ReactLogo />
          <p>{car.address.split(",")[2]}</p>
          <ReactLogo />
          <p>{car.rentalCompany}</p>
        </DetailersList>
        <DetailersList>
          <p>{car.model}</p>
          <ReactLogo />
          <Dropdown>
            <p>Accessories</p>
            <DropdownChild>
              {car.accessories.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </DropdownChild>
          </Dropdown>
          <ReactLogo />
          <Dropdown>
            <p>Functionalities</p>
            <DropdownChild>
              {car.functionalities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </DropdownChild>
          </Dropdown>
        </DetailersList>
      </DetailsBox>
      <Button onClick={() => openModal()}>Learn more</Button>
      {isOpen && <Modal carInfo={car} onClick={closeModal} />}
    </div>
  );
};

export default CardItem;
