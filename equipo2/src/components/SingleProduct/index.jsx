import './component.css';
import {Context } from "../../App";

import React , { useState , useEffect , useContext} from 'react'
import { useParams } from 'react-router-dom'

import Divider from '@mui/material/Divider';
import Rating from '@mui/material/Rating';
import CircularProgress from '@mui/material/CircularProgress';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

function SingleProduct() {

  //Retrieve id from the URL
  const {id} = useParams()
  //We take product with id from the URL
  const productData = useContext(Context).filter(d=>d.id==id)[0];
  console.log(productData);
  //There are times when the component is mounted without the context with data arriving.
  const isData = productData != undefined;
  //We render in case we have data already loaded. In case of no data, circular load is displayed.
  if(isData){
    const {title,image,price,description,rating} = productData;
    return (

      <div className="single-product">
        <div className="left-side">
          <img src={image} />
          </div> 
         <div className="right-side">
           <h2>{title}</h2>
           <Divider />
           <div className="section-single">
                <h3>{price}€</h3>
                <div className="single-rating">
                <Rating name="half-rating-read" defaultValue={rating.rate} precision={0.2} readOnly size="small"/><small> de {rating.count} votaciones.</small>
                </div>
                
           </div>
           
           <Divider />
           <p>{description}</p>
           <Divider />
           <div className="buy-options">
           <Button variant="contained" sx={{mr: 2}} startIcon={<ShoppingCartCheckoutIcon /> }>
            Añadir
          </Button>
          <Button variant="outlined" color="success">
            Comprar
          </Button>
           </div>
           


           </div> 
      
      </div>
    
    );
  }else{
    //Structure while loading data
    return( <>
    <Box sx={{ width: 40 }}>
      <CircularProgress />
    
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
    </Box>
    </>)
  }
  
}


export default SingleProduct;