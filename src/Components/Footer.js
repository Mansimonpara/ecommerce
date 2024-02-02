import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaPhoneAlt,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-200 py-10 mt-6 xl:px-28 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <h1 className="font-bold text-black text-xl mb-3">SHOP</h1>
          <p>Ladies</p>
          <p>Men</p>
          <p>Baby</p>
          <p>Kids</p>
          <p>Sport</p>
          <p>Magazine</p>
        </div>

        <div>
          <h1 className="font-bold text-black text-xl mb-3">CORPORATE INFO</h1>
          <p>Career at LIFESTYLE</p>
          <p>About LIFESTYLE group</p>
          <p>Sustainability LIFESTYLE Group</p>
          <p>Press</p>
          <p>Investor relations</p>
          <p>Corporte governance</p>
        </div>

        <div>
          <h1 className="font-bold text-black text-xl mb-3">HELP</h1>
          <p>Payments</p>
          <p>Shipping</p>
          <p>Cancellation & Returns</p>
          <p>FAQ</p>
          <p>Report Infringement</p>
        </div>

        <div>
          <h1 className="font-bold text-black text-xl mb-3">CONSUMER POLICY</h1>
          <p>Terms Of Use</p>
          <p>Security</p>
          <p>Privacy</p>
          <p>Sitemap</p>
          <p>EPR Compllance</p>
        </div>
      </div>

      <div>
        <div className="flex gap-7 mt-10  justify-center">
          <FaInstagram className="w-7 h-7 text-black" />{" "}
          <FaYoutube className="w-7 h-7 text-black" />{" "}
          <FaPinterest className="w-7 h-7 text-black" />{" "}
          <FaFacebook className="w-7 h-7 text-black" />{" "}
          <FaTwitter className="w-7 h-7 text-black" />
        </div>
        <p className=" text-center mt-5 text-s">The content of this site is copyright-protected and is the property of H & M Hennes & Mauritz AB.</p>
        <img src="./assets/logo.PNG" alt="" className= "mx-auto mt-2 w-[150px]"/>
      
      </div>
    </div>
  );
};
export default Footer;
