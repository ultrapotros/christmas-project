
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCartRounded,
  MenuRounded,
  CloseRounded,
} from "@mui/icons-material";
import { Drawer, Divider, Button } from "@mui/material";

import { Context, CartContext } from "../../App";
import "./component.css";


/**
 * Header component
 * @returns component react
 */
export default function Header() {
    const routes = [
        { route: "/", label: "home" },
        { route: "/single-category/men's%20clothing", label: "men's clothing" },
        { route: "/single-category/women's%20clothing", label: "women's clothing" },
        { route: "/single-category/jewelery", label: "jewelery" },
        { route: "/single-category/electronics", label: "electronics" },
        { route: "/about-us", label: "about-us" },
        { route: "/cart", label: <ShoppingCartRounded /> },];

    /* we assign false as first value */
    const [showMobileMenu, setShowMobileMenu] = useState(false); 

    const [drawerOpen, setDrawerOpen] = useState(false);

    //Subcomponent of the cart
    function DrawerChild(props) {
        const context = useContext(Context);
        const { cart } = useContext(CartContext);
        const [cartData, setCartData] = useState([]);
        const [totalPrice, setTotalPrice] = useState(0);

        //Fetch all data from each product in the cart
        useEffect(() => {
            async function fetchData() {
                let tempArray = [];
                await context.map((d) => {
                cart.map((c) => {
                    if (parseInt(c.id) === d.id) {
                    tempArray.push({ ...d, qty: c.qty });
                    }
                });
                });
                setCartData(tempArray);
            }
            fetchData();
        }, [cart, context]);

        useEffect(() => {
            let tempPrice = 0;
            cartData.map((e) => (tempPrice += e.price * e.qty));
            setTotalPrice(tempPrice);
        }, [cartData]);

        return (
        <div className="drawer-cart">
            <h2>Cart</h2>

            {cartData.map((e) => {
            return (
                <React.Fragment key={e.id}>
                <Divider style={{ width: "100%" }} />
                <div className="drawer-item">
                    <img src={e.image} alt={e.title} />
                    <section>
                    <div>
                        <h5>{`${e.title.substring(0, 20)}...`}</h5>
                        <h5>{`${e.price}€`}</h5>
                    </div>
                    <h5>x{e.qty}</h5>
                    </section>
                </div>
                </React.Fragment>
            );})}

            <Divider style={{ width: "100%" }} />
            <h4>{`TOTAL:  ${totalPrice.toFixed(2)}€`}</h4>
            <Divider style={{ width: "100%" }} />
            <Link className="cart-button" to="/cart">
            <Button
                sx={{
                backgroundColor: "#ebb032",
                color: "#23394d",
                borderColor: "#ebb032",
                margin: "0 2rem",
                width: "70%",
                "&:hover": {
                    backgroundColor: "#23394d",
                    color: "#ebb032",
                    borderColor: "#ebb032",
                }, }}
                onClick={props.closeDrawer}
                variant="outlined"
                >
                Go to the cart
            </Button>
            </Link>
        </div>
        );
    }

    /**
     * Function that takes care of opening the drawer 
     * when clicking on the cart option.
     * @returns component react
     */
    function toggleDrawer() {
        setDrawerOpen(!drawerOpen);
        setShowMobileMenu(false);
    }

  return (
    <div className="header">
      <div className="topHeader">
        <a href='/'><h1>THE BRIDGE STORE</h1></a>
        <div
          className="mobileIcon"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {" "}
          {/* onclick we change the value of showMobileMenu */}
          {showMobileMenu ? <CloseRounded /> : <MenuRounded />}{" "}
          {/* we use showMobileMenu to choose the icon to show */}
        </div>
        </div>
        <div id="headerNav" className={showMobileMenu ? "showed" : null}>
            {" "}
            {/*we use showMobileMenu to assign a class to show lateral menu */}
            {routes.map((element, index) => (
                /*we use pathname to assign id*/
                <div id={window.location.pathname === element.route ? "active" : null} 
                    key={`category${index}`}>
                    {element.route === "/cart" ? (
                        <div className="cart-header" onClick={toggleDrawer}>
                            {element.label}
                        </div>
                        ) : (
                        <a href={element.route}>{element.label}</a>
                        )}
                </div>
            ))}
        </div>
        <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer}
            children={<DrawerChild closeDrawer={toggleDrawer} />}
            PaperProps={{
            style: {
                backgroundColor: "#23394d",
                color: "#ebb032",
            },
            }}
        />
        </div>
    );
}
