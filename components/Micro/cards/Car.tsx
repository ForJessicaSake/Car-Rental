import React from "react";
import Button from "../button/Button";
import Image from "next/image";
import {
  BsFuelPumpDieselFill,
  BsFillPeopleFill,
  BsFillBookFill,
} from "react-icons/bs";
import { GiSteeringWheel } from "react-icons/gi";
import { GrFavorite } from "react-icons/gr";

const Car = () => {
  return (
    <div className="rounded-lg p-4 bg-white ">
      <div>
        <div className="flex justify-between">
          <hgroup>
            <h3 className="text-lg font-bold">MG ZX Excite</h3>
            <h4 className="font-medium text-lg lg:text-base text-text">
              Sports
            </h4>
          </hgroup>
          <p>
            <GrFavorite className="text-lg text-text" />
          </p>
        </div>
        
        <div className="flex flex-row lg:flex-col">
          <Image
            src="/assets/header/car1.svg"
            alt="car"
            width={270}
            height={108}
            className="my-12"
          />
        </div>
        <div>
          <ul className="flex justify-between text-text text-base">
            <li className="flex items-center">
              <span className="pr-2 text-lg">
                <BsFuelPumpDieselFill />
              </span>
              90L
            </li>
            <li className="flex items-center">
              <span className="pr-2 text-lg">
                <GiSteeringWheel />
              </span>
              Manual
            </li>
            <li className="flex items-center">
              <span className="pr-2 text-lg">
                <BsFillPeopleFill />
              </span>
              People
            </li>
          </ul>
        </div>
        <div className="flex pt-5 justify-between">
          <p className="text-base font-medium text-text">
            <span className="text-black font-bold text-lg">$74.00/</span>day
          </p>
          <Button className="bg-primary w-24 ml-16 lg:ml-5 xl:ml-0 text-sm text-white font-medium">
            Rent Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Car;
