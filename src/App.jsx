import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Wishlist from "./pages/Wishlist";
import ProductList from './pages/ProductList'
import { Toaster } from "react-hot-toast";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import ProtectedRoute from "./routes/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";


const App = () => {
  return (
    <>
      <Toaster position="top-right" />
      <BrowserRouter>
      <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />

          <Route path="/products" element={<ProductList />} />

          <Route
            path="/products/:id"
            element={<ProductDetails />}
          />

          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />

          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App