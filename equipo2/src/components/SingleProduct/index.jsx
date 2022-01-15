import "./component.css";
import { Context, CartContext } from "../../App";
import ReactImageMagnify from "react-image-magnify";
import React, { useState, useContext } from "react";
import { useParams , Link , useNavigate } from "react-router-dom";
import {
  Divider,
  Rating,
  CircularProgress,
  Skeleton,
  Box,
  Button,
  Snackbar,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent
} from "@mui/material";
import  MuiAlert from "@mui/material/Alert";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SingleProduct() {
  //Retrieve id from the URL
  const { id } = useParams();
  //We take product with id from the URL
  const productData = useContext(Context).filter((d) => d.id === parseInt(id))[0];
  const { cart, setCart } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [lastItem,setLastItem] = useState("");
  const navigate = useNavigate();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  //There are times when the component is mounted without the context with data arriving.
  const isData = productData !== undefined;
  //We render in case we have data already loaded. In case of no data, circular load is displayed.
  if (isData) {
    const { title, image, price, description, rating } = productData;
    //Function to handle addToCart
    function handleAddCart() {
      //We prepare a modified cartContext
      let tempCart = cart;
      //In case we want to add an existing element, we add 1 to quantity
      let exists = false;
      for (let index = 0; index < tempCart.length; index++) {
        if (tempCart[index].id === id) {
          exists = true;
          tempCart[index].qty++;
        }
        
      }
      //If the product exists, +1 has already been added to qty, so the new cart is assigned to the state.
      if (exists) {
        setCart(tempCart);
      } else {
      //In case the item does not exist, we add the already existing items and the new item to the cart
        tempCart = [...cart, { id: id, title: title,qty: 1 }];
        
        setCart(tempCart);
        window.localStorage.setItem("cart",JSON.stringify(tempCart));
      }
      setLastItem(title.substring(0, 20) + "...")
      setOpen(true);
      setOpenModal(true);
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
              <small>de {rating.count} votaciones.</small>
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
              Add to the cart
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                {lastItem} added to the cart!
              </Alert>
            </Snackbar>
            <Dialog open={openModal} onClose={handleCloseModal}>
              <DialogTitle>{lastItem} added to the cart!</DialogTitle>
              <DialogContent>
                <div className="modal-content">
                <img src={image} alt={title} className="modal-image"/>
                <div className="info-modal">
                  <h4>{title}</h4>
                  <h5>Quantity : 1</h5>
                </div>
                </div>
              </DialogContent>
              <DialogActions>
              <Link className="modal-button" to="/cart">
                <Button variant="outlined" color="secondary" onClick={handleCloseModal}>Go to the cart</Button>
             </Link>
             <Button variant="outlined" color="secondary" onClick={()=>navigate(-1)}>Continue shoping...</Button>
               </DialogActions>
             </Dialog>
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
