import React from "react";
import soap from "../assets/product/HandSoap.svg";
import slippers from "../assets/product/slippers.svg";
import laundryPowder from "../assets/product/laundry-powder.svg";
import basket from "../assets/product/basket.svg";

export default function MostProduct() {
  return (
    <div className="bg-[#FFEFE5] py-10 px-4 md:px-10 md:py-20 lg:px-[60px]">
      <h1 className="text-center text-[32px] font-bold font-Libre">
        Our Most Wanted Products
      </h1>
      <p className="font-inter text-[16px] mt-2 text-gray-400 text-center">
        Good for environment, good for you
      </p>

      <div className="grid grid-cols-2  mt-6 gap-4 justify-center md:gap-10 md:mt-16 lg:grid-cols-4 lg:gap-6 lg:mt-10">
        <div className="w-full">
          <img src={soap} alt="Handsoap" className="rounded-xl w-full" />
          <h1 className="text-[14px] font-semibold my-2 pr-3 md:text-[18px] lg:text-[20px] lg:pr-0">
            Alpine Provisions | Cedar + Sandalwood Hand Soap
          </h1>
          <p className="text-[12px] text-[#658C4A] md:text-[16px]">Rp99.900</p>
          <p className="text-[12px] text-[#999999] md:text-[16px] line-through">
            Rp259.000
          </p>
        </div>

        <div className="w-full">
          <img src={slippers} alt="Handsoap" className="rounded-xl w-full" />
          <h1 className="text-[14px] font-semibold my-2 pr-3 md:text-[18px] lg:text-[20px] lg:pr-0">
            Women's Classic Sole Low Back Wool Slippers
          </h1>
          <p className="text-[12px] text-[#658C4A] md:text-[16px]">Rp79.900</p>
          <p className="text-[12px] text-[#999999] md:text-[16px] line-through">
            Rp159.900
          </p>
        </div>

        <div className="w-full">
          <img src={basket} alt="Handsoap" className="rounded-xl w-full" />
          <h1 className="text-[14px] font-semibold my-2 pr-3 md:text-[18px] lg:text-[20px] lg:pr-0">
            Large Patterned Hamper Basket
          </h1>
          <p className="text-[12px] text-[#658C4A] md:text-[16px]">Rp199.900</p>
          <p className="text-[12px] text-[#999999] md:text-[16px] line-through">
            Rp329.900
          </p>
        </div>

        <div className="w-full">
          <img
            src={laundryPowder}
            alt="Handsoap"
            className="rounded-xl w-full"
          />
          <h1 className="text-[14px] font-semibold my-2 pr-3 md:text-[18px] lg:text-[20px] lg:pr-0">
            Meliora | Eco Laundry Powder
          </h1>
          <p className="text-[12px] text-[#658C4A] md:text-[16px]">Rp159.900</p>
          <p className="text-[12px] text-[#999999] md:text-[16px] line-through">
            Rp259.000
          </p>
        </div>
      </div>
    </div>
  );
}
