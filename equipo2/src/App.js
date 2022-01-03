import './App.css';
import TabsRouter from './components/Header';
import SingleProduct from './components/SingleProduct';
import axios from 'axios';
import React , { useState , useEffect, createContext } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
  } from "react-router-dom";

export const Context = createContext(null);

function App() {

  const [products,setProducts] = useState([]);

  useEffect(() => {
    async function fetchApi() {
    try{
      let response = await axios.get("https://fakestoreapi.com/products")
      setProducts(response.data);
    }catch (err){
      console.log(err);
    }    
    }
    fetchApi();

  }, [])

  return (
    <Router >
    <Context.Provider value={products}>
    <div className="App">

      <TabsRouter />

      <Routes >
        <Route path="/" element={<h2>HomePage</h2>} />
        <Route path="/single-product/:id" element={<SingleProduct />} />
        <Route path="/single-category/:cat" element={<h2>SingleCategory</h2>} />
        <Route path="/cart" element={<h2>Cart</h2>} />
        <Route path="/about-us" element={<h2>About us</h2>} />
       </Routes>
       {/* <Footer /> */}

    </div>
    </Context.Provider>
    </Router>
  );
}


export default App;

