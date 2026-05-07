import { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const storedWishlist = localStorage.getItem("wishlist");

        if (storedWishlist) {
            setWishlist(JSON.parse(storedWishlist));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(
            "wishlist",
            JSON.stringify(wishlist)
        );
    }, [wishlist]);

    const toggleWishlist = (product) => {
        const exists = wishlist.find(
            (item) => item.id === product.id
        );

        if (exists) {
            setWishlist(
                wishlist.filter((item) => item.id !== product.id)
            );
        } else {
            setWishlist([...wishlist, product]);
        }
    };

    const isWishlisted = (id) => {
        return wishlist.some((item) => item.id === id);
    };

    return (
        <WishlistContext.Provider
            value={{
                wishlist,
                toggleWishlist,
                isWishlisted,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
};