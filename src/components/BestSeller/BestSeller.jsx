import React from "react";

import Products from "../Products/Products";

const BestSeller = ({ products, onAddToCart }) => {
  if (!products) {
    return "loading";
  }

  return (
    <div>
      <div className="pb-16">
        <div className="bg-gray-100 flex flex-col justify-center items-center pt-9 sm:pt-12 lg:pt-16 pb-24 sm:pb-52">
          <div className="2xl:container 2xl:mx-auto flex flex-col justify-center items-center sm:pb-12 lg:pb-0 space-y-4 px-4 md:px-6 2xl:px-0">
            <div>
              <p className="text-3xl lg:text-4xl font-semibold leading-9 text-center text-gray-800">
                Best Seller Products
              </p>
            </div>
            <div>
              <p className="text-base leading-normal sm:leading-none text-center text-gray-600">
                Explore products that are bought most frequently by people
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-16 sm:-mt-48 lg:-mt-32 xl:-mt-40 2xl:container 2xl:mx-auto flex justify-center items-center space-y-4 px-4 md:px-6 2xl:px-0 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-between gap-x-6 gap-y-5"></div>
          <Products products={products} onAddToCart={onAddToCart} />
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
