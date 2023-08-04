import React from "react";
import Image from "next/image";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoMdNotificationsOff, IoMdSettings } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import Button from "../Micro/button/Button";

const Navbar = () => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [inputValue, setInputValue] = React.useState("");
  const handleInputChange = () => {
    setInputValue(inputRef.current?.value || "");
  };

  return (
    <nav className=" w-full mx-auto container px-5 lg:px-10 py-5">
      <div className="flex justify-between items-center">
        <Link href="/">
          <h2 className="text-primary text-2xl font-bold">MORENT</h2>
        </Link>

        <div className="flex space-x-5 items-center cursor-pointer">
          <div>
            <Link href="/">
              <Button className="w-32 bg-black">Log In</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
