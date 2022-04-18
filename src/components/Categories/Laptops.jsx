import React, { useState, useEffect } from "react";
import { commerce } from "../../lib/commerce";
import CategoryCard from "../Categorycard/CategoryCard";
import { SpinnerCircularSplit } from "spinners-react";

const Laptops = ({ onAddToCart }) => {
  const [laptops, setLaptops] = useState({});
  const categoryId = "cat_LvJjoP6Bple0nO";

  const fetchLaptops = async () => {
    const result = await commerce.products.list({
      category_id: categoryId,
    });
    setLaptops(result.data);
  };

  useEffect(() => fetchLaptops(), []);

  if (!laptops.length)
    return (
      <center>
        <div className="flex text-center justify-center items-center h-screen">
          <SpinnerCircularSplit color="black" />
        </div>
      </center>
    );

  return (
    <div>
      {laptops.map((laptop) => (
        <div key={laptop.id}>
          <CategoryCard onAddToCart={onAddToCart} laptop={laptop} />
        </div>
      ))}
    </div>
  );
};

export default Laptops;
