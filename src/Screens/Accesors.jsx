import React from "react";
import Accesories from "../components/Categories/Accesories";

const Accesors = ({ onAddToCart }) => {
  return (
    <div className="flex">
      <Accesories onAddToCart={onAddToCart} />
    </div>
  );
};

export default Accesors;
