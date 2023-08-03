import React from "react";
import {FaRegDotCircle} from "react-icons/fa"

type Props = {
  one: string;
  two: string;
  three: string;
  heading: string;
};

const Pick = ({ one, two, three, heading }: Props) => {
  return (
    <div className="xl:w-[578px] h-[136px] bg-white flex flex-col xl:my-7 mt-5 rounded-xl justify-center">
      <h3 className="px-7 py-2 flex items-center font-semibold text-lg">
        <span className="pr-2 text-primary"><FaRegDotCircle/></span>
        {heading}
      </h3>
      <div className="grid grid-cols-3">
        <div className="border-r px-6">
          <h4 className="px-1 font-semibold sm:text-lg">{one}</h4>
          <select className="text-text text-xs sm:text-sm">
            <option>Select your city</option>
          </select>
        </div>
        <div className="border-r px-3">
          <h4 className="px-1 font-semibold sm:text-lg">{two}</h4>
          <select className="text-text text-xs sm:text-sm">
            <option>Select your city</option>
          </select>
        </div>
        <div className="px-3">
          <h4 className="px-1 font-semibold sm:text-lg">{three}</h4>
          <select className="text-text text-xs sm:text-sm">
            <option>Select your city</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Pick;
