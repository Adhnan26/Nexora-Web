import React, { useContext, useState } from "react";
import {
    FiMenu,
    FiUser,
    FiShoppingCart,
    FiSearch,
    FiX,
    FiLogOut,
} from "react-icons/fi";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [search, setSearch] = useState("");

    const location = useLocation();
    const navigate = useNavigate();

    const { cartCount } = useContext(CartContext);
    const { user, logout } = useContext(AuthContext);

    const isActive = (path) => location.pathname === path;

    const handleSearch = (e) => {
        if (e.key === "Enter") {
            navigate(`/products?search=${search}`);
        }
    };

    return (
        <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* LOGO */}
                <Link
                    to="/"
                    className="text-2xl font-bold text-gray-900 italic"
                >
                    Nexora
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden md:flex items-center gap-8 text-md font-semibold">

                    <Link
                        to="/"
                        className={`${isActive("/")
                                ? "text-violet-600 border-b-2 border-violet-600 pb-1"
                                : "text-gray-600 hover:text-violet-600"
                            }`}
                    >
                        Home
                    </Link>

                    <Link
                        to="/products"
                        className={`${isActive("/products")
                                ? "text-violet-600 border-b-2 border-violet-600 pb-1"
                                : "text-gray-600 hover:text-violet-600"
                            }`}
                    >
                        Products
                    </Link>

                </nav>

                {/* RIGHT */}
                <div className="flex items-center gap-4">

                    {/* SEARCH */}
                    <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-full">

                        <FiSearch className="text-gray-500 mr-2" />

                        <input
                            type="text"
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={handleSearch}
                            className="bg-transparent outline-none text-sm w-32"
                        />

                    </div>

                    {/* LOGIN */}
                    {!user ? (
                        <Link
                            to="/login"
                            className="text-gray-600 hover:text-violet-600 text-lg"
                        >
                            <FiUser />
                        </Link>
                    ) : (
                        <button
                            onClick={logout}
                            className="text-gray-600 hover:text-red-500 text-lg"
                        >
                            <FiLogOut />
                        </button>
                    )}

                    {/* CART */}
                    <Link
                        to="/cart"
                        className="relative text-gray-600 hover:text-violet-600 text-lg"
                    >
                        <FiShoppingCart />

                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-violet-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </Link>

                    {/* MOBILE MENU */}
                    <button
                        className="md:hidden text-xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>

                </div>
            </div>

            {/* MOBILE MENU */}
            <div
                className={`md:hidden bg-white border-t overflow-hidden transition-all duration-500 ${menuOpen
                        ? "max-h-64 py-4 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-6">

                    <Link
                        to="/"
                        className="block mb-4"
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </Link>

                    <Link
                        to="/products"
                        className="block mb-4"
                        onClick={() => setMenuOpen(false)}
                    >
                        Products
                    </Link>

                    <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full">

                        <FiSearch className="text-gray-500 mr-2" />

                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent outline-none text-sm w-full"
                        />

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;