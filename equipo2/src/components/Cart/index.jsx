import './component.css';
import {Context,CartContext} from "../../App";
import React , {useState , useEffect, useContext} from 'react'
import {
    Divider,
    Button,
    InputLabel,
    MenuItem,
    Select,
    FormControl
  } from "@mui/material";

  
//Subcomponent to show list of cart items
function ListItems(props) {
  const { cart, setCart } = useContext(CartContext);
  //When the value of the select changes we modify cart both in local and in localStorage
  function handleChange(e){
     let tempArray = [];
     //We retrieve the id from the select's name property
     cart.map(d=>{
            //When the element is found, we create the element with the new quantity.
            if(d.id == parseInt(e.target.name)){
                tempArray.push({id:d.id,title:d.title,qty:e.target.value});
            }else{
                tempArray.push(d);
            }
        })
    setCart(tempArray);
    window.localStorage.setItem("cart",JSON.stringify(tempArray));
    }
  const cartData = props.data;
  const options = [];
  //Creation of options for select
  for (let index = 0; index < 10; index++) {
    options.push(<MenuItem key={index + "mi"} value={index}>{index}</MenuItem>)
      
  }
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
                  
     <FormControl >
        <InputLabel id="select-label">Qty</InputLabel>
        <Select
          name={d.id.toString()}
          labelId="select-label"
          id="demo-simple-select"
          label="Qty"
          defaultValue = {d.qty} 
          onChange={handleChange}
        >
        { options }
        </Select>
        </FormControl>
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
    const { cart } = useContext(CartContext);
    const [cartData,setCartData] = useState([]);
    //We load the data from cart items
    //Me falta darle unas vueltas a como optimizar el sacar datos porque se ve infernal xd
    useEffect(() => {
        function fetchData(){
            let tempArray = [];
        context.map(d=>{
            cart.map(c=>{
                if(c.id==d.id){
                    tempArray.push({...d,qty:c.qty});
                }
            })
        })
        setCartData(tempArray);
        }
        fetchData();
        
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