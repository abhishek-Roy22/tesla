import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const Sidebar = ({ closeToggle }) => {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };

  return (
    <div className="absolute -top-[70px] -right-12 w-[350px] bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
      <div className="fixed top-5">
        <AiFillCloseCircle
          fontSize={30}
          className="cursor-pointer"
          onClick={handleCloseSidebar}
        />
      </div>
      <nav className="flex flex-col justify-start mt-10 items-center gap-5 font-semibold text-[16px]">
        <h5 className="cursor-pointer" onClick={handleCloseSidebar}>
          Model S
        </h5>
        <h5 className="cursor-pointer" onClick={handleCloseSidebar}>
          Model 3
        </h5>
        <h5 className="cursor-pointer" onClick={handleCloseSidebar}>
          Model X
        </h5>
        <h5 className="cursor-pointer" onClick={handleCloseSidebar}>
          Model Y
        </h5>
        <h5 className="cursor-pointer" onClick={handleCloseSidebar}>
          Solar Roof
        </h5>
        <h5 className="cursor-pointer" onClick={handleCloseSidebar}>
          Solar Panels
        </h5>
        <h5 className="cursor-pointer" onClick={handleCloseSidebar}>
          Existing Inventory
        </h5>
        <h5 className="cursor-pointer" onClick={handleCloseSidebar}>
          Used Inventory
        </h5>
        <h5 className="cursor-pointer" onClick={handleCloseSidebar}>
          Trade-In
        </h5>
        <h5 className="cursor-pointer" onClick={handleCloseSidebar}>
          Test Drive
        </h5>
        <h5 className="cursor-pointer" onClick={handleCloseSidebar}>
          Powerwall
        </h5>
        <h5 className="cursor-pointer" onClick={handleCloseSidebar}>
          Commercial Energy
        </h5>
        <h5 className="cursor-pointer" onClick={handleCloseSidebar}>
          Utilities
        </h5>
        <h5 className="cursor-pointer" onClick={handleCloseSidebar}>
          Charging
        </h5>
        <h5 className="cursor-pointer" onClick={handleCloseSidebar}>
          Find Us
        </h5>
        <h5 className="cursor-pointer" onClick={handleCloseSidebar}>
          Support
        </h5>
      </nav>
    </div>
  );
};

export default Sidebar;
