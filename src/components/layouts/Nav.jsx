import React from "react";
import logo from "../../assets/logo.png";

const Nav = () => {
  return (
    <nav className="mt-8">
      <div className=" container   flex justify-between items-center bg-white py-3 px-4    rounded-full">
        <div className="hidden md:block" />
        <div className="w-20 ">
          <img src={logo} alt="logo" className="object-cover" />
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4">
            <img src={"/US.svg"} alt="US Flag" />
          </div>
          <div className="w-4">
            <img src={"/chevronDown.svg"} alt="chevronDown" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
