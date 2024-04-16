import React from "react";
import { Audio } from "react-loader-spinner";
import { TailSpin } from "react-loader-spinner";


const ButtonLoader = () => {
  return (
    <TailSpin
      visible={true}
      height="80"
      width="80"
      color="rgb(123, 31, 162)"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default ButtonLoader;
