import React, { useState, useEffect } from "react";
import { commerce } from "../../lib/commerce";
import Grid from "@material-ui/core/Grid";
import { SpinnerCircularSplit } from "spinners-react";
import DeskCard from "../Categorycard/DeskCard";
import useStyles from "./styles";

const Desktops = ({ onAddToCart }) => {
  const [desktops, setDesktops] = useState({});
  const categoryId = "cat_eN1ql9xnp5z3ym";

  const fetchDesktops = async () => {
    const result = await commerce.products.list({
      category_id: categoryId,
    });
    setDesktops(result.data);
  };

  const classes = useStyles()

  useEffect(() => fetchDesktops(), []);

  if (!desktops.length)
    return (
      <center>
        <div className="flex text-center justify-center items-center h-screen">
          <SpinnerCircularSplit color="black" />
        </div>
      </center>
    );

  return (
    <main style={{
      height: "100vh"
    }} className={classes.content}>
      <div className={classes.toolbar} />
      <center>
        <p className="text-4xl lg:text-5xl font-semibold leading-9 text-center text-gray-800">
          Gaming Pc Categories
        </p>
      </center>
      <Grid
        style={{ marginTop: "40px" }}
        container
        justify="center"
        spacing={4}
      >
        {desktops.map((desktop) => (
          <Grid key={desktop.id} item xs={12} sm={6} md={4} lg={3}>
            <center>
              <DeskCard onAddToCart={onAddToCart} desktop={desktop} />
            </center>
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Desktops;
