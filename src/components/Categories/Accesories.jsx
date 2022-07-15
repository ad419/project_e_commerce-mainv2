import React, { useState, useEffect } from "react";
import { commerce } from "../../lib/commerce";
import Grid from "@material-ui/core/Grid";
import { SpinnerCircularSplit } from "spinners-react";

import useStyles from "./styles";

import AccesorCard from "../Categorycard/AccesorCard";

const Accesories = ({ onAddToCart }) => {
  const [accesories, setAccesories] = useState({});
  const categoryId = "cat_gnZO5kZ06o7MNq";
  const classes = useStyles();
  const fetchAccesories = async () => {
    const result = await commerce.products.list({
      category_id: categoryId,
    });
    setAccesories(result.data);
  };

  useEffect(() => fetchAccesories(), []);

  if (!accesories.length)
    return (
      <center>
        <div className="flex text-center justify-center items-center h-screen">
          <SpinnerCircularSplit color="black" />
        </div>
      </center>
    );

  return (
    <>
      <main style={{
        height: "100vh"
      }} className={classes.content}>
        <div className={classes.toolbar} />
        <center>
          <p className="text-4xl lg:text-5xl font-semibold leading-9 text-center text-gray-800">
            Browse Gaming Accesories Category
          </p>
        </center>
        <br /><br /><br />
        <Grid container justify="center" spacing={1}>
          {accesories.map((accesor) => (
            <Grid key={accesor.id} item xs={12} sm={6} md={4} lg={3}>
              <AccesorCard onAddToCart={onAddToCart} accesor={accesor} />
            </Grid>
          ))}
        </Grid>
      </main>
    </>
  );
};

export default Accesories;
