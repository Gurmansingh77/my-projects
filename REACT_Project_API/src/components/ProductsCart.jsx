import React, { useState, useEffect } from "react";

const ProductsCart = ({
  product,
  setCartItems,
  isInCart,
  incrimentQuantity,
}) => {
  const addToCart = () => {
    setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
    alert("Product added into Cart");
  };

  return (
    <div className="w-60 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
      {/* Product Image */}
      <div className="h-40 bg-gray-100 flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-28 object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        {/* Category */}
        <p className="text-xs uppercase text-blue-600 font-semibold mb-2">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="text-sm font-bold text-gray-800 h-10 overflow-hidden">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-xs text-gray-500 h-12 overflow-hidden mt-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-green-600">
            ${product.price}
          </span>
        </div>

        {/* Button */}
        {isInCart ? (
          <button className="text-white bg-gray-500 w-full p-2 rounded-xl text-bold flex gap-5 items-center justify-center ">
            <span className="bg-black px-2 rounded-xl flex items-center justify-center">
              -
            </span>{" "}
            <span className="bg-black px-2 rounded-xl flex items-center justify-center">
              {isInCart.quantity}
            </span>{" "}
            <span
            onClick={() => {
              return incrimentQuantity(product.id)}
            }
             className="bg-black px-2 rounded-xl flex items-center justify-center">
              +
            </span>
          </button>
        ) : (
          <button
            onClick={addToCart}
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductsCart;
