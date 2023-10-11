import React from "react";
import PropTypes from "prop-types";
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
import { selectors } from "../../redux/selectors";
import useToggleModal from "../../hook/useToggleModal";
import Modal from "../Modal/Modal";

const CardItem = ({ car }) => {
  const dispatch = useDispatch();
  const { favoritesCarsList } = selectors();
  const favoriteCars = useSelector(favoritesCarsList);
  const { openModal, isOpen, closeModal, handleKeyDown, handleBackdropClick } =
    useToggleModal();

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
          <p>{car.address?.split(",")[1]}</p>
          <ReactLogo />
          <p>{car.address?.split(",")[2]}</p>
          <ReactLogo />
          <p>{car.rentalCompany}</p>
        </DetailersList>
        <DetailersList>
          <p>{car.model}</p>
          <ReactLogo />
          <Dropdown>
            <p>Accessories</p>
            <DropdownChild>
              {car.accessories?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </DropdownChild>
          </Dropdown>
          <ReactLogo />
          <Dropdown>
            <p>Functionalities</p>
            <DropdownChild>
              {car.functionalities?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </DropdownChild>
          </Dropdown>
        </DetailersList>
      </DetailsBox>
      <Button onClick={() => openModal()}>Learn more</Button>
      {isOpen && (
        <Modal
          handleBackdropClick={handleBackdropClick}
          handleKeyDown={handleKeyDown}
          carInfo={car}
          onClick={closeModal}
        />
      )}
    </div>
  );
};

export default CardItem;

CardItem.propTypes = {
  car: PropTypes.shape({
    img: PropTypes.string,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
