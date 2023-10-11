import React from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";

import { makes } from "../../const/makes";
import { makeStyles, priceStyles } from "./selectStyles";
import { useForm, Controller } from "react-hook-form";
import {
  StyledInput,
  SelectorsBox,
  StyledForm,
  StyledSubmitButton,
  StyledSpan,
} from "./Filter.styled";
import { priceArr } from "../../utils/helpers";

import { getAvailableCars, resetCarsList } from "../../redux/cars/operations";

const Filter = ({ setFilters }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isDirty },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(resetCarsList());
    dispatch(getAvailableCars());

    const { brand, mileFrom, mileTo, price } = data;
    const options = {
      brand: brand?.value,
      price: price?.value,
      mileFrom: mileFrom,
      mileTo: mileTo,
    };
    setFilters(options);

    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <SelectorsBox>
        <div>
          <StyledSpan>Car brand</StyledSpan>
          <Controller
            name="brand"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                name="make"
                placeholder="Enter the text"
                options={makes}
                styles={makeStyles}
              />
            )}
          />
        </div>
        <div>
          <StyledSpan>Price/ 1 hour</StyledSpan>
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                name="price"
                placeholder="To $"
                options={priceArr()}
                styles={priceStyles}
              />
            )}
          />
        </div>
        <div>
          <StyledSpan>Сar mileage / km</StyledSpan>
          <StyledInput
            {...register("mileFrom")}
            type="number"
            name="mileFrom"
            placeholder="From"
          />
          <StyledInput
            {...register("mileTo")}
            type="number"
            name="mileTo"
            placeholder="To"
          />
        </div>
        <StyledSubmitButton type="submit" disabled={!isDirty}>
          Search
        </StyledSubmitButton>
      </SelectorsBox>
    </StyledForm>
  );
};

export default Filter;
