import React from "react";
import tvri from "../assets/sponsor/tvri.svg";
import metroxinwen from "../assets/sponsor/metroxinwen.svg";
import metroglobeNetwork from "../assets/sponsor/metroglobeNetwork.svg";
import metroTv from "../assets/sponsor/metroTv.svg";
import beritaSatu from "../assets/sponsor/beritaSatu.svg";
import cnbc from "../assets/sponsor/cnbc.svg";
import seaToday from "../assets/sponsor/seaToday.svg";
import Inews from "../assets/sponsor/Inews.svg";
import vector from "../assets/sponsor/Vector.svg";
import rectangle from "../assets/sponsor/Rectangle 548.svg";
import rectangleDesktop from "../assets/sponsor/Rectangle destkop.svg";
import vectorDesktop from "../assets/sponsor/Vector desktop.svg";
import line from "../assets/sponsor/Vector 2.svg";
import circle from "../assets/sponsor/Ellipse 1.svg";

export default function SectionMedia() {
  return (
    <div className="bg-[#658C4A] text-[#658C4A] font-bold font-Libre pb-12 relative lg:flex lg:pb-0">
      <img
        src={rectangle}
        alt=""
        className="absolute right-0 lg:right-auto lg:hidden"
      />
      <img
        src={rectangleDesktop}
        alt=""
        className="absolute left-1/3 lg:block hidden"
      />
      <img
        src={circle}
        alt=""
        className="absolute right-0 top-0 lg:block hidden"
      />
      <div className="text-[24px] bg-[#E7CEC0] mx-4 w-1/2 py-10 pl-4 lg:mx-0 lg:w-auto lg:py-20 lg:pl-[120px] flex flex-row gap-1 md:text-[30px] lg:flex-col lg:text-[40px] lg:pr-10">
        <span>We</span> <span>Are</span> <span>Exist</span>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-6 mt-6 relative z-10 px-6 justify-items-center md:grid-cols-4 lg:content-center lg:gap-6 lg:pl-20 lg:overflow-hidden">
        <img
          src={vector}
          alt=""
          className="absolute -z-10 -top-3 left-0 lg:bottom-0 lg:top-auto lg:hidden"
        />
        <img
          src={vectorDesktop}
          alt=""
          className="absolute -z-10 -top-3 lg:bottom-0 lg:top-auto left-10 hidden lg:block"
        />
        <img src={tvri} alt="tvri Logo" className="w-[220px]" />
        <img src={metroxinwen} alt="metro xinwen logo" className="w-[220px]" />
        <img
          src={metroglobeNetwork}
          alt="metro globe network logo"
          className="w-[220px]"
        />
        <img src={metroTv} alt="metro Tv logo" className="w-[220px]" />
        <img src={beritaSatu} alt="Berita Satu logo" className="w-[220px]" />
        <img src={seaToday} alt="SeaToday logo" className="w-[220px]" />
        <img src={Inews} alt="Inews logo" className="w-[220px]" />
        <img src={cnbc} alt="cnbc logo" className="w-[220px]" />

        <div className="absolute -z-10 -bottom-1 left-2/4 justify-center hidden lg:flex">
          <img src={line} alt="" className="" />
          <img src={line} alt="" className="ml-[-220px] mt-[-40px]" />
        </div>
      </div>
    </div>
  );
}
