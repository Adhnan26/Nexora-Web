import React, { useContext } from "react";


import {
    FiHeart,
    FiShoppingCart,
    FiStar,
} from "react-icons/fi";

import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    const {
        toggleWishlist,
        isWishlisted,
    } = useContext(WishlistContext);

    return (
        <div className="group bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">

            {/* IMAGE */}
            <div className="relative aspect-square bg-gray-100 rounded-xl mb-5 flex items-center justify-center overflow-hidden">

                <img
                    src={product.image}
                    alt={product.name}
                    className="w-4/5 h-4/5 object-contain transition-transform group-hover:scale-105"
                />

                {/* BADGE */}
                {product.badge && (
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                        {product.badge}
                    </span>
                )}

                {/* HEART */}
                <button
                    onClick={() => toggleWishlist(product)}
                    className={`absolute top-3 right-3 p-2 bg-white rounded-full shadow transition ${isWishlisted(product.id)
                            ? "text-red-500"
                            : "text-gray-400"
                        }`}
                >
                    <FiHeart
                        fill={
                            isWishlisted(product.id)
                                ? "currentColor"
                                : "none"
                        }
                    />
                </button>

            </div>

            {/* RATING */}
            <div className="flex items-center gap-1 mb-2 text-sm text-gray-600">
                <FiStar className="text-yellow-400" />
                {product.rating} ({product.reviews} reviews)
            </div>

            {/* NAME */}
            <h3 className="font-semibold text-gray-900 mb-1">
                {product.name}
            </h3>

            {/* DESC */}
            <p className="text-sm text-gray-500 mb-3">
                {product.description}
            </p>

            {/* PRICE */}
            <div className="text-lg font-bold mb-4">
                ₹{product.price.toLocaleString()}
            </div>

            {/* BUTTONS */}
            <div className="flex gap-2">

                <button
                    onClick={() => addToCart(product)}
                    className="flex-1 bg-black text-white py-2 rounded-xl hover:bg-violet-600 transition flex items-center justify-center gap-2"
                >
                    <FiShoppingCart />
                    Add
                </button>

                <Link
                    to={`/products/${product.id}`}
                    className="flex-1 border py-2 rounded-xl text-center hover:bg-gray-100 transition"
                >
                    Details
                </Link>

            </div>

        </div>
    );
};

export default ProductCard;