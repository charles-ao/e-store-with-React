import React from 'react';
import { Switch, Route } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/cart/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
import Footer from "./components/Footer";



function App() {
  return ( 
    <div>
      <Navbar /> 
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route  component={Default} />
      </Switch>
      <Modal /> 
      <br/>
      <Footer />
    </div>
);
}

export default App;
