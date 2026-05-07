import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import {
  FiPlus,
  FiMinus,
  FiTrash2,
  FiLock,
  FiTruck,
} from "react-icons/fi";

const Cart = () => {

  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    subtotal,
  } = useContext(CartContext);


  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">

        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          Your Cart is Empty
        </h1>

        <p className="text-gray-500 mb-8 max-w-md">
          Looks like you haven’t added anything yet. Explore our premium products and start shopping.
        </p>

        <Link
          to="/products"
          className="bg-violet-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-violet-700 transition active:scale-95"
        >
          Continue Shopping
        </Link>

      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-6">

      {/* HEADER */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-2">
          Shopping Bag
        </h1>

        <p className="text-lg text-gray-500">
          Review your selections before checkout.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* LEFT */}
        <div className="lg:col-span-8 space-y-6">

          {/* TABLE HEAD */}
          <div className="hidden md:grid grid-cols-12 pb-4 border-b text-sm text-gray-500">
            <div className="col-span-6">Product Details</div>
            <div className="col-span-2 text-center">Quantity</div>
            <div className="col-span-2 text-right">Price</div>
          </div>

          {/* ITEMS */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 py-6 border-b"
            >

              {/* PRODUCT */}
              <div className="md:col-span-6 flex items-center gap-6">

                <div className="w-28 h-28 bg-gray-100 rounded-3xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {item.name}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {item.desc}
                  </p>

                  {item.id === 1 && (
                    <span className="mt-2 inline-block px-3 py-1 rounded-full text-xs bg-violet-100 text-violet-600">
                      In Stock
                    </span>
                  )}
                </div>

              </div>

              {/* QUANTITY */}
              <div className="md:col-span-2 flex justify-center items-center">

                <div className="flex items-center border rounded-xl overflow-hidden">

                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    <FiMinus />
                  </button>

                  <span className="px-4">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    <FiPlus />
                  </button>

                </div>

              </div>

              {/* PRICE */}
              <div className="md:col-span-2 flex md:justify-end items-center text-xl font-semibold">
                ₹{(item.price * item.quantity).toLocaleString()}
              </div>

              {/* DELETE */}
              <div className="md:col-span-2 flex md:justify-end items-center">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <FiTrash2 size={20} />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* RIGHT */}
        <aside className="lg:col-span-4 sticky top-28">

          <div className="bg-white rounded-3xl p-8 shadow-lg border">

            <h2 className="text-3xl font-bold mb-8">
              Order Summary
            </h2>

            <div className="space-y-4 mb-8">

              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span className="text-black font-medium">
                  ₹{subtotal.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between text-gray-500">
                <span>Shipping</span>
                <span className="text-black font-medium">
                  Free
                </span>
              </div>

              <div className="flex justify-between text-gray-500">
                <span>Estimated Tax</span>
                <span className="text-black font-medium">
                  ₹{tax.toFixed(2)}
                </span>
              </div>

              <div className="pt-4 border-t flex justify-between text-2xl font-bold">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>

            </div>

            {/* PROMO */}
            <div className="mb-8">
              <label className="block text-sm text-gray-500 mb-2">
                Promo Code
              </label>

              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  className="flex-1 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500"
                />

                <button className="bg-gray-200 px-5 py-1 rounded-xl font-medium hover:bg-gray-300">
                  Apply
                </button>
              </div>
            </div>

            {/* CHECKOUT */}
            <Link
              to="/checkout"
              className="block w-full text-center bg-violet-600 text-white py-4 rounded-2xl text-lg font-semibold hover:bg-violet-700 transition"
            >
              Proceed to Checkout
            </Link>

            {/* SECURE */}
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
              <FiLock />
              Secure Checkout Powered by Stripe
            </div>

          </div>

          {/* DELIVERY CARD */}
          <div className="mt-6 bg-violet-50 rounded-3xl p-6 border border-violet-100 flex gap-4">

            <div className="bg-violet-100 p-3 rounded-xl h-fit">
              <FiTruck className="text-violet-600" />
            </div>

            <div>
              <h4 className="font-semibold text-violet-900">
                Free Next-Day Delivery
              </h4>

              <p className="text-sm text-violet-700 mt-1">
                Your order qualifies for complimentary express shipping.
              </p>
            </div>

          </div>

        </aside>
      </div>
    </div>
  );
};

export default Cart;