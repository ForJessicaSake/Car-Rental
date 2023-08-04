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

        <div className="flex space-x-5 items-center cursor-pointer">
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
            className="cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
