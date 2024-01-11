import React, { useState } from "react";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  function toggleNav() {
    setToggle(!toggle);
  }
  return (
    <div className="border-b-2 border-[#658C4A] shadow-md z-auto  font-inter">
      <div className="flex justify-center items-center gap-2 py-3 bg-ads text-white">
        <p className="text-[10px] sm:text-[12px] md:text[14px] lg:text-base">
          Free Shipping with minimum purchase Rp250.000
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          className="lg:hidden"
        >
          <path
            d="M10.4735 3.59982C10.2783 3.40455 9.9617 3.40455 9.76644 3.59982C9.57118 3.79508 9.57118 4.11166 9.76644 4.30692L12.9596 7.50008H2.83333C2.55719 7.50008 2.33333 7.72394 2.33333 8.00008C2.33333 8.27622 2.55719 8.50008 2.83333 8.50008H12.9595L9.76644 11.6931C9.57118 11.8884 9.57118 12.205 9.76644 12.4003C9.9617 12.5955 10.2783 12.5955 10.4735 12.4003L14.5202 8.35359C14.614 8.25982 14.6667 8.13264 14.6667 8.00004C14.6667 7.86743 14.614 7.74025 14.5202 7.64648L10.4735 3.59982Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="flex justify-between px-4 py-3 items-center md:gap-2 lg:px-[120px]">
        <img src={logo} alt="" className="lg:w-24" />
        <div className="hidden border rounded-[40px]  items-center flex-grow md:flex md:max-w-[880px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className=" fill-black ml-3"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.7597 1.33325C3.76281 1.33325 1.33334 3.76271 1.33334 6.75961C1.33334 9.7565 3.76281 12.186 6.7597 12.186C8.09069 12.186 9.30976 11.7068 10.2538 10.9115L13.8727 14.5304C14.0543 14.712 14.3488 14.712 14.5304 14.5304C14.7121 14.3487 14.7121 14.0542 14.5304 13.8726L10.9116 10.2537C11.7069 9.30967 12.1861 8.0906 12.1861 6.75961C12.1861 3.76271 9.75659 1.33325 6.7597 1.33325ZM2.26358 6.75961C2.26358 4.27647 4.27656 2.26348 6.7597 2.26348C9.24284 2.26348 11.2558 4.27647 11.2558 6.75961C11.2558 9.24275 9.24284 11.2557 6.7597 11.2557C4.27656 11.2557 2.26358 9.24275 2.26358 6.75961Z"
              fill="#999999"
            />
          </svg>

          <input
            type="text"
            placeholder="Search here..."
            className="text-[12px] px-3 py-2 h-full rounded-e-[40px] flex-grow outline-none text-base"
          />
        </div>
        <div className="flex gap-2 lg:gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 lg:w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 lg:w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </div>
      </div>
      <div className="px-4 py-3 flex items-center gap-6 justify-between relative z-30 md:justify-center">
        <div className="flex border rounded-[40px]  items-center flex-grow md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className=" fill-black ml-3"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.7597 1.33325C3.76281 1.33325 1.33334 3.76271 1.33334 6.75961C1.33334 9.7565 3.76281 12.186 6.7597 12.186C8.09069 12.186 9.30976 11.7068 10.2538 10.9115L13.8727 14.5304C14.0543 14.712 14.3488 14.712 14.5304 14.5304C14.7121 14.3487 14.7121 14.0542 14.5304 13.8726L10.9116 10.2537C11.7069 9.30967 12.1861 8.0906 12.1861 6.75961C12.1861 3.76271 9.75659 1.33325 6.7597 1.33325ZM2.26358 6.75961C2.26358 4.27647 4.27656 2.26348 6.7597 2.26348C9.24284 2.26348 11.2558 4.27647 11.2558 6.75961C11.2558 9.24275 9.24284 11.2557 6.7597 11.2557C4.27656 11.2557 2.26358 9.24275 2.26358 6.75961Z"
              fill="#999999"
            />
          </svg>

          <input
            type="text"
            placeholder="Search here..."
            className="text-[12px] px-3 py-2 h-full rounded-e-[40px] flex-grow outline-none"
          />
        </div>
        <button onClick={toggleNav} className="md:hidden">
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <ol
          className={` absolute top-[101%] py-2 font-semibold -z-50 flex flex-col right-0 left-0 bg-white ${
            toggle ? "translate-x-0" : "translate-x-[-100%]"
          } transition ease-in md:static md:flex-row md:translate-x-0 md:items-center md:text-sm md:py-0 lg:text-[16px]`}
        >
          <li className="py-2 px-4 hover:bg-[#658C4A] hover:text-white transition ease-out duration-750 cursor-pointer">
            <a href="">NEW!</a>
          </li>
          <li className="py-2 px-4 hover:bg-[#658C4A] hover:text-white transition ease-out duration-750 cursor-pointer">
            <a href="">Clothing</a>
          </li>
          <li className="py-2 px-4 hover:bg-[#658C4A] hover:text-white transition ease-out duration-750 cursor-pointer">
            <a href="">Bath</a>
          </li>
          <li className="py-2 px-4 hover:bg-[#658C4A] hover:text-white transition ease-out duration-750 cursor-pointer">
            <a href="">Bedding</a>
          </li>
          <li className="py-2 px-4 hover:bg-[#658C4A] hover:text-white transition ease-out duration-750 cursor-pointer">
            <a href="">Home Goods</a>
          </li>
          <li className="py-2 px-4 hover:bg-[#658C4A] hover:text-white transition ease-out duration-750 cursor-pointer">
            <a href="">Furniture</a>
          </li>
          <li className="py-2 px-4 hover:bg-[#658C4A] hover:text-white transition ease-out duration-750 cursor-pointer">
            <a href="">Footwear</a>
          </li>
          <li className="py-2 px-4 hover:bg-[#658C4A] hover:text-white transition ease-out duration-750 cursor-pointer">
            <a href="">Accesories</a>
          </li>
        </ol>
      </div>
    </div>
  );
}
