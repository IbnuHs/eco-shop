import React from "react";
import hero from "../assets/table-with-lunch-things-lunchbox-cup.png";

export default function HealthyComponents() {
  return (
    <div className="md:flex">
      <div className="text-center py-20 px-10 bg-Healthy bg-center bg-no-repeat bg-cover md:py-12 md:px-5 md:pl-10 md:bg-nah md:text-start md:flex-1 lg:pl-[120px]">
        <h1 className="text-[40px] font-semibold font-Libre text-[#333] md:text-[30px] lg:text-[40px] xl:text-[56px]">
          Healthy cutlery, healthy body
        </h1>
        <p className="text-[14px] py-6 text-[#666] leading-5 md:text-[12px] md:py-4 md:pr-[120px] lg:text-[14px] xl:text-[20px] xl:py-6">
          Upgrade your dining experience and begin your path to a healthy you
          right now.
        </p>
        <button className="bg-[#658C4A] px-6 py-3 rounded-[40px] text-white md:py-2 lg:text-[14px] xl:text-[20px]">
          Learn More
        </button>
      </div>
      <img
        src={hero}
        alt=""
        className="hidden w-1/2 md:block object-cover flex-1"
      />
    </div>
  );
}
