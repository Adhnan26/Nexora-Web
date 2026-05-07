import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const { cartItems, clearCart } = useContext(CartContext);

    const navigate = useNavigate();

    const [placed, setPlaced] = useState(false);

    const [loading, setLoading] = useState(false);

    const total = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const handleOrder = (e) => {
        e.preventDefault();

        setLoading(true);

        setTimeout(() => {

            localStorage.removeItem("cart");

            setLoading(false);

            setPlaced(true);

            setTimeout(() => {
                navigate("/");
                window.location.reload();
            }, 2500);

        }, 2500);
    };

    if (placed) {
        return (
            <div className="min-h-screen flex items-center justify-center text-center px-6">
                <div>
                    <h1 className="text-5xl font-bold text-violet-600 mb-4">
                        Order Placed 🎉
                    </h1>

                    <p className="text-gray-500 text-lg">
                        Your order was successfully placed.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-28 pb-20 max-w-6xl mx-auto px-6">

            <h1 className="text-5xl font-bold mb-12">
                Checkout
            </h1>

            <div className="grid lg:grid-cols-2 gap-12">

                <form
                    onSubmit={handleOrder}
                    className="bg-white p-8 rounded-3xl shadow-lg border space-y-6"
                >

                    <input
                        required
                        type="text"
                        placeholder="Full Name"
                        className="w-full border px-4 py-4 rounded-xl outline-none"
                    />

                    <input
                        required
                        type="email"
                        placeholder="Email"
                        className="w-full border px-4 py-4 rounded-xl outline-none"
                    />

                    <input
                        required
                        type="text"
                        placeholder="Address"
                        className="w-full border px-4 py-4 rounded-xl outline-none"
                    />

                    <input
                        required
                        type="text"
                        placeholder="Phone Number"
                        className="w-full border px-4 py-4 rounded-xl outline-none"
                    />

                    <button
                        disabled={loading}
                        className="w-full bg-violet-600 text-white py-4 rounded-xl font-semibold hover:bg-violet-700 transition disabled:opacity-70"
                    >
                        {loading ? "Processing Order..." : "Place Order"}
                    </button>

                </form>

                <div className="bg-white p-8 rounded-3xl shadow-lg border h-fit">

                    <h2 className="text-3xl font-bold mb-8">
                        Order Summary
                    </h2>

                    <div className="space-y-6">

                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex justify-between"
                            >
                                <div>
                                    <h4 className="font-semibold">
                                        {item.name}
                                    </h4>

                                    <p className="text-sm text-gray-500">
                                        Qty: {item.quantity}
                                    </p>
                                </div>

                                <span className="font-semibold">
                                    ₹{item.price * item.quantity}
                                </span>
                            </div>
                        ))}

                    </div>

                    <div className="mt-8 pt-6 border-t flex justify-between text-2xl font-bold">
                        <span>Total</span>
                        <span>₹{total}</span>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Checkout;