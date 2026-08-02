import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import axios from "axios";

import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import Cart from "./components/Cart";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  const [products, setProducts] = useState([]);
  const [isCartOpen, setisCartOpen] = useState(false);

  const [isReggisterd, setIsReggisterd] = useState(() => {
    return !!localStorage.getItem("RegisterUserData");
  });

  const [isloggedIn, setIsloggedIn] = useState(() => {
    return !!localStorage.getItem("loginData");
  });

  const [cartitems, setCartitems] = useState(() => {
    return JSON.parse(localStorage.getItem("cartProducts")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartitems));
  }, [cartitems]);

  const totalPrice = cartitems.reduce((sum, item) => {
    return sum + item.price * (item.quantity || 1);
  }, 0);

  const total = totalPrice.toFixed(2);

  const getProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const localStorageRegisterdUserData = JSON.parse(
    localStorage.getItem("RegisterUserData")
  );

  if (!isReggisterd) {
    return <Register setIsReggisterd={setIsReggisterd} />;
  }

  if (!isloggedIn) {
    return <Login setIsloggedIn={setIsloggedIn} />;
  }

  return (
    <>
      <Nav
        setisCartOpen={setisCartOpen}
        localStorageRegisterdUserData={localStorageRegisterdUserData}
      />

      {isCartOpen && (
        <Cart
          setisCartOpen={setisCartOpen}
          cartitems={cartitems}
          setCartitems={setCartitems}
          total={total}
        />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <Home
              localStorageRegisterdUserData={localStorageRegisterdUserData}
              cartitems={cartitems}
              total={total}
            />
          }
        />

        <Route
          path="/shop"
          element={
            <Shop
              products={products}
              cartitems={cartitems}
              setCartitems={setCartitems}
            />
          }
        />

        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;