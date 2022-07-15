import React, { useState, useEffect } from "react";
import { commerce } from "../../lib/commerce";
import CatHoodies from "../Categorycard/CatHoodies";
import { SpinnerCircular } from "spinners-react";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";

const Hoodies = ({ onAddToCart }) => {
  const [hoodies, setHoodies] = useState({});
  const categoryId = "cat_VKXmwDbAX5rgDA";
  const classes = useStyles()
  const fetchHoodies = async () => {
    const result = await commerce.products.list({
      category_id: categoryId,
    });
    setHoodies(result.data);
  };

  useEffect(() => fetchHoodies(), []);

  if (!hoodies.length)
    return (
      <div className="flex justify-center items-center h-screen">
        <SpinnerCircular
          size="60px"
          thickness={100}
          speed={100}
          color="#36ad47"
          secondaryColor="rgba(0, 0, 0, 0.44)"
        />
      </div>
    );

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <center>
        <p className="text-4xl lg:text-5xl font-semibold leading-9 text-center text-gray-800">
          Hoodie Category
        </p>
      </center>
      <Grid
        style={{ marginTop: "40px" }}
        container
        justify="center"
        spacing={2}
      >
        {hoodies.map((hoodie) => (
          <Grid key={hoodie.id} item xs={12} sm={6} md={4} lg={3}>
            <center>
              <CatHoodies onAddToCart={onAddToCart} hoodie={hoodie} />
            </center>
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Hoodies;
