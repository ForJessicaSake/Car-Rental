import React from "react";
import Image from "next/image";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoMdNotificationsOff, IoMdSettings } from "react-icons/io";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [inputValue, setInputValue] = React.useState("");
  const handleInputChange = () => {
    setInputValue(inputRef.current?.value || "");

  };

  return (
    <nav className=" w-full mx-auto container px-5 lg:px-10 py-5">
      <div className="flex justify-between items-center">
        <h2 className="text-primary text-2xl font-bold">MORENT</h2>
        <div className="relative  hidden lg:block">
          <input
            ref={inputRef}
            placeholder="Search something here"
            onChange={handleInputChange}
            className={`${
              inputValue ? "px-3" : "px-10"
            } h-11 p-3  placeholder:text-lg rounded-lg my-5 lg:my-0 w-[480px] border border-gray-100`}
          />
          {inputValue === "" && (
            <div className="absolute inset-y-0 left-3 text-xl flex items-center pointer-events-none">
              <BsSearch />
            </div>
          )}
        </div>
        <div className="flex space-x-5 items-center">
          <div className="space-x-7 text-2xl hidden lg:flex">
            <IoMdNotificationsOff />
            <MdOutlineFavoriteBorder />
            <IoMdSettings />
          </div>

          <Image
            src="/assets/navbar/avatar.svg"
            alt=""
            width={50}
            height={50}
          />
        </div>
      </div>

      <div className="relative lg:hidden block ">
        <input
          ref={inputRef}
          onChange={handleInputChange}
          placeholder="Search something here"
          className={`${
            inputValue ? "px-3" : "px-10"
          } h-14 p-3 placeholder:text-lg rounded-lg my-5 w-full border`}
        />
        {inputValue === "" && (
          <div className="absolute inset-y-0 left-3 text-xl flex items-center pointer-events-none">
            <BsSearch />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
