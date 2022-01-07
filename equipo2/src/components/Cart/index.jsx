import './component.css';
import {Context,CartContext} from "../../App";
import React , {useState , useEffect, useContext} from 'react'


function Cart() {
    const [currentProducts,setCurrentProducts] = useState([]);
    const context = useContext(Context);
    const cartContext = useContext(CartContext);

    useEffect(() => {
        

    }, []);
    return(<h2>Cart</h2>);
}

export default Cart;