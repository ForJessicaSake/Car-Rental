import React from "react";
import Item from "../Micro/cards/Item";
import Car from "../Micro/cards/Car";

const Recommendation = () => {
  return (
    <main className="mx-auto container px-5 lg:px-10 py-5 pb-12 w-full">
      <nav className="flex justify-between py-4 text-text font-medium">
        <h3>Recommended Cars</h3>
        <p className="text-primary">View All</p>
      </nav>
      <div className="lg:grid lg:grid-cols-4 flex flex-col gap-x-5 gap-y-7">
        <Car />
        <Car />
        <Car />
        <Car />
        <Car />
        <Car />
        <Car />
        <Car />
      </div>
    </main>
  );
};

export default Recommendation;
