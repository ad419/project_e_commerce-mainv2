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

  console.log(categories);

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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 lg:gap-y-5 md:gap-x-8 w-full">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="relative hover:scale-110 duration-300 transform-gpu bg-gray-100 p-4 rounded-lg group flex justify-center items-center h-full w-full"
                  >
                    <a href={`/category/${category.id}`}>
                      <img
                        className="object-center object-cover h-full w-full"
                        src={category.assets[0]?.url}
                        alt="what"
                      />
                    </a>
                    <a
                      href={`/category/${category.id}`}
                      className="focus:outline-none flex rounded justify-center focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 p-3 w-42 bg-white"
                    >
                      {category.name}
                    </a>
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
