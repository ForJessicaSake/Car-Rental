import React from "react";
import Button from "../Micro/button/Button";
import Image from "next/image";

const Reviews = () => {
  return (
    <div className="w-full pt-12">
      <div className="space-x-5 flex">
        <h3 className="text-2xl font-semibold">Reviews </h3>
        <Button className="w-8 bg-primary h-8">2</Button>
      </div>
      <div className="flex justify-between pt-10">
        <div className="space-x-3 flex">
          <div>
            <Image
              src="/assets/navbar/avatar.svg"
              alt=""
              width={100}
              height={100}
              className="cursor-pointer"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold">Alex Stanton</h2>
            <div className="flex sm:flex-row flex-col py-1 sm:items-center justify-between">
              <h4 className="text-text">CEO at Bukalapak</h4>
              <img
                src="/assets/details/Review.svg"
                alt="review"
                className="w-28 my-1 sm:my-0"
              />
            </div>
            <p className="py-1 leading-8 font-light">
              We are very happy with the service from the MORENT App. Morent has
              a low price and also a large variety of cars with good and
              comfortable facilities. In addition, the service provided by the
              officers is also very friendly and very polite.
            </p>
          </div>
        </div>
      
      </div>
      <div className="flex justify-between pt-10">
          <div className="space-x-3 flex">
            <div>
              <Image
                src="/assets/header/woman.jpg"
                alt=""
                width={100}
                height={100}
                className="cursor-pointer rounded-full"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold">Skylar Dias</h2>
              <div className="flex sm:flex-row flex-col py-1 sm:items-center justify-between">
                <h4 className="text-text">CEO at Amazon</h4>
                <img
                  src="/assets/details/Review.svg"
                  alt="review"
                  className="w-28 my-1 sm:my-0"
                  />
              </div>
              <p className="py-1 leading-8 font-light">
                We are very happy with the service from the MORENT App. Morent
                has a low price and also a large variety of cars with good and
                comfortable facilities. In addition, the service provided by the
                officers is also very friendly and very polite.
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Reviews;
