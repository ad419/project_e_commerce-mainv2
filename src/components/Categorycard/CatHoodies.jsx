import React from "react";

const CategoryCard = ({ hoodie, onAddToCart }) => {
  return (
    <div class="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href={`/hoodie-details/${hoodie.id}`}>
        <div>
          <center>
            <img
              style={{
                maxHeight: 350,
              }}
              class="p-8 rounded-t-lg"
              src={hoodie.image.url}
              alt="hoodie image"
            />
          </center>
        </div>
      </a>
      <div class="px-5 pb-5">
        <a href="#">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {hoodie.name}
          </h5>
        </a>
        <br />
        <div class="flex justify-between items-center">
          <span class="text-3xl font-bold text-gray-900 dark:text-white">
            ${hoodie.price.formatted}
          </span>
          <button
            onClick={() => onAddToCart(hoodie.id, 1)}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
