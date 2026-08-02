import React, { useState } from "react";
import { Zap, Search, ShoppingCart, Star, CopyMinus } from "lucide-react";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import Cart from "./Cart";

const Shop = ({
  products,
  setisCartOpen,
  isCartOpen,
  setCartitems,
  cartitems,
}) => {
  const [state, setState] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // const matchSearch = products.filter((product) => {
  //   return product.title.toLowerCase().includes(state.toLowerCase());
  // });

  // const matchCategory = products.filter((product) => {
  //   return product.title.toLowerCase().includes(selectedCategory.toLocaleLowerCase())
  // })

  let filteredProducts = products.filter((product) => {
    let matchSearch = product.title
      .toLowerCase()
      .includes(state.toLocaleLowerCase());
    let matchCategory =
      selectedCategory === "" ||
      selectedCategory === "all" ||
      product.category === selectedCategory;

    return matchSearch && matchCategory;
  });

  return (
    <>
      {isCartOpen && <Cart setisCartOpen={setisCartOpen} />}

      <div className="min-h-screen bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-6">
          {/* Navbar */}

          {/* Header */}
          <div className="mb-6">
            <h2 className="text-4xl font-bold mb-2">All Products</h2>
            <p className="text-gray-400">
              Discover premium products across all categories
            </p>
          </div>

          {/* Search & Filters */}
          <div className="bg-[#0B0B0B] border border-gray-800 rounded-2xl p-4 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full bg-black border border-gray-800 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 outline-none focus:border-lime-400"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="px-4 py-3 rounded-xl bg-lime-400 text-black font-semibold"
                >
                  All
                </button>
                <button
                  onClick={() => setSelectedCategory("electronics")}
                  className="px-4 py-3 rounded-xl border border-gray-800 text-gray-300"
                >
                  Electronics
                </button>
                <button
                  onClick={() => setSelectedCategory("men's clothing")}
                  className="px-4 py-3 rounded-xl border border-gray-800 text-gray-300"
                >
                  Clothing
                </button>
                <button
                  onClick={() => setSelectedCategory("jewelery")}
                  className="px-4 py-3 rounded-xl border border-gray-800 text-gray-300"
                >
                  Jewelery
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredProducts.map((product) => {
              const isAdded = cartitems.some((item, index) => {
                return item.id === product.id;
              });

              return (
                <div
                  key={product.id}
                  className="bg-[#0B0B0B] border border-gray-800 rounded-2xl p-4 hover:border-lime-400/40 transition"
                >
                  <div className="bg-white rounded-xl h-44 flex items-center justify-center mb-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-28 object-contain"
                    />
                  </div>

                  <span className="inline-block text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300 mb-3">
                    {product.category}
                  </span>

                  <h3 className="text-white font-semibold text-sm leading-6 mb-3 line-clamp-2">
                    {product.title}
                  </h3>

                  <div className="flex items-center gap-1 text-sm text-gray-400 mb-4">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span>{product.rating.rate}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-lime-400 font-bold text-lg">
                      ${product.price}
                    </p>

                    {isAdded ? (
                      <button className="bg-lime-900 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-lime-300 transition">
                        Added to Cart
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setCartitems((prev) => [
                            ...prev,
                            { ...product, quantity: 1 },
                          ]);
                        }}
                        className="bg-lime-400 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-lime-300 transition"
                      >
                        Add
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
