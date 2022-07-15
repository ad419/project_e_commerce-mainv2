import React, { useState, useEffect } from "react";
import { commerce } from "../../lib/commerce";
import CategoryCard from "../Categorycard/CategoryCard";
import { SpinnerCircularSplit } from "spinners-react";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";

const Laptops = ({ onAddToCart }) => {
  const [laptops, setLaptops] = useState({});
  const categoryId = "cat_LvJjoP6Bple0nO";
  const classes = useStyles()
  const fetchLaptops = async () => {
    const result = await commerce.products.list({
      category_id: categoryId,
    });
    setLaptops(result.data);
  };

  useEffect(() => fetchLaptops(), []);

  console.log(laptops);

  if (!laptops.length)
    return (
      <center>
        <div className="flex text-center justify-center items-center h-screen">
          <SpinnerCircularSplit color="black" />
        </div>
      </center>
    );

  return (
    <main
      style={{
        height: "100vh",
      }}
      className={classes.content}
    >
      <div className={classes.toolbar} />
      <center>
        <p className="text-4xl lg:text-5xl font-semibold leading-9 text-center text-gray-800">
          Laptops Category
        </p>
      </center>
      <Grid
        style={{ marginTop: "40px" }}
        container
        justify="center"
        spacing={4}
      >
        {laptops.map((laptop) => (
          <Grid key={laptop.id} item xs={12} sm={6} md={4} lg={3}>
            <CategoryCard onAddToCart={onAddToCart} laptop={laptop} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Laptops;
