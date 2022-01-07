import "./component.css";
import { Context, CartContext } from "../../App";
import ReactImageMagnify from "react-image-magnify";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import {
  Divider,
  Rating,
  CircularProgress,
  Skeleton,
  Box,
  Button,
} from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

function SingleProduct() {
  //Retrieve id from the URL
  const { id } = useParams();
  //We take product with id from the URL
  const productData = useContext(Context).filter((d) => d.id == id)[0];
  const { cart, setCart } = useContext(CartContext);

  //There are times when the component is mounted without the context with data arriving.
  const isData = productData != undefined;

  //We render in case we have data already loaded. In case of no data, circular load is displayed.
  if (isData) {
    const { title, image, price, description, rating } = productData;
    //Function to handle addToCart
    function handleAddCart() {
      console.log(cart);
      //We prepare a modified cartContext
      let tempCart = cart;
      //In case we want to add an existing element, we add 1 to quantity
      let exists = false;
      tempCart.map((d, i) => {
        if (d.id == id) {
          console.log("exists")
          exists = true;
          tempCart[i].qty++;
        }
      });
      if (exists) {
        setCart(tempCart);
      } else {
        setCart([...cart, { id: id, title: title, qty: 1 }]);
      }
    }
    return (
      <div className="single-product">
        <div className="left-side">
          {/*ReactImageMagnify takes as props smallImage to
          define the default image displayed and largeImage to define how the zoomed area will appear. */}
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: title,
                isFluidWidth: true, //Resize the image to the width available
                src: image,
              },
              largeImage: {
                src: image,
                width: 1200, // Define the size of the zoomed image.
                height: 1800,
              },
            }}
          />
        </div>
        <div className="right-side">
          <h2>{title}</h2>
          <Divider />
          <div className="section-single">
            <h3>{price}€</h3>
            <div className="single-rating">
              <Rating
                name="half-rating-read"
                defaultValue={rating.rate}
                precision={0.2}
                readOnly
                size="small"
              />
              <small> de {rating.count} votaciones.</small>
            </div>
          </div>

          <Divider />
          <p>{description}</p>
          <Divider />
          <div className="buy-options">
            <Button
              variant="contained"
              sx={{ mr: 2 }}
              onClick={handleAddCart}
              startIcon={<ShoppingCartCheckoutIcon />}
            >
              Añadir
            </Button>
            <Button variant="outlined" color="success">
              Comprar
            </Button>
          </div>
        </div>
      </div>
    );
  } else {
    //Structure while loading data
    return (
      <>
        <Box sx={{ width: 40 }}>
          <CircularProgress />

          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </Box>
      </>
    );
  }
}

export default SingleProduct;
