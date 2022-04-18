import React, { useState, useEffect } from "react";
import { commerce } from "../../lib/commerce";

const CatSection = () => {
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const response = await commerce.categories.list();
    setCategories(response.data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <div className="pb-16">
        <div className="flex justify-center items-center">
          <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
            <div className="flex flex-col jusitfy-center items-center space-y-10">
              <div className="flex flex-col justify-center items-center space-y-2">
                <p className="text-xl leading-5 text-gray-600">
                  2021 Trendsetters
                </p>
                <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800">
                  Shop By Category
                </h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="relative group flex justify-center items-center h-full w-full"
                  >
                    <img
                      className="object-center object-cover h-full w-full"
                      src={category.assets.url}
                      alt="girl-image"
                    />
                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                      {category.name}
                    </button>
                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatSection;