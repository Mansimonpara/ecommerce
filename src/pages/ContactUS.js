import React from "react";
import { FaFacebook, FaFacebookF, FaPhone, FaTwitter, FaTwitterSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Footer from '../Components/Footer'

const ContactUs = () => {
  return (
    <div className="pt-[180px]">
      <div className="px-4">
        

        <div className="grid grid-cols-1 sm:grid-cols-2 px-4">
          <div className="px-4 mt-6 ">
          <div>
            <h2 className="text-2xl  font-bold">Contact Us</h2>
          </div>
         
          
          <div className="flex gap-3 items-center mt-5 ">
            <FaPhone className="h-6 w-6" />
            <div>
            <h2 className="text-xl mb-2 ">TELEPHONE</h2>
            <p>1800 570 1020 <br/></p>
            <p>Mon-Sat:9:00 AM to 7:00 PM</p>
            </div>
          </div>

          <div className="flex gap-3 items-center mt-4 ">
            <FaFacebookF className="h-6 w-6" />
            <div>
            <h2 className="text-xl mb-1 ">FACEBOOK</h2>
            <p>LIFESTYLE Care <br/></p>
            </div>
          </div>

          <div className="flex gap-3 items-center mt-4 ">
            <FaTwitter className="h-6 w-6" />
            <div>
            <h2 className="text-xl mb-1 ">TWITTER</h2>
            <p>@Lifestyle_care <br/></p>
            </div>
          </div>
          
       
       
        </div>

        <div className="mt-4 ">
          <div>
            <h1 className="text-3xl text-orange-500 font-bold">Get in Touch With US</h1>
            <div className="mt-5">
              <input
                type="text"
                placeholder="Name"
                id="name"
                className="border border-black p-1 w-[100%]"
              />
            </div>
            <div className="mt-5">
              <input
                type="text"
                placeholder="Email"
                className="border border-black p-1 w-[100%]"
              />
            </div>
            <div className="mt-5">
              <input
                type="text"
                placeholder="subject"
                className="border border-black p-1 w-[100%]"
              />
            </div>
            <div className="mt-5">
              <textarea
                type="text"
                placeholder="Message"
                className="border border-black p-1 w-[100%]"
              />
              <button className="p-2 mt-4 text-white rounded-sm bg-orange-500 hover:bg-black mb-3">
                SEND MESSAGE
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactUs;