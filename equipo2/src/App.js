import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import SingleProduct from './components/SingleProduct';
import SingleCategory from './components/SingleCategory';
import Footer from './components/Footer';
import axios from 'axios';
import React , { useState , useEffect, createContext } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
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
          <Header />
            <Routes >
              <Route path="/" element={<HomePage />} />
              <Route path="/single-product/:id" element={<SingleProduct />} />
              <Route path="/single-category/:cat" element={<SingleCategory />} />
              <Route path="/cart" element={<h2>Cart</h2>} />
              <Route path="/about-us" element={<h2>About us</h2>} />
              <Route path="/faq" element={<h2>FAQ</h2>} />
              <Route path="/privacy" element={<h2>Privacy Policy</h2>} />
              <Route path="/facebook" element={<h2>Facebook</h2>} />
              <Route path="/instagram" element={<h2>instagram</h2>} />
              <Route path="/linkedin" element={<h2>Linkedin</h2>} />
              <Route path="/twitter" element={<h2>Twitter</h2>} />
            </Routes>
            <Footer /> 
        </div>
      </Context.Provider>
    </Router>
  );
}


export default App;

