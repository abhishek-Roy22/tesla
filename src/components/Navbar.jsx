import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/tesla.svg";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex flex-row justify-between items-center pl-5 pr-5">
      <Link to="/">
        <img src={Logo} alt="logo" className="w-28 h-28" />
      </Link>
      <nav className="hidden lg:flex gap-5 font-semibold text-[16px]">
        <h5 className="cursor-pointer">Model S</h5>
        <h5 className="cursor-pointer">Model 3</h5>
        <h5 className="cursor-pointer">Model X</h5>
        <h5 className="cursor-pointer">Model Y</h5>
        <h5 className="cursor-pointer">Solar Roof</h5>
        <h5 className="cursor-pointer">Solar Panels</h5>
      </nav>
      <nav className="hidden lg:flex gap-5 font-semibold text-[16px]">
        <h5 className="cursor-pointer">Shop</h5>
        <h5 className="cursor-pointer">Account</h5>
        <h5 className="cursor-pointer">Menu</h5>
      </nav>
      <div className="absolute right-2">
        <button
          className="block lg:hidden text-[16px] font-semibold border-none rounded-md bg-slate-400 pt-1 pb-1 pl-2 pr-2"
          onClick={() => setToggle(true)}
        >
          Menu
        </button>
        {toggle && <Sidebar closeToggle={setToggle} />}
      </div>
    </div>
  );
};

export default Navbar;
