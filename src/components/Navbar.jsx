import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import Button from "./Button";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 transition ease-in-out duration-100 ${
              active === nav.title ? `text-white hover:text-secondary` : `text-dimWhite hover:text-secondary`
            } `}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}

        <a
          href="https://github.com/kranthikumarkaranam/hoo-bank"
          target="_blank"
          rel="noreferrer"
        >
          <Button text="Source Code" styles="py-3 px-4 text-[16px]" />
        </a>
      </ul>

      


      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={"font-poppins font-normal cursor-pointer text-[16px] mb-4 text-white hover:text-secondary"}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}

            <li
              className={`font-poppins font-normal cursor-pointer text-[16px] text-secondary mb-0`}
            >
              <a
                href="https://github.com/kranthikumarkaranam/hoo-bank"
                target="_blank"
                rel="noreferrer"
              >
                Source Code
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
