
import axios from 'axios';
import React , { useState , useEffect, createContext } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";


import './App.css';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Header from './components/Header';
import SingleCategory from './components/SingleCategory';
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';
import Privacy from './components/Privacy';
import NotFoundPage from './components/NotFoundPage';
import AboutUs from './components/AboutUs';
import Faq from './components/Faq';


export const Context = createContext(null);
export const CartContext = createContext(null);


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    async function fetchApi() {
      try {
        let response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    //We check for a cart in localStorage
    function checkCart(){
      let cartLocal = JSON.parse(window.localStorage.getItem("cart"));
      if(cartLocal!=null){
        setCart(cartLocal);
      }
    }

    fetchApi();
    checkCart();
  }, []);

  return (
    <Router >
      <CartContext.Provider value={{ cart, setCart }}>
        <Context.Provider value={products}>
          <div className="App">
            <Header />
            <main>
                <Routes >
                  <Route path="/" element={<HomePage />} />
                  <Route path="/single-category/:cat" element={<SingleCategory />} />
                  <Route path="/single-product/:id" element={<SingleProduct />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/about-us" element={<AboutUs/>} />
                  <Route path="/privacy-policy" element={<Privacy />} />
                  <Route path="*" element={<NotFoundPage />} />
                  <Route path="faq" element={<Faq />} />
                </Routes>              
            </main>
            <Footer /> 
          </div>
        </Context.Provider>
      </CartContext.Provider>
    </Router>
  );
}


export default App;