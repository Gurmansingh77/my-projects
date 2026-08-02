import { createContext, useState } from "react";

export let MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [toggleCartSection, setToggleCartSection] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const incrimentQuantity = (id) => {
    console.log(id)
    setCartItems((prev) => {
      return prev.map((val) => {
        return val.id === id ? { ...val, quantity: val.quantity + 1 } : val;
      });
    });
  };

  return (
    <MyStore.Provider
      value={{
        toggleCartSection,
        setToggleCartSection,
        cartItems,
        setCartItems,
        incrimentQuantity,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
