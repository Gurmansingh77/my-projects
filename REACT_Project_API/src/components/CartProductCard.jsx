import React from "react";

const CartProductCard = ({ product }) => {
return ( <div className="w-full bg-white rounded-2xl shadow-md p-4 flex items-center gap-5 hover:shadow-lg transition-all duration-300">


  {/* Product Image */}
  <div className="w-24 h-24 bg-gray-100 rounded-xl flex items-center justify-center p-3">
    <img
      src={product.image}
      alt={product.title}
      className="w-full h-full object-contain"
    />
  </div>

  {/* Product Details */}
  <div className="flex-1">

    {/* Category */}
    <p className="text-xs uppercase text-blue-600 font-semibold">
      {product.category}
    </p>

    {/* Title */}
    <h2 className="text-lg font-bold text-gray-800 mt-1 line-clamp-2">
      {product.title}
    </h2>

    {/* Description */}
    <p className="text-sm text-gray-500 mt-2 line-clamp-2">
      {product.description}
    </p>

    {/* Rating */}
    <div className="flex items-center gap-2 mt-3">
      <span className="text-yellow-500">⭐</span>
      <span className="text-sm font-medium text-gray-700">
        {product.rating.rate}
      </span>
      <span className="text-sm text-gray-400">
        ({product.rating.count})
      </span>
    </div>
  </div>

  {/* Price & Actions */}
  <div className="flex flex-col items-end justify-between h-24">

    {/* Price */}
    <h3 className="text-2xl font-bold text-green-600">
      ${product.price}
    </h3>

    {/* Remove Button */}
    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition">
      Remove
    </button>
  </div>

</div>


);
};

export default CartProductCard;
