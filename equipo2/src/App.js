import './App.css';
import Header from './components/Header';
import axios from 'axios';
import React , { useState , useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
  } from "react-router-dom";

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
    <div className="App">
      <Header /> 
      <Routes >
        <Route path="/" element={<h2>HomePage</h2>} />
        <Route path="/single-product/:id" element={<h2>SingleProduct</h2>} />
        <Route path="/single-category/:cat" element={<h2>SingleCategory</h2>} />
        <Route path="/cart" element={<h2>Cart</h2>} />
        <Route path="/about-us" element={<h2>About us</h2>} />
       </Routes>
       {/* <Footer /> */}

    </div>
    </Router>
  );
}


export default App;