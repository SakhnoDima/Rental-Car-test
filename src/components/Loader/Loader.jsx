import React from "react";
import { Hourglass } from "react-loader-spinner";
import { LoaderBox } from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderBox>
      <Hourglass
        visible={true}
        height="30"
        width="30"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#306cce", "#72a1ed"]}
      />
    </LoaderBox>
  );
};

export default Loader;
