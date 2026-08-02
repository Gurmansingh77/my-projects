import React from "react";
import {
  Zap,
  ShoppingCart,
  DollarSign,
  Star,
  Tag,
  Monitor,
  Shirt,
  Sofa,
  House,
  Trophy,
  Sparkles,
  Truck,
  ShieldCheck,
  BadgeDollarSign,
  ArrowRight,
  Contact,
} from "lucide-react";
import { Link } from "react-router";

const categories = [
  { name: "Electronics", items: 8, icon: Monitor },
  { name: "Clothing", items: 2, icon: Shirt },
  { name: "Furniture", items: 3, icon: Sofa },
  { name: "Home", items: 14, icon: House },
  { name: "Sports", items: 8, icon: Trophy },
  { name: "Accessories", items: 6, icon: Tag },
];

const topRated = [
  { name: "Premium Headphones", price: "$299.99" },
  { name: "Smart Watch", price: "$199.99" },
  { name: "Wireless Earbuds", price: "$149.99" },
  { name: "Gaming Mouse", price: "$89.99" },
  { name: "Mechanical Keyboard", price: "$129.99" },
];

const newArrivals = [
  { name: "Designer Bag", price: "$99.99" },
  { name: "Minimal Lamp", price: "$79.99" },
  { name: "Ceramic Vase", price: "$64.99" },
  { name: "Coffee Grinder", price: "$159.99" },
  { name: "Water Bottle", price: "$34.99" },
];

const ProductRow = ({ product }) => (
  <div className="flex items-center justify-between bg-[#111111] border border-gray-800 rounded-xl px-4 py-3">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-gray-200">
        <img src={product.image} alt="" />
      </div>
      <div>
        <p className="text-white text-sm">{product.name}</p>
        <p className="text-lime-400 text-sm font-medium">{product.price}</p>
      </div>
    </div>
    <button className="w-8 h-8 rounded-lg bg-lime-400/20 text-lime-400 flex items-center justify-center hover:bg-lime-400 hover:text-black transition">
      +
    </button>
  </div>
);

const Home = ({ localStorageRegisterdUserData , product , cartitems , total }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      {" "}
      <div className="max-w-6xl mx-auto px-6 py-6">
        {/* Navbar */}{" "}
        
        {/* Hero */}
        <div className="bg-[#0B0B0B] border border-gray-800 rounded-3xl p-8 flex flex-col md:flex-row justify-between gap-8 mb-6">
          <div className="max-w-2xl">
            <p className="text-lime-400 text-xs font-semibold tracking-widest uppercase mb-3">
              Good evening
            </p>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Welcome back,
              <br />
              <span className="text-lime-400">
                {localStorageRegisterdUserData?.name || "Shopper"}!
              </span>
            </h2>

            <p className="text-gray-400 mt-6 text-lg">
              Discover today's picks — hand-curated products across electronics,
              fashion, and more.
            </p>

            <div className="flex gap-4 mt-8">
              <Link to="/shop">
                <button className="bg-lime-400 text-black px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-lime-300 transition">
                  Shop now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link to="/shop">
                <button className="border border-gray-700 px-6 py-3 rounded-xl text-gray-300 hover:border-lime-400 hover:text-white transition">
                  View all products
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-48 flex md:flex-col gap-4">
            <div className="flex-1 bg-lime-400/10 border border-lime-400/30 rounded-2xl p-5 text-center">
              <h3 className="text-3xl font-bold text-lime-400">20+</h3>
              <p className="text-gray-400 text-sm mt-2">Products available</p>
            </div>

            <div className="flex-1 border border-gray-700 rounded-2xl p-5 text-center">
              <h3 className="text-3xl font-bold">Free</h3>
              <p className="text-gray-400 text-sm mt-2">Delivery on ₹999+</p>
            </div>
          </div>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#0B0B0B] border border-gray-800 rounded-2xl p-5 flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-lime-400/10 flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-lime-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">{cartitems.length}</h3>
              <p className="text-gray-400 text-sm">Cart items</p>
            </div>
          </div>

          <div className="bg-[#0B0B0B] border border-gray-800 rounded-2xl p-5 flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">${total}</h3>
              <p className="text-gray-400 text-sm">Cart value</p>
            </div>
          </div>

          <div className="bg-[#0B0B0B] border border-gray-800 rounded-2xl p-5 flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-yellow-500/10 flex items-center justify-center">
              <Star className="w-5 h-5 text-yellow-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">5</h3>
              <p className="text-gray-400 text-sm">Top products</p>
            </div>
          </div>

          <div className="bg-[#0B0B0B] border border-gray-800 rounded-2xl p-5 flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <Tag className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">6</h3>
              <p className="text-gray-400 text-sm">Categories</p>
            </div>
          </div>
        </div>
        {/* Categories */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Shop by category</h3>
          <button className="text-lime-400 text-sm flex items-center gap-1">
            View all
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.name}
                className="bg-[#0B0B0B] text-white rounded-2xl p-6 hover:scale-105 transition cursor-pointer border border-gray-800"
              >
                <Icon className="w-8 h-8 text-lime-600 mb-4" />
                <h4 className="font-semibold">{cat.name}</h4>
                <p className="text-gray-500 text-sm">{cat.items} items</p>
              </div>
            );
          })}
        </div>
        {/* Product sections */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#0B0B0B] border border-gray-800 rounded-3xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                Top rated
              </h3>
            </div>

            <div className="space-y-3">
              {topRated.map((product) => (
                <ProductRow key={product.name} product={product} />
              ))}
            </div>
          </div>

          <div className="bg-[#0B0B0B] border border-gray-800 rounded-3xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-lime-400" />
                New arrivals
              </h3>
            </div>

            <div className="space-y-3">
              {newArrivals.map((product) => (
                <ProductRow key={product.name} product={product} />
              ))}
            </div>
          </div>
        </div>
        {/* Features */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          <div className="bg-[#0B0B0B] border border-gray-800 rounded-2xl p-5 flex items-center gap-4">
            <Truck className="w-8 h-8 text-lime-400" />
            <div>
              <h4 className="font-semibold">Fast delivery</h4>
              <p className="text-gray-400 text-sm">Same-day on select items</p>
            </div>
          </div>

          <div className="bg-[#0B0B0B] border border-gray-800 rounded-2xl p-5 flex items-center gap-4">
            <ShieldCheck className="w-8 h-8 text-blue-400" />
            <div>
              <h4 className="font-semibold">Secure payments</h4>
              <p className="text-gray-400 text-sm">100% encrypted checkout</p>
            </div>
          </div>

          <div className="bg-[#0B0B0B] border border-gray-800 rounded-2xl p-5 flex items-center gap-4">
            <BadgeDollarSign className="w-8 h-8 text-green-400" />
            <div>
              <h4 className="font-semibold">Best prices</h4>
              <p className="text-gray-400 text-sm">Price-match guarantee</p>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="border-t border-gray-800 pt-8 text-center">
          <h4 className="text-lime-400 font-bold text-xl">SkyMart</h4>
          <p className="text-gray-500 text-sm mt-2">
            © 2026 SkyMart • Built with React + Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
