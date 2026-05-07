import React, { useContext } from "react";

import { useParams } from "react-router-dom";

import products from "../data/products";

import { CartContext } from "../context/CartContext";

import {
  FiShoppingCart,
  FiStar,
} from "react-icons/fi";

const ProductDetails = () => {
  const { id } = useParams();

  const { addToCart } =
    useContext(CartContext);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="pt-40 text-center">
        Product not found
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <div className="bg-gray-100 rounded-3xl p-10">

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-contain"
          />

        </div>

        {/* CONTENT */}
        <div>

          {product.badge && (
            <span className="inline-block bg-violet-100 text-violet-600 px-4 py-1 rounded-full text-sm mb-6">
              {product.badge}
            </span>
          )}

          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {product.name}
          </h1>

          {/* RATING */}
          <div className="flex items-center gap-3 mb-6">

            <div className="flex text-yellow-400">
              {[...Array(Math.floor(product.rating))].map(
                (_, index) => (
                  <FiStar
                    key={index}
                    fill="currentColor"
                  />
                )
              )}
            </div>

            <span className="text-gray-500">
              {product.rating} Rating
            </span>

          </div>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {product.description}
          </p>

          <div className="text-4xl font-bold text-violet-600 mb-10">
            ₹{product.price.toLocaleString()}
          </div>

          <button
            onClick={() => addToCart(product)}
            className="bg-violet-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-violet-700 transition flex items-center gap-3"
          >
            <FiShoppingCart />
            Add To Cart
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;