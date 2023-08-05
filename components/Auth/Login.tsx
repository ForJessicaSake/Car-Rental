import React from "react";
import Button from "../Micro/button/Button";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <main className="lg:px-10 px-5 overflow-y-hidden md:space-x-10 w-full h-full container mx-auto py-10 flex justify-between">
      <section className="md:block hidden w-full">
        <div
          data-aos="fade-right"
          className="lg:w-[740px] w-full bg-cover bg-[url('/assets/header/ads.svg')] h-full rounded-lg"
        >
          <div className="p-5 w-full">
            <h1 className="sm:text-3xl text-xl lg:max-w-[320px] font-medium text-white">
              The Best Platform for Car Rental
            </h1>
            <p className="text-white max-w-[300px] text-sm sm:text-base py-3">
              Ease of doing a car rental safely and reliably. Of course at a low
              price.
            </p>
            <Link href="/#products">
              <Button className="bg-primary">Rental Car</Button>
            </Link>
            <div className="flex justify-center py-2 items-center w-full">
              <Image
                src="/assets/header/car1.svg"
                alt="ads"
                width={406}
                height={116}
                className="rounded-md "
              />
            </div>
          </div>
        </div>
      </section>

      <div className="w-full">
        <form className=" flex flex-col justify-center">
          <label className="text-2xl pb-5 font-semibold">Welcome back</label>
          <div className="flex flex-col justify-center">
            <input
              className="border p-4 rounded-lg"
              placeholder="Enter your email address"
              required
              type="email"
            />
            <input
              className="border p-4 my-5 rounded-lg "
              placeholder="password"
              required
              type="Password"
            />
          </div>
          <Link href="/dashboard" className="w-full flex">
            <Button className="bg-black h-14 w-full text-white rounded-lg">
              LOGIN
            </Button>
          </Link>
          <p className="flex justify-center items-center font-semibold py-3 text-lg">
            OR
          </p>

          <Link href="/dashboard" className="lg:w-full flex">
            <Button className="bg-text w-full h-14 text-white rounded-lg">
              SIGN IN WITH GOOGLE
            </Button>
          </Link>
        </form>
      </div>
    </main>
  );
};

export default Login;
