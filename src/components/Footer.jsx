import React, { useState } from "react";

import { badges } from "../constants";
import { Link } from "react-router-dom";
import { sblogowhite, sblogopurple, logoaiadobetrans } from "../assets";
const Footer = ({ theme }) => {
  const [active, setActive] = useState("");

  return (
    <footer className=" text-white px-12 py-6">
      <div className="container mx-auto flex justify-center">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={theme === "dark" ? logoaiadobetrans : sblogowhite}
            alt="logo"
            className="w-36 h-36 object-contain"
          />
        </Link>
        {/* New badges icons media here  */}
      </div>

      <p className="flex flex-col text-white items-center justify-center dark:text-[#8954fb]">
        All rights reserved 2023 &copy;
      </p>
      <p className="flex flex-col text-white items-center justify-center dark:text-[#a37ff0]">
        Suliman Badour
      </p>
      <div className=" mt-4 items-center flex justify-center">
        <ul className="hidden sm:flex flex gap-4">
          {badges.map((item) => (
            <li
              key={item.name}
              className="h-12 w-12 cursor-pointer"
              onClick={() => {
                setActive(item.link);
              }}
            >
              <a href={item.link} target={item.link} rel="noopener noreferrer">
                <img src={item.icon} alt={item.name} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
