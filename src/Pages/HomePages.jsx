import React from "react";
import Navbar from "../Components/Navbar";
import HealthyComponents from "../Components/HealthyComponents";
import Category from "../Components/Category";
import MostProduct from "../Components/MostProduct";
import ArrivalProduct from "../Components/ArrivalProduct";
import Commitment from "../Components/Commitment";
import WhyUs from "../Components/WhyUs";
import SectionMedia from "../Components/SectionMedia";
import SubscribePage from "../Components/SubscribePage";

export default function HomePages() {
  return (
    <div>
      <HealthyComponents />
      <Category />
      <MostProduct />
      <ArrivalProduct />
      <Commitment />
      <WhyUs />
      <SectionMedia />
      <SubscribePage />
    </div>
  );
}
