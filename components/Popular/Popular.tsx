import React from "react";
import Item from "../Micro/cards/Item";

const Popular = () => {
  return (
    <main className="mx-auto container px-5 lg:px-10 w-full">
      <nav className="flex justify-between py-4 text-text font-medium">
        <h3>Popular Cars</h3>
        <p className="text-primary">View All</p>
      </nav>
      <div className="lg:grid grid-cols-4 flex space-x-5 xl:overflow-hidden overflow-x-auto">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </main>
  );
};

export default Popular;
