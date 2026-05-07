import React, { useContext, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import {
  FiChevronRight,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight as FiRight,
  FiShoppingBag,
  FiStar,
  FiHeart,
} from "react-icons/fi";

import { Link } from "react-router-dom";

import productsData from "../data/products";

import { CartContext } from "../context/CartContext";

import { WishlistContext } from "../context/WishlistContext";

const PRODUCTS_PER_PAGE = 9;

const ProductList = () => {

  const [searchParams] = useSearchParams();

  const selectedCategory =
    searchParams.get("category");

  const { addToCart } =
    useContext(CartContext);

  const {
    toggleWishlist,
    isWishlisted,
  } = useContext(WishlistContext);

  const searchQuery =
    searchParams.get("search")?.toLowerCase() || "";

  const [selectedCategories, setSelectedCategories] =
    useState([]);

  const [priceRange, setPriceRange] =
    useState(200000);

  const [selectedRating, setSelectedRating] =
    useState(null);

  const [currentPage, setCurrentPage] =
    useState(1);

  const [showNewArrivals, setShowNewArrivals] =
    useState(false);

  const categories = [
    "Audio & Sound",
    "Computing",
    "Photography",
    "Wearables",
    "Mobiles",
  ];

  // CATEGORY FILTER
  const handleCategoryChange = (category) => {
    setCurrentPage(1);

    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter(
          (item) => item !== category
        )
      );
    } else {
      setSelectedCategories([
        ...selectedCategories,
        category,
      ]);
    }
  };

  // FILTER PRODUCTS
  const filteredProducts = useMemo(() => {
    let filtered = [...productsData];

    // SEARCH
    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name
          .toLowerCase()
          .includes(searchQuery)
      );
    }

    // CATEGORY
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    // PRICE
    filtered = filtered.filter(
      (product) => product.price <= priceRange
    );

    // RATING
    if (selectedRating) {
      filtered = filtered.filter(
        (product) =>
          product.rating >= selectedRating
      );
    }

    // NEW ARRIVALS
    if (showNewArrivals) {
      filtered = filtered.filter(
        (product) => product.badge === "New"
      );
    }

    return filtered;
  }, [
    selectedCategories,
    priceRange,
    selectedRating,
    searchQuery,
    showNewArrivals,
  ]);

  // PAGINATION
  const totalPages = Math.ceil(
    filteredProducts.length / PRODUCTS_PER_PAGE
  );

  const startIndex =
    (currentPage - 1) * PRODUCTS_PER_PAGE;

  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange(200000);
    setSelectedRating(null);
    setShowNewArrivals(false);
    setCurrentPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-28 pb-20">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">

        <div>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <span>Home</span>

            <FiChevronRight size={14} />

            <span className="text-black">
              Electronics
            </span>
          </div>

          <h1 className="text-5xl font-bold text-gray-900">
            Premium Electronics
          </h1>

          <p className="text-gray-500 mt-3 max-w-2xl">
            Explore our curated collection of
            industry-leading hardware,
            designed for precision performance
            and technical luxury.
          </p>
        </div>

        {/* SORT */}
        <div className="relative">
          <button
            onClick={() =>
              setShowNewArrivals(
                !showNewArrivals
              )
            }
            className={`flex items-center gap-2 border px-4 py-3 rounded-xl transition ${showNewArrivals
              ? "bg-violet-600 text-white border-violet-600"
              : "bg-white hover:border-violet-500"
              }`}
          >
            Newest Arrivals

            <FiChevronDown />
          </button>
        </div>

      </div>

      <div className="flex flex-col lg:flex-row gap-12">

        {/* SIDEBAR */}
        <aside className="w-full lg:w-64 space-y-10">

          {/* CATEGORY */}
          <div>
            <h3 className="font-bold text-lg mb-6">
              Category
            </h3>

            <div className="space-y-3">

              {categories.map((item, i) => (
                <label
                  key={i}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(
                      item
                    )}
                    onChange={() =>
                      handleCategoryChange(item)
                    }
                    className="w-5 h-5 accent-violet-600"
                  />

                  <span>{item}</span>
                </label>
              ))}

            </div>
          </div>

          {/* PRICE */}
          <div>
            <div className="flex justify-between mb-6">

              <h3 className="font-bold text-lg">
                Price Range
              </h3>

              <span className="text-sm text-violet-600">
                ₹0 - ₹
                {priceRange.toLocaleString()}
              </span>

            </div>

            <input
              type="range"
              min="0"
              max="200000"
              value={priceRange}
              onChange={(e) =>
                setPriceRange(
                  Number(e.target.value)
                )
              }
              className="w-full accent-violet-600"
            />
          </div>

          {/* RATING */}
          <div>
            <h3 className="font-bold text-lg mb-6">
              Rating
            </h3>

            <div className="space-y-4">

              {[4, 3].map((stars, i) => (
                <label
                  key={i}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="rating"
                    checked={
                      selectedRating === stars
                    }
                    onChange={() => {
                      setSelectedRating(stars);
                      setCurrentPage(1);
                    }}
                  />

                  <div className="flex text-amber-400">
                    {[...Array(stars)].map(
                      (_, index) => (
                        <FiStar
                          key={index}
                          fill="currentColor"
                        />
                      )
                    )}
                  </div>

                  <span>& Up</span>
                </label>
              ))}

            </div>
          </div>

          {/* CLEAR */}
          <button
            onClick={clearFilters}
            className="w-full py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition"
          >
            Clear All Filters
          </button>

        </aside>

        {/* PRODUCTS */}
        <div className="flex-1">

          {/* EMPTY */}
          {currentProducts.length === 0 ? (
            <div className="text-center py-20">

              <h2 className="text-3xl font-bold mb-4">
                No Products Found
              </h2>

              <p className="text-gray-500">
                Try changing filters or
                search.
              </p>

            </div>
          ) : (
            <>
              {/* GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

                {currentProducts
                  .filter((product) => {
                    if (!selectedCategory) return true;

                    if (
                      selectedCategory === "Laptops"
                    ) {
                      return (
                        product.category ===
                        "Computing"
                      );
                    }

                    if (
                      selectedCategory === "Cameras"
                    ) {
                      return (
                        product.category ===
                        "Photography"
                      );
                    }

                    if (
                      selectedCategory === "Watches"
                    ) {
                      return (
                        product.category ===
                        "Wearables"
                      );
                    }

                    return (
                      product.category ===
                      selectedCategory
                    );
                  })
                  .map((product) => (
                    <div
                      key={product.id}
                      className="group bg-white rounded-3xl p-4 hover:shadow-2xl hover:-translate-y-1 transition duration-300"
                    >

                      <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-100 mb-4">

                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                        />

                        {/* HEART */}
                        <button
                          onClick={() =>
                            toggleWishlist(product)
                          }
                          className={`absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition ${isWishlisted(product.id)
                            ? "bg-red-500 text-white"
                            : "bg-white text-gray-500"
                            }`}
                        >
                          <FiHeart
                            fill={
                              isWishlisted(
                                product.id
                              )
                                ? "currentColor"
                                : "none"
                            }
                          />
                        </button>

                        {/* BADGE */}
                        {product.badge && (
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full">

                            <span className="text-[10px] font-bold uppercase tracking-wider text-violet-600">
                              {product.badge}
                            </span>

                          </div>
                        )}

                        {/* ADD TO CART */}
                        <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">

                          <button
                            onClick={() =>
                              addToCart(product)
                            }
                            className="w-full bg-violet-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg"
                          >
                            <FiShoppingBag />

                            Add to Cart
                          </button>

                        </div>

                      </div>

                      <div className="px-2">

                        {/* RATING */}
                        <div className="flex items-center gap-2 mb-2">

                          <div className="flex text-yellow-400">
                            {[...Array(
                              Math.floor(
                                product.rating
                              )
                            )].map((_, index) => (
                              <FiStar
                                key={index}
                                fill="currentColor"
                              />
                            ))}
                          </div>

                          <span className="text-sm text-gray-500">
                            ({product.rating})
                          </span>

                        </div>

                        {/* NAME */}
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {product.name}
                        </h3>

                        {/* PRICE */}
                        <div className="flex justify-between items-center mb-4">

                          <span className="text-sm text-gray-500">
                            {product.category}
                          </span>

                          <span className="font-bold text-violet-600">
                            ₹
                            {product.price.toLocaleString()}
                          </span>

                        </div>

                        {/* DETAILS */}
                        <Link
                          to={`/products/${product.id}`}
                          className="block text-center border py-3 rounded-xl hover:bg-gray-100 transition font-medium"
                        >
                          Details
                        </Link>

                      </div>

                    </div>
                  ))}

              </div>

              {/* PAGINATION */}
              {totalPages > 1 && (
                <div className="mt-16 flex justify-center items-center gap-2">

                  {/* PREV */}
                  <button
                    disabled={currentPage === 1}
                    onClick={() =>
                      setCurrentPage(
                        currentPage - 1
                      )
                    }
                    className="w-10 h-10 border rounded-xl flex items-center justify-center hover:bg-gray-100 disabled:opacity-40"
                  >
                    <FiChevronLeft />
                  </button>

                  {/* NUMBERS */}
                  {[...Array(totalPages)].map(
                    (_, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          setCurrentPage(
                            index + 1
                          )
                        }
                        className={`w-10 h-10 rounded-xl ${currentPage ===
                          index + 1
                          ? "bg-violet-600 text-white font-bold"
                          : "hover:bg-gray-100"
                          }`}
                      >
                        {index + 1}
                      </button>
                    )
                  )}

                  {/* NEXT */}
                  <button
                    disabled={
                      currentPage === totalPages
                    }
                    onClick={() =>
                      setCurrentPage(
                        currentPage + 1
                      )
                    }
                    className="w-10 h-10 border rounded-xl flex items-center justify-center hover:bg-gray-100 disabled:opacity-40"
                  >
                    <FiRight />
                  </button>

                </div>
              )}
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default ProductList;