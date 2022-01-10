import './component.css';
import {Context,CartContext} from "../../App";
import React , {useState , useEffect, useContext} from 'react'
import {
    Divider,
    Button,
  } from "@mui/material";

  
//Subcomponent to show list of cart items
function ListItems(props) {
  const cartData = props.data;
    return (
    <div className="list-items">
      {cartData.map((d) => {
        return (
        <React.Fragment key={d.id}>
            <Divider /> 
            <div className="cart-item"  >
                <img src={d.image} alt={d.title} />
                <div className="cart-item-details">
                    <p>{d.title}</p>
                    <p>Qty: {d.qty}</p>
                </div>  
          </div>
        </React.Fragment>
        );
      })}
    </div>

  )
  }


//Subcomponent to show payment related options
function Payments(props){
   
    
    return (<div className="payments">

    </div>)
}

function Cart() {
    const context = useContext(Context);
    const { cart, setCart } = useContext(CartContext);
    const numProducts = 0;
    const totalToPay = 0;
    const [cartData,setCartData] = useState([]);
    //We load the data from cart items
    //Me falta darle unas vueltas a como optimizar el sacar datos porque se ve infernal xd
    useEffect(() => {
        let tempArray = [];
        context.map(d=>{
            cart.map(c=>{
                if(c.id==d.id){
                    tempArray.push({...d,qty:c.qty});
                }
            })
        })
        setCartData(tempArray);
        
    }, []);
    return(<><div className="cart">
        <h2>Cart</h2>
        { cartData.length > 0 ?
         <ListItems data={cartData} /> :
         <p>Cart is empty!</p>
        }
        </div></>);
}

export default Cart;