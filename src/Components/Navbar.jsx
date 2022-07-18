import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full h-[90px] bg-white">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className="text-[color:var(--primary-color)]">MenyaMath</h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-black items-center">
            <li>
              <a href="#" class="">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="">
                Courses
              </a>
            </li>
            <li>
              <a href="#" class="">
                Exercises
              </a>
            </li>
            <li>
              <a href="#" class="">
                Tests
              </a>
            </li>
            <button className="ml-4">Simulation</button>
          </ul>
        </div>
        {/* humburger menu  */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={30} className="text-black" />
          ) : (
            <AiOutlineMenu size={30} className="text-black" />
          )}
          ;
        </div>

        {/* mobile menu */}
        <div
          className={
            nav
              ? "w-full bg-white text-black absolute top-[90px] left-0 flex justify-center text-center"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            <li className="text-2xl">
              <a href="#" class="">
                Home
              </a>
            </li>
            <li className="text-2xl">
              <a href="#" class="">
                Courses
              </a>
            </li>
            <li className="text-2xl">
              <a href="#" class="">
                Exercises
              </a>
            </li>
            <li className="text-2xl">
              <a href="#" class="">
                Tests
              </a>
            </li>
            <button className="m-8 ">Simulation</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
