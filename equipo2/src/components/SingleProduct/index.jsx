import './component.css';
import {Context } from "../../App";

import React , { useState , useEffect , useContext} from 'react'
import { useParams } from 'react-router-dom'

function SingleProduct() {
  const {id} = useParams()
  const productData = useContext(Context).filter(d=>d.id==id);

  console.log("data");
  console.log(productData);
  return (

    <div className="single-product">
      
    
    </div>
  
  );
}


export default SingleProduct;