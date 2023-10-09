import React from "react";
import { BackgRoundBox, TitleText } from "./EmptyFavoriteSection.styled";

const EmptyFavoriteSection = () => {
  return (
    <section>
      <BackgRoundBox>
        <TitleText>Your Favorites list is empty</TitleText>
      </BackgRoundBox>
    </section>
  );
};

export default EmptyFavoriteSection;
