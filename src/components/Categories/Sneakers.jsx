import React, { useState, useEffect } from "react";
import { commerce } from "../../lib/commerce";
import SneakersCard from "../Categorycard/SneakersCard";
import { SpinnerCircularSplit } from "spinners-react";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";

const Sneakers = ({ onAddToCart }) => {
  const [sneakers, setSneakers] = useState({});
  const categoryId = "cat_8XO3wpAWxoYAzQ";
  const classes = useStyles()
  const fetchSneakers = async () => {
    const { data } = await commerce.products.list({
      category_id: categoryId,
    });
    setSneakers(data);
  };

  useEffect(() => fetchSneakers(), []);
  console.log(sneakers);
  if (!sneakers?.length)
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
          Seakers Category
        </p>
      </center>
      <Grid
        style={{ marginTop: "40px" }}
        container
        justify="center"
        spacing={4}
      >
        {sneakers.map((sneaker) => (
          <Grid key={sneaker.id} item xs={12} sm={6} md={4} lg={3}>
            <SneakersCard onAddToCart={onAddToCart} sneaker={sneaker} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Sneakers;
