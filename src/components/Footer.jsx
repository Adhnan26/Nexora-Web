import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full mt-20 bg-gray-100 border-t border-gray-200">

            {/* TOP SECTION */}
            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start gap-12">

                {/* BRAND */}
                <div className="max-w-xs">
                    <Link to="/" className="text-xl font-bold text-gray-900 mb-4 inline-block">
                        Nexora
                    </Link>
                    <p className="text-sm text-gray-500 mb-6">
                        Redefining the relationship between human creativity and technological precision.
                    </p>

                    <div className="flex gap-4">
                        <span className="text-gray-400 hover:text-blue-600 cursor-pointer">🌐</span>
                        <span className="text-gray-400 hover:text-blue-600 cursor-pointer">✉️</span>
                    </div>
                </div>

                {/* LINKS */}
                <div className="grid grid-cols-2 gap-12 lg:gap-24">

                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">Company</h4>
                        <nav className="flex flex-col gap-3 text-sm text-gray-500">
                            <Link to="/" className="hover:text-gray-900">About Us</Link>
                            <Link to="/" className="hover:text-gray-900">Global Offices</Link>
                            <Link to="/" className="hover:text-gray-900">Sustainability</Link>
                        </nav>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
                        <nav className="flex flex-col gap-3 text-sm text-gray-500">
                            <Link to="/" className="hover:text-gray-900">Privacy Policy</Link>
                            <Link to="/" className="hover:text-gray-900">Terms of Service</Link>
                        </nav>
                    </div>

                </div>

                {/* NEWSLETTER */}
                <div className="w-full md:w-auto">
                    <h4 className="font-bold text-gray-900 mb-4">Newsletter</h4>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-blue-700">
                            Join
                        </button>
                    </div>
                </div>

            </div>

            {/* BOTTOM SECTION */}
            <div className="max-w-7xl mx-auto px-6 py-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">

                <p className="text-xs text-gray-400">
                    © 2024 Nexora Technologies. All rights reserved.
                </p>

                <div className="flex items-center gap-4">
                    <img
                        alt="Visa"
                        className="h-6 grayscale opacity-50"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjeCrOOlgs9qyOXpm4NrqNWhdhYvBc9bLs0wGrefOF8oGuAAwBjBxZjOH_qn68Z_C0uWdi8e1Zr0tB7-1stUd1yZn8jYimlb4_uxfeVPttKOkOYNJ0KTMXYrX8u8tkvfya_yG-h_soN00706y3uZmtuE6P26cAVkdYQdoaDhkdsr9M5shVFCjKAy_vRfY4huPS1F8ehGXfTfA_tsSM2_ZpZ-pSeB3m5ZFO7CLtTWoQnRDVHrsJ_WT9z2N1CtPPsVZZFNtalUmutCqT"
                    />
                    <img
                        alt="Mastercard"
                        className="h-6 grayscale opacity-50"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhIx3PtIy0EOy-LUPlyMwpnHInRbKGHNEfffFQyadJFF-PM8snUp1aij1vIAMmnVbZ8fKAnPmS50gWYbVXHLRezIYwa0bDaB3CLDg7YhtzfAJ6Au2WUu-Jy1yMTiNgEr2o9c2Fa7NHEk6VEL3e_p29BZ_1pM2ht-yijyQXlhzf4dbksRbB4k43ToyBDxDT6DBrFPoDpFBh9BlB8GSWfJ8lvNZzZKAcMtLFw0He0Z65sUwVU3k10LKSlfBTCTfYltsGiM9CC7IdkOM8"
                    />
                    <img
                        alt="Apple Pay"
                        className="h-6 grayscale opacity-50"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI2XPfuLQH3YL4OT78-FdctY3HC9N9pDT0EwOIgkmyCiTebdwv2QieZwDgUYtW8eZqr8L63gjXsr1riNlQe8gDRSpZ9-p-3aqzWEGK4fB12XSscNd2vz1rnBidQNizW3BNGb8QyFe_-XQFSUbiPGlRb2-vMHiziLvU6vn1VYOYGozh8_yocqtX4dmbW7Z_bEMLqUSypB6WJJSaX5SH1OrkTmqjN6dGcPBpX7D1rMi0WBlfYJWlP94T2VHcBrhJ4B9RiixM0w9N6jvl"
                    />
                </div>

            </div>
        </footer>
    );
};

export default Footer;