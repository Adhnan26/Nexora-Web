import React, { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const Wishlist = () => {
    const { wishlist } = useContext(WishlistContext);

    return (
        <div className="max-w-7xl mx-auto px-6 pt-28 pb-20">

            <div className="mb-12">
                <h1 className="text-5xl font-bold text-gray-900 mb-3">
                    Wishlist
                </h1>

                <p className="text-gray-500">
                    Your favorite saved products.
                </p>
            </div>

            {wishlist.length === 0 ? (
                <div className="bg-white rounded-3xl p-12 text-center shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

                    <h2 className="text-3xl font-bold mb-4">
                        Your wishlist is empty
                    </h2>

                    <p className="text-gray-500 mb-8">
                        Save products you love to view later.
                    </p>

                    <Link
                        to="/products"
                        className="bg-violet-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-violet-700 transition"
                    >
                        Explore Products
                    </Link>

                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {wishlist.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}

                </div>
            )}
        </div>
    );
};

export default Wishlist;