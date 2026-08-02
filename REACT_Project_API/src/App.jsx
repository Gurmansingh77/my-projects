import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import NavBar from "./components/NavBar";
import ProductsCart from "./components/ProductsCart";
import CartScreen from "./pages/CartScreen";
import { MyStore } from "./Context/MyContext";

const App = () => {
  let { setToggleCartSection, toggleCartSection, setCartItems, cartItems } =
    useContext(MyStore);
  const [products, setProductsArr] = useState([]);

  const getProductsData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProductsArr(res.data);
    } catch (error) {
      console.log("Error in API:", error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="bg-black min-h-screen w-full text-white p-4 select-none">
      <div>
        <NavBar setToggleCartSection={setToggleCartSection} />
      </div>

      {toggleCartSection ? (
        <div className=" ">
          <CartScreen />
        </div>
      ) : (
        <div className="flex flex-wrap gap-6 mt-6 justify-center">
          {products.map((item) => {

            let isInCart = cartItems.find((val) => val.id === item.id)
            console.log(isInCart)

           return <ProductsCart
           isInCart={isInCart}
              setCartItems={setCartItems}
              key={item.id}
              product={item}
            />;
          })}
        </div>
      )}
    </div>
  );
};

export default App;
