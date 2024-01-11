import React from "react";
import badge from "../assets/footer/badge.svg";
import bca from "../assets/footer/bca.svg";
import mandiri from "../assets/footer/mandiri.svg";
import bni from "../assets/footer/BNI.svg";
import bri from "../assets/footer/bri.svg";
import bsi from "../assets/footer/Bank Syariah Indonesia.svg";
import mega from "../assets/footer/MEGA.svg";
import maybank from "../assets/footer/MAYBANK.svg";
import gopay from "../assets/footer/GOPAY.svg";
import shopeePay from "../assets/footer/SHOPEEPAY.svg";
import dana from "../assets/footer/DANA.svg";
import visa from "../assets/footer/VISA.svg";
import masterCard from "../assets/footer/MASTERCARD.svg";
import whatsapp from "../assets/footer/Social Media.svg";
import tiktok from "../assets/footer/Social Media (1).svg";
import instagram from "../assets/footer/Social Media (2).svg";
import facebook from "../assets/footer/Social Media (3).svg";

export default function Footer() {
  return (
    <div className="bg-footer px-4">
      <img src={badge} alt="" className="m-auto py-10" />
      <div className="grid grid-cols-2 justify-items-center gap-4 lg:grid-cols-4">
        <div className="font-inter">
          <h1 className="text-[#658C4A] text-[16px] font-semibold lg:text-[20px]">
            Product Categories
          </h1>
          <ol className="text-[12px] font-semibold mt-2 flex flex-col gap-2 text-[#333333] font-inter lg:text-[16px]">
            <li>
              <a href="" className="font-inter">
                About Us
              </a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
          </ol>
        </div>
        <div className="font-inter">
          <h1 className="text-[#658C4A] text-[16px] font-semibold lg:text-[20px]">
            Product Categories
          </h1>
          <ol className="text-[12px] font-semibold mt-2 flex flex-col gap-2 text-[#333333] font-inter lg:text-[16px]">
            <li>
              <a href="">New</a>
            </li>
            <li>
              <a href="">Clothing</a>
            </li>
            <li>
              <a href="">Bath & Bedding</a>
            </li>
            <li>
              <a href="">Home Goods</a>
            </li>
            <li>
              <a href="">Furniture</a>
            </li>
            <li>
              <a href="">Accesories</a>
            </li>
            <li>
              <a href="">Gift</a>
            </li>
          </ol>
        </div>
        <div className="font-inter">
          <h1 className="text-[#658C4A] text-[16px] font-semibold lg:text-[20px]">
            Product Categories
          </h1>
          <ol className="text-[12px] font-semibold mt-2 flex flex-col gap-2 text-[#333333] font-inter lg:text-[16px]">
            <li>
              <a href="">Shipping</a>
            </li>
            <li>
              <a href="">Returns</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Terms of Use</a>
            </li>
            <li>
              <a href="">Affiliates</a>
            </li>
          </ol>
        </div>
        <div className="font-inter">
          <h1 className="text-[#658C4A] text-[16px] font-semibold lg:text-[20px]">
            Payment
          </h1>
          <ol className="grid grid-cols-4 gap-2 mt-2">
            <li>
              <img src={bca} alt="bca icon" className="lg:w-14" />
            </li>
            <li>
              <img src={mandiri} alt="madniri icon" className="lg:w-14" />
            </li>
            <li>
              <img src={bni} alt="bni icon" className="lg:w-14" />
            </li>
            <li>
              <img src={bri} alt="bri icon" className="lg:w-14" />
            </li>
            <li>
              <img
                src={bsi}
                alt="bsi icon"
                className="lg:w-14 bg-white h-full rounded-md pl-2"
              />
            </li>
            <li>
              <img src={mega} alt="Bank Mega icon" className="lg:w-14" />
            </li>
            <li>
              <img src={maybank} alt="Maybank icon" className="lg:w-14" />
            </li>
            <li>
              <img src={gopay} alt="gopay icon" className="lg:w-14" />
            </li>
            <li>
              <img src={shopeePay} alt="ShoppeePay icon" className="lg:w-14" />
            </li>
            <li>
              <img src={dana} alt="Dana icon" className="lg:w-14" />
            </li>
            <li>
              <img src={visa} alt="Visa icon" className="lg:w-14" />
            </li>
            <li>
              <img src={masterCard} alt="MasterCard icon" className="lg:w-14" />
            </li>
          </ol>
        </div>
      </div>
      <hr className="bg-black h-[2px] m-auto mt-[30px] w-[90%] lg:w-full" />
      <div className="flex justify-center mt-4 flex-col gap-6 pb-5">
        <div className="flex gap-4 m-auto">
          <img src={whatsapp} alt="" />
          <img src={tiktok} alt="" />
          <img src={instagram} alt="" />
          <img src={facebook} alt="" />
        </div>
        <p className="text-[12px] font-inter text-center">
          © 2023 Eco Shop Indonesia. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
