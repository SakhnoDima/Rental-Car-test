export const priceArr = () => {
  return Array.from({ length: 15 }).map((_, idx) => {
    return {
      value: idx * 10,
      label: `$${idx * 10}`,
    };
  });
};

export const getFilterContacts = (cars, options) => {
  const { brand, mileFrom, mileTo, price } = options;
  return cars.filter(({ make, rentalPrice, mileage }) => {
    const [rent] = rentalPrice.match(/\d+/);
    return (
      (brand === undefined ? make.includes("") : make.includes(brand)) &&
      (price === undefined
        ? parseInt(rent) <= Infinity
        : parseInt(rent) <= price) &&
      (mileFrom === "" ? mileage >= 0 : mileage >= parseInt(mileFrom)) &&
      (mileTo === "" ? mileage <= Infinity : mileage <= parseInt(mileTo))
    );
  });
};
