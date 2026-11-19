import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { close, menu, logo, logotext } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex items-center py-2 fixed top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="sm:w-10 sm:h-10 w-9 h-9 object-contain"
          />
          <img
            src={logotext}
            alt="logotext"
            className="sm:w-[90px] sm:h-[90px] w-[85px] h-[85px] -ml-1 object-contain"
          />
        </Link>
        <ul className="hidden sm:flex items-center gap-14 mt-2 justify-center">
          {" "}
          {/* Adjusted justify-center to center the links */}
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`text-eerieBlack hover:text-taupe text-[20px] font-medium font-mova uppercase tracking-[3px] cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <div className="p-6 bg-flashWhite opacity-[0.98] absolute top-0 left-0 w-screen h-[100vh] z-10 menu">
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-6 h-6 object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul className="flex flex-col gap-4 items-start justify-end mt-16">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`text-eerieBlack hover:text-taupe text-[20px] font-medium font-mova uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-6 h-6 object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
