import React from "react";
import { AiOutlineDown } from "react-icons/ai";

const ModelX = () => {
  return (
    <div className="w-full h-[100vh] bg-ModelX bg-no-repeat bg-center bg-cover relative">
      <div className="hidden lg:flex flex-col justify-center items-center absolute top-[200px] left-1/2">
        <h2 className="font-bold text-2xl">Model X</h2>
        <p>Plaid</p>
      </div>
      <div className=" w-full flex lg:hidden flex-col justify-center items-center absolute top-[150px]">
        <h2 className="font-bold text-2xl">Model X</h2>
        <p className="text-black p-2 mb-1">
          Order Online for{" "}
          <span className=" border-b-2 border-black">Touchless Delivery</span>
        </p>
      </div>
      <div className="hidden w-full lg:flex items-center justify-center gap-14 h-28 absolute bottom-10 ">
        <div className="flex flex-col gap-2">
          <span className="text-2xl text-white font-semibold">396mi</span>
          <p className="text-white font-normal">Range (EPA est)</p>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-2xl text-white font-semibold">1.99s</span>
          <p className="text-white font-normal">0-60mph*</p>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-2xl text-white font-semibold">200mph</span>
          <p className="text-white font-normal">Top Speed</p>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-2xl text-white font-semibold">1,020hp</span>
          <p className="text-white font-normal">Peak Power</p>
        </div>
        <button className="bg-transparent border-gray-100 border-2 rounded-full uppercase pt-1 pb-1 pl-4 pr-4 text-[16px] text-white">
          order now
        </button>
      </div>
      <div className="flex lg:hidden flex-col w-full justify-center p-2 gap-4 absolute bottom-[100px]">
        <button className=" uppercase text-white font-bold bg-gray-600 rounded-full p-3">
          Custom Order
        </button>
        <button className=" uppercase text-black font-normal bg-white rounded-full p-3">
          Existing Inventory
        </button>
      </div>
      <div className="flex lg:hidden absolute bottom-10 left-1/2 text-2xl cursor-pointer">
        <AiOutlineDown />
      </div>
    </div>
  );
};

export default ModelX;
