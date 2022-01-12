import "./component.css";
import { Context, CartContext } from "../../App";
import React, { useState, useEffect, useContext } from "react";
import {
  Divider,
  Button,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';
//Subcomponent to show list of cart items
function ListItems(props) {
  const { cart, setCart } = useContext(CartContext);
  //When the value of the select changes we modify cart both in local and in localStorage
  function handleChange(e) {
    let tempArray = [];
    //We retrieve the id from the select's name property
    cart.map((d) => {
      //When the element is found, we create the element with the new quantity.
      if (d.id == parseInt(e.target.name)) {
        //If 0 is entered in the select, the item is deleted.
        if(e.target.value != 0){
          tempArray.push({ id: d.id, title: d.title, qty: e.target.value });
        }
      } else {
        tempArray.push(d);
      }
    });
    //Update state/localStorage
    setCart(tempArray);
    window.localStorage.setItem("cart", JSON.stringify(tempArray));
  }

  function handleDelete(e){
    let tempArray = [];
    cart.map((d) => {
      if (d.id == parseInt(e.target.name)) {
        //If 0 is entered in the select, the item is deleted.
        if(e.target.value != 0){
          tempArray.push({ id: d.id, title: d.title, qty: e.target.value });
        }
      } else {
        tempArray.push(d);
      }
    });
    //Update state/localStorage
    setCart(tempArray);
    window.localStorage.setItem("cart", JSON.stringify(tempArray));

  }
  const cartData = props.data;
  const options = [];
  //Creation of options for select
  for (let index = 0; index < 10; index++) {
    options.push(
      <MenuItem key={index + "mi"} value={index}>
        {index}
      </MenuItem>
    );
  }
  return (
    <div className="list-items">
      <h2>Cart</h2>
      {cartData.map((d) => {
        return (
          <React.Fragment key={d.id}>
            <Divider />
            <div className="cart-item">
              <img src={d.image} alt={d.title} />
              <div className="cart-item-details">
                <p>{d.title}</p>

                <FormControl>
                  <InputLabel id="select-label">Qty</InputLabel>
                  <Select
                    name={d.id.toString()}
                    labelId="select-label"
                    label="Qty"
                    id="qty"
                    defaultValue={d.qty}
                    onChange={handleChange}
                  >
                    {options}
                  </Select>                  
                </FormControl>
                <div className="remove-item ">
                <Button 
                  variant="outlined" 
                  color="error" 
                  size="small" 
                  name={d.id.toString()} 
                  onClick={handleDelete} startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

//Subcomponent to show payment related options
function Payments(props) {
  const [totalPrice,setTotalPrice] = useState(0);

  useEffect(() => {
    let tempPrice = 0;
    props.data.map(e=>tempPrice+=(e.price*e.qty))
    setTotalPrice(tempPrice)
  }, [])
  return (
    <div className="payments">
      <h2>Resume</h2>
      <Divider />
      {props.data.map((e) => {
        let warpedTitle = "";
        warpedTitle = e.title.substring(0, 20);
        warpedTitle += "...";
        return (
          <div className="resume-item" key={e.id}>
            <p>{warpedTitle}</p>
            <p className="resume-qty"> x {e.qty}</p>
            <p className="resume-price">{e.price * e.qty}</p>
          </div>
        );
      })}
      <Divider />
      <div className="total-price">
      <h3>TOTAL : </h3><h3>{totalPrice}</h3>
      </div>
      
    </div>
  );
}

function Cart() {
  const context = useContext(Context);
  const { cart } = useContext(CartContext);
  const [cartData, setCartData] = useState([]);
  //We load the data from cart items
  //Me falta darle unas vueltas a como optimizar el sacar datos porque se ve infernal xd
  useEffect(() => {
    function fetchData() {
      let tempArray = [];
      context.map((d) => {
        cart.map((c) => {
          if (c.id == d.id) {
            tempArray.push({ ...d, qty: c.qty });
          }
        });
      });
      setCartData(tempArray);
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="cart">
        {cartData.length > 0 ? (
          <>
            <ListItems data={cartData} />
            <Payments data={cartData} />
          </>
        ) : (
          <p>Cart is empty!</p>
        )}
      </div>
    </>
  );
}

export default Cart;
