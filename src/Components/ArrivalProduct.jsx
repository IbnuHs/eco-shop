import React from "react";
import gray from "../assets/Arrival-product/grey.svg";
import grayWhite from "../assets/Arrival-product/white-grey.svg";
import grayLong from "../assets/Arrival-product/gray-long.svg";
import clayGrey from "../assets/Arrival-product/clay-grey.svg";
import bench from "../assets/Arrival-product/bench.svg";
import table from "../assets/Arrival-product/table.svg";
import chair from "../assets/Arrival-product/chair.svg";
import whiteTable from "../assets/Arrival-product/white-table.svg";

export default function ArrivalProduct() {
  return (
    <div className="py-10 px-4 lg:px-[60px] relative">
      <h1 className="text-[24px] font-Libre font-bold text-center lg:text-[40px]">
        New Arrival
      </h1>
      <p className="text-[12px] font-inter text-[#666666] text-center lg:text-[16px]">
        Be the first to have the first-class product
      </p>
      <div className="flex gap-4 overflow-scroll no-scrollbar lg:snap-mandatory">
        <div className="min-w-[180px] md:min-w-[300px] lg:min-w-[312px] lg:snap-center">
          <img src={gray} alt="" className="aspect-square m-auto" />
          <h1 className="text-[14px] font-semibold font-inter lg:text-[20px]">
            Lollygagger Recycled Lounge Chair
          </h1>
          <p className="text-[12px] font-inter font-semibold text-[#658C4A] lg:text-[16px]">
            Rp699.900
          </p>
        </div>
        <div className="min-w-[180px] md:min-w-[300px] lg:min-w-[312px]">
          <img src={clayGrey} alt="" className="aspect-square m-auto" />
          <h1 className="text-[14px] font-semibold font-inter lg:text-[20px]">
            Lollygagger Recycled Lounge Chair
          </h1>
          <p className="text-[12px] font-inter font-semibold text-[#658C4A] lg:text-[16px]">
            Rp999.900
          </p>
        </div>
        <div className="min-w-[180px] md:min-w-[300px] lg:min-w-[312px]">
          <img src={grayWhite} alt="" className="aspect-square m-auto" />
          <h1 className="text-[14px] font-semibold font-inter lg:text-[20px]">
            Nisswa Recycled Loveseat
          </h1>
          <p className="text-[12px] font-inter font-semibold text-[#658C4A] lg:text-[16px]">
            Rp1.399.900
          </p>
        </div>
        <div className="min-w-[180px] md:min-w-[300px] lg:min-w-[312px]">
          <img src={grayLong} alt="" className="aspect-square m-auto" />
          <h1 className="text-[14px] font-semibold font-inter lg:text-[20px]">
            Lollygagger Recycled Outdoor Chaise
          </h1>
          <p className="text-[12px] font-inter font-semibold text-[#658C4A] lg:text-[16px]">
            Rp1.199.900
          </p>
        </div>
        <div className="min-w-[180px] md:min-w-[300px] lg:min-w-[312px]">
          <img src={bench} alt="" className="aspect-square m-auto" />
          <h1 className="text-[14px] font-semibold font-inter lg:text-[20px]">
            Recycled Cubby Bench
          </h1>
          <p className="text-[12px] font-inter font-semibold text-[#658C4A] lg:text-[16px]">
            Rp1.159.900
          </p>
        </div>
        <div className="min-w-[180px] md:min-w-[300px] lg:min-w-[312px]">
          <img src={table} alt="" className="aspect-square m-auto" />
          <h1 className="text-[14px] font-semibold font-inter lg:text-[20px]">
            Fresh Air Recycled Table
          </h1>
          <p className="text-[12px] font-inter font-semibold text-[#658C4A] lg:text-[16px]">
            Rp999.000
          </p>
        </div>
        <div className="min-w-[180px] md:min-w-[300px] lg:min-w-[312px]">
          <img src={chair} alt="" className="aspect-square m-auto" />
          <h1 className="text-[14px] font-semibold font-inter lg:text-[20px]">
            Fresh Air Recycled Table
          </h1>
          <p className="text-[12px] font-inter font-semibold text-[#658C4A] lg:text-[16px]">
            Rp659.000
          </p>
        </div>
        <div className="min-w-[180px] md:min-w-[300px] lg:min-w-[312px]">
          <img src={whiteTable} alt="" className="aspect-square m-auto" />
          <h1 className="text-[14px] font-semibold font-inter lg:text-[20px]">
            Fresh Air Recycled Table
          </h1>
          <p className="text-[12px] font-inter font-semibold text-[#658C4A] lg:text-[16px]">
            Rp399.000
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button className="text-[14px] font-inter bg-[#658C4A] py-3 px-6 text-white rounded-[40px] m-auto">
          See More
        </button>
      </div>
      <div className="absolute top-12 right-20 gap-4 hidden lg:flex">
        <button className="px-2 py-2 bg-[#E7CEC0] rounded-full hover:text-white transition ease-out duration-100 hover:bg-[#658C4A]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        <button className="px-2 py-2 bg-[#E7CEC0] rounded-full hover:text-white transition ease-out duration-100 hover:bg-[#658C4A]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
