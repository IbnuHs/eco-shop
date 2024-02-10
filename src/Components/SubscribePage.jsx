import React from "react";

export default function SubscribePage() {
  return (
    <div className="bg-subscribePage pt-[320px] px-4 pb-10 bg-right bg-cover bg-current flex justify-center lg:justify-start lg:px-[60px] lg:pb-[60px] lg:bg-center">
      <div className="bg-white px-6 py-6 rounded-3xl max-w-[648px]">
        <h1 className="font-inter font-semibold text-[14px] lg:text-[20px]">
          Subscribe to our newsletter
        </h1>
        <p className="py-4 font-inter text-[14px] text-[#666666] lg:text-[20px]">
          Be the first to know about exclusive offers, eco-tips, and new
          arrivals!
        </p>
        <div className="border rounded-full overflow-hidden flex px-1 py-1">
          <input
            type="email"
            placeholder="Your Email"
            className="text-[14px] text-gray-600 flex-grow focus:outline-none pl-4 lg:text-[16px]"
          />
          <button className="bg-[#658C4A] text-[14px] text-white px-4 py-2 rounded-full lg:text-[20px]">
            Subscribes
          </button>
        </div>
      </div>
    </div>
  );
}
