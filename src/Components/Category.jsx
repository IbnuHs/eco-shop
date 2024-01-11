import React from "react";
import clothing from "../assets/desktop/clothing.png";
import bed from "../assets/desktop/bed.png";
import accesories from "../assets/desktop/accesories.png";
import spoon from "../assets/desktop/home-goods.png";
import furniture from "../assets/desktop/furniture.png";

export default function Category() {
  return (
    <div className="grid grid-cols-1 justify-items-center py-6 gap-y-4 md:grid-cols-2 px-4 gap-4 lg:py-20 lg:grid-cols-6 lg:grid-rows-2 lg:grid-flow-row-dense lg:px-20 lg:gap-6">
      <div className="rounded relative lg:col-span-2 lg:col-end-3 lg:row-span-2 lg:row-start-1">
        <img
          src={clothing}
          alt="clothing"
          className="rounded-lg aspect-4/3 object-cover lg:aspect-square"
        />
        <p className="absolute bg-[#333333e6] text-[12px] px-4 py-2 text-white rounded-[40px] bottom-4 left-4 lg:text-[14px] font-inter">
          Clothing
        </p>
      </div>
      <div className="rounded relative lg:col-start-3 lg:col-span-2 lg:row-span-1 lg:w-full lg:h-full">
        <img
          src={bed}
          alt="clothing"
          className="rounded-lg aspect-4/3 object-cover lg:aspect-video lg:absolute lg:h-full lg:w-full"
        />
        <p className="absolute bg-[#333333e6] text-[12px] px-4 py-2 text-white rounded-[40px] bottom-4 left-4 lg:text-[14px] font-inter">
          Bedding
        </p>
      </div>
      <div className="rounded relative lg:col-start-5 lg:col-span-1">
        <img
          src={accesories}
          alt="clothing"
          className="rounded-lg aspect-4/3 object-cover lg:aspect-square h-full w-full"
        />
        <p className="absolute bg-[#333333e6] text-[12px] px-4 py-2 text-white rounded-[40px] bottom-4 left-4 lg:text-[14px] font-inter">
          Accesories
        </p>
      </div>
      <div className="rounded relative lg:col-start-3 lg:col-span-3 lg:col-end-6 lg:w-full lg:overflow-hidden">
        <img
          src={furniture}
          alt="clothing"
          className="rounded-lg aspect-4/3 object-cover lg:object-cover lg:w-full lg:h-full lg:absolute"
        />
        <p className="absolute bg-[#333333e6] text-[12px] px-4 py-2 text-white rounded-[40px] bottom-4 left-4 lg:text-[14px] font-inter">
          Furniture
        </p>
      </div>
      <div className="rounded relative lg:row-span-2 lg:col-start-6 lg:row-start-1 row-start-2">
        <img
          src={spoon}
          alt="clothing"
          className="rounded-lg aspect-4/3 object-cover h-full"
        />
        <p className="absolute bg-[#333333e6] text-[12px] px-4 py-2 text-white rounded-[40px] bottom-4 left-4 lg:text-[14px] font-inter">
          Home Goods
        </p>
      </div>
    </div>
  );
}
