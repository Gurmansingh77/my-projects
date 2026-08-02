import React from "react";
import { Link } from "react-router";
import { Zap, ShoppingCart } from "lucide-react";

const Nav = ({ setisCartOpen, localStorageRegisterdUserData }) => {
return ( <nav className="bg-black border-b border-gray-800"> <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
{/* Logo */} <div className="flex items-center gap-3"> <div className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center"> <Zap className="w-5 h-5 text-black fill-black" /> </div> <h1 className="text-2xl font-bold text-white">
Sky<span className="text-lime-400">Mart</span> </h1> </div>


    {/* Navigation links */}
    <div className="hidden md:flex items-center gap-8 text-sm">
      <Link to="/" className="text-gray-400 hover:text-white transition">
        Home
      </Link>

      <Link to="/shop" className="text-gray-400 hover:text-white transition">
        Shop
      </Link>

      <Link to="/about" className="text-gray-400 hover:text-white transition">
        About
      </Link>
    </div>

    {/* Right section */}
    <div className="flex items-center gap-3">
      <button className="px-4 py-2 rounded-xl bg-lime-400 text-black text-sm font-semibold">
        {localStorageRegisterdUserData?.name || "Guest"}
      </button>

      <button
        onClick={() => setisCartOpen(true)}
        className="w-10 h-10 rounded-xl border border-gray-700 text-white flex items-center justify-center hover:border-lime-400 transition"
      >
        <ShoppingCart className="w-4 h-4" />
      </button>
    </div>
  </div>
</nav>


);
};

export default Nav;
