import React, { createContext, useState } from "react";
import productsData from "../data/products";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    const [products] = useState(productsData);

    const getProductById = (id) => {
        return products.find(
            (product) => product.id === Number(id)
        );
    };

    return (
        <ProductContext.Provider
            value={{
                products,
                getProductById,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

     