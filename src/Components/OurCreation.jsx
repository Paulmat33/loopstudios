import React from "react";
import Group1 from "../assets/Group-1.png";
import Group2 from "../assets/Group-2.png";
import Group3 from "../assets/Group-3.png";
import Group4 from "../assets/Group-4.png";
import Group5 from "../assets/Group-5.png";
import Group6 from "../assets/Group-6.png";
import Group7 from "../assets/Group-7.png";
import Group8 from "../assets/Group-8.png";

const OurCreation = () => {
  return (
    <section className="mt-[96px] mx-[24px] space-y-6 flex flex-col justify-center">
      <div>
        <h1 className="font-josefinSans font-light text-[32px] leading-[32px] text-center text-black pb-[48px] ">OUR CREATIONS</h1>
      </div>
      <img src={Group1} alt="group1" />
      <img src={Group2} alt="group2" />
      <img src={Group3} alt="group3" />
      <img src={Group4} alt="group4" />
      <img src={Group5} alt="group5" />
      <img src={Group6} alt="group6" />
      <img src={Group7} alt="group7" />
      <img src={Group8} alt="group8" />

      <div className="flex justify-center mt-[34px]">
        <button className="font-alata font-normal leading[14px] text-black text-[14px] text-center py-[13px] px-[48px] border border-black ">
          SEE ALL
        </button>
      </div>
    </section>
  );
};

export default OurCreation;
