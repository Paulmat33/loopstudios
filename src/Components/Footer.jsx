import React from "react";
import Logo from "../assets/Loopstudios.svg";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import pinterest from "../assets/pinterest.png";
import instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <footer className="bg-black mt-[96px] px-[56px] ">
      <div className="pt-[56px] flex justify-center">
        <img src={Logo} alt="logo" />
      </div>
      <div className="pt-[32px] flex text-center flex-col text-white leading-[25px] space-y-[16px] font-alata font-normal text-[15px] ">
        <p>About</p>
        <p>Careers</p>
        <p>Event</p>
        <p>Products</p>
        <p>Support</p>
      </div>

      <div className="flex justify-center space-x-[16px] pt-[48px]">
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
        <img src={pinterest} alt="pinterest" />
        <img src={instagram} alt="instagram" />
      </div>

      <div className="pt-4 pb-[56px] ">
        <p className="font-alata text-white font-normal text-[15px] leading-[25px] opacity-50 ">© 2021 Loopstudios. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
