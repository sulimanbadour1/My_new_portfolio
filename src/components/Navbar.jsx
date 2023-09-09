import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks, socialLinks } from "../constants";
import { sblogowhite, sblogopurple, logoaiadobetrans } from "../assets";

import { logo, menu, close } from "../assets";

const Navbar = ({ theme }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary dark:bg-indigo-200" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
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
            className="w-28 h-28 object-contain"
          />
          <p className="text-white text-[1p6x] font-bold cursor-pointer flex dark:text-[#915eff]">
            Suliman&nbsp;<span className="sm:block hidden">Badour</span>
          </p>
        </Link>

        {/* New social icons media here  */}
        <div className="items-center flex justify-center">
          <ul className="hidden sm:flex flex-row gap-4">
            {socialLinks.map((item) => (
              <li
                key={item.name}
                className="h-8 w-8 cursor-pointer"
                onClick={() => {
                  setActive(item.link);
                }}
              >
                <a
                  href={item.link}
                  target={item.link}
                  rel="noopener noreferrer"
                >
                  <img
                    src={theme === "dark" ? item.icon2 : item.icon}
                    alt={item.name}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-white dark:text-[#60449e]"
                  : "text-secondary dark:text-[#835cd7] dark:text-opacity-60"
              } hover:text-white text-[14px] font-bold cursor-pointer
               dark:hover:text-[#7c5ebb]  dark:hover:font-bold`}
              onClick={() => {
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins hover:text-white font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
