import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../context/AuthContext";

import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import { motion } from "framer-motion";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { login, user } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    login(formData.email, formData.password);

    toast.success(
      isLogin
        ? "Login successful"
        : "Account created successfully"
    );

    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 to-white px-4 pb-10 pt-26">

      <div className="w-full max-w-md space-y-8">

        <div className="text-center">

          <h1 className="text-3xl font-bold text-gray-900">
            {isLogin
              ? "Welcome back"
              : "Create your account"}
          </h1>

          <p className="text-gray-500 mt-2">
            Continue to Nexora.
          </p>

        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }} className="bg-white rounded-3xl p-8 shadow-xl border">

          {/* TOGGLE */}
          <div className="flex p-1 bg-gray-100 rounded-xl mb-6">

            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 rounded-lg ${isLogin
                ? "bg-white shadow text-violet-600"
                : "text-gray-500"
                }`}
            >
              Login
            </button>

            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 rounded-lg ${!isLogin
                ? "bg-white shadow text-violet-600"
                : "text-gray-500"
                }`}
            >
              Sign Up
            </button>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >

            {!isLogin && (
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-violet-400"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
              />
            )}

            <input
              type="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-violet-400"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
            />

            <input
              type="password"
              placeholder="Password"
              required
              className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-violet-400"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password: e.target.value,
                })
              }
            />

            <button className="w-full py-3 bg-violet-600 text-white rounded-xl font-semibold hover:bg-violet-700 transition">
              {isLogin
                ? "Login"
                : "Create Account"}
            </button>

          </form>

      </motion.div>
    </div>
    </div >
  );
};

export default Login;