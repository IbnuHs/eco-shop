import React from "react";
import vector from "../assets/desktop/Vector.svg";

export default function Commitment() {
  return (
    <div className="bg-Commitment py-20 px-4  bg-center bg-no-repeat md:px-10 lg:px-[60px] lg:py-[120px]">
      <h1 className="text-center font-Libre text-[20px] text-white md:text-[20px] lg:text-[32px]">
        Shop guilt-free knowing that our eco-friendly e-commerce platform is
        committed to reducing environmental impact and promoting sustainable
        practices in every step of the shopping process
      </h1>
      <img src={vector} alt="" className="m-auto mt-10" />
    </div>
  );
}
