import React, { useEffect, useState } from 'react';
import './App.css';
import Products from './components/Products';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';

function App() {
  const [products, setProducts] = useState(Products);
  const [checkOut, setCheckOut] = useState([]);
  const [total, setTotal] = useState(0);

  const updateProduct = (name, change) => {
    products.map((product) => {
      if (product.name === name) {
        if (change === "up") {
          updateQuantity(product.id, true);
          setCheckOut([...checkOut, "Item"]);
        } else {
          if (product.quantity > 0) {
            updateQuantity(product.id, false);
            setCheckOut(checkOut.splice(1));
          }
        }
      }
      return product;
    })
  };

  const updateQuantity = (id, higherVal) => {
    setProducts(
      products.map((product) => {
        if (product.id == id) {
          if (product.quantity < 11 && product.quantity > -1) {
            if (higherVal) {
              product.quantity++;
              setTotal(total + parseInt(product.cost));
            } else {
              product.quantity--;
              setTotal(total - parseInt(product.cost));
            }
            return product;
          }
        }
        return product;
      })
    )
  };

  return (
    <Router basename ={process.env.PUBLIC_URL}>
      <div className="content">
        <Nav checkOut={checkOut} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact 
            render={props => <Shop {...props}
            products={products}
            total={total}
            updateProduct={updateProduct}
            updateQuantity={updateQuantity}
          />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
