import React from "react";
import Logo from "../assets/loopstudios.svg";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import pinterest from "../assets/pinterest.png";
import instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <footer className="bg-black mt-[96px] px-[56px] text-white lg:flex lg:flex-row lg:items-center l ">


      <div className="lg:pl-[120px]">
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div className="lg:flex lg:flex-row lg:gap-4">
          <p>About</p>
          <p>Careers</p>
          <p>Event</p>
          <p>Products</p>
          <p>Support</p>
        </div>
      </div>



      <div className="lg:pr-[140px]">
        <div className="lg:flex lg:flex-row lg:justify-items-end lg:gap-4 lg:mr-">
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />

          <img src={pinterest} alt="pinterest" />
          <img src={instagram} alt="instagram" />
        </div>

        <div>
          <p>© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
