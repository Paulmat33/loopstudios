import React from "react";
import Logo from "../assets/loopstudios.svg";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import pinterest from "../assets/pinterest.png";
import instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <footer className="bg-black mt-[96px] px-[56px] text-white lg:flex lg:justify-between lg:items-center lg:pr-[170px] lg:pb-11  ">
      <div className="pt-14 flex flex-col items-center lg:pl-[120px] lg:pt-[44px] lg:flex lg:flex-col lg:items-start lg:gap-4  ">
        <div className="pb-8 lg:pb-0 ">
          <img src={Logo} alt="logo" />
        </div>
        <div className="flex flex-col text-center gap-4 pb-10 lg:flex lg:flex-row lg:gap-4">
          <p>About</p>
          <p>Careers</p>
          <p>Event</p>
          <p>Products</p>
          <p>Support</p>
        </div>
      </div>

      <div className=" flex flex-col items-center  lg:flex lg:flex-col lg:items-end ">
        <div className="flex flex-row gap-4 pb-4 lg:flex lg:flex-row lg:justify-items-end  lg:pb-6">
          <div>
            <img src={facebook} alt="facebook" />
          </div>
          <div>
            <img src={twitter} alt="twitter" />
          </div>
          <div>
            <img src={pinterest} alt="pinterest" />
          </div>
          <div>
            <img src={instagram} alt="instagram" />
          </div>
        </div>

        <div>
          <p className="font-alata text-white font-normal leading-[25px] opacity-50 text-center xs:text-[11px] sm:text-[15px]">© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
