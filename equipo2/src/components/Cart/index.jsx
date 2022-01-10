import './component.css';
import {Context,CartContext} from "../../App";
import React , {useState , useEffect, useContext} from 'react'
import {
    Divider,
    Button,
  } from "@mui/material";

  
//Subcomponent to show list of cart items
function ListItems(props) {
  const { cart, setCart } = useContext(CartContext);
  if(cart != null){
    return (
    <div className="list-items">
      {cart.map((d) => {
        return (<>
            <Divider /> 
          <div className="cart-item" key={d.id}>
            <img src={d.img} alt={d.title} />
            <div className="cart-item-details">
            <p>{d.title}</p>
            <p>Qty: {d.qty}</p>
            </div>
              
          </div>
          </>
        );
      })}
    </div>

  ) }else{
      return(
    <p>Cart is empty!</p>
  );
  }
}

function Cart() {
    const context = useContext(Context);
    

    useEffect(() => {
        

    }, []);
    return(<><div className="cart">
        <h2>Cart</h2>
         <ListItems />
        </div></>);
}

export default Cart;