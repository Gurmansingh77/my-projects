import React from "react";
import {
  ShoppingBag,
  X,
  Trash2,
  Minus,
  Plus,
  ArrowRight,
  Zap,
} from "lucide-react";

const Cart = ({ setisCartOpen, cartitems, setCartitems, total }) => {
  console.log(cartitems);

  return (
    <div className="fixed right-0 top-0 h-screen  bg-[#0A0A0A] border-l border-gray-800 text-white flex flex-col min-w-[350px]">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <ShoppingBag className="w-6 h-6 text-lime-400" />
          <h2 className="text-2xl font-bold">Cart</h2>
          <span className="bg-lime-400 text-black text-xs font-semibold px-2 py-1 rounded-full">
            {cartitems.length} item
          </span>
        </div>

        <button
          onClick={() => setisCartOpen(false)}
          className="text-gray-400 hover:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Cart Items */}
      <div className="flex-1 p-5 overflow-y-auto">
        {cartitems.map((item, index) => {
          return (
            <div
              key={`${item.id}-${index}`}
              className="border border-gray-700 rounded-2xl p-4 bg-[#111111]"
            >
              <div className="flex gap-4">
                {/* Product Image */}
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.category}
                    className="w-16 h-16 object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <h3 className="font-semibold text-white leading-6">
                    {item.title}
                  </h3>

                  <p className="text-lime-400 text-3xl font-bold mt-2">
                    {" "}
                    ${item.price * (item.quantity || 1)}
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    {" "}
                    ${item.price} each
                  </p>

                  {/* Quantity Controls */}

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => {
                          const updatedCart = [...cartitems];

                          const itemIndex = updatedCart.findIndex(
                            (product) => product.id === item.id,
                          );

                          if (itemIndex !== -1) {
                            const currentQuantity =
                              updatedCart[itemIndex].quantity || 1;

                            if (currentQuantity > 1) {
                              updatedCart[itemIndex].quantity =
                                currentQuantity - 1;
                              setCartitems(updatedCart);
                            }
                          }
                        }}
                        className="w-8 h-8 rounded-lg border border-gray-700 flex items-center justify-center hover:border-lime-400 transition"
                      >
                        <Minus className="w-4 h-4" />
                      </button>

                      <span className="font-semibold text-white">
                        {item.quantity || 1}
                      </span>

                      <button
                        onClick={() => {
                          const updatedCart = [...cartitems];

                          const itemIndex = updatedCart.findIndex(
                            (product) => product.id === item.id,
                          );

                          if (itemIndex !== -1) {
                            updatedCart[itemIndex].quantity =
                              (updatedCart[itemIndex].quantity || 1) + 1;

                            setCartitems(updatedCart);
                          }
                        }}
                        className="w-8 h-8 rounded-lg border border-gray-700 flex items-center justify-center hover:border-lime-400 transition"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => {
                        const updatedCart = [...cartitems];
                        const itemIndex = updatedCart.findIndex(
                          (product) => product.id === item.id,
                        );

                        if (itemIndex !== -1) {
                          updatedCart.splice(itemIndex, 1);
                        }

                        setCartitems(updatedCart);
                      }}
                      className="text-red-500 hover:text-red-400 transition"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}

      <div className="border-t border-gray-800 p-6">
        <div className="flex items-center justify-between mb-6">
          <span className="text-gray-400 text-lg">Total</span>
          <span className="text-4xl font-bold text-white">${total}</span>
        </div>

        <button className="w-full bg-lime-400 hover:bg-lime-300 text-black font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition">
          Checkout
          <ArrowRight className="w-5 h-5" />
        </button>

        <button
          onClick={() => setCartitems([])}
          className="w-full text-gray-500 hover:text-white mt-4 text-sm transition"
        >
          Clear cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
