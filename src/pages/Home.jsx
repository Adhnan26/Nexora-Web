import React, { useState } from "react";
import { FiTruck, FiBox, FiStar, FiShield, FiHeadphones, FiRefreshCw, } from "react-icons/fi";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Mobiles",
    desc: "Precision in your palm",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDjq57Z_4PZWdk3lMpsYZFbf8TKJKWqwdpcI7UfJw5sn6lCgWX3rViTMZgzoIYLDWgfrtkA8wJJE4Gy1X2ax7WEQ7vorGOj-lmpoI-bUA4LVkf-8ML4l3ISbI7d-M3Ig__-cV9BGGfql2fXdYK2MmCEjI8XSUQFxeHzLQCBtAUegS9q1kgyRJ0XpqerpTezDAYLK-NDAurjDPi0Jv7ipqoPwfQd1lO9A3SBN7XlqxnNA916v9uUJEmgeYxjvVy4gi6jV_rVbFKSJg5N",
  },

  {
    name: "Laptops",
    desc: "Pro-grade performance",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCzJHKQDxjSCA--RJk-MBj3RkX0Z_qpSGvZ3pPlHlDj2Sqf5k2TtyvEcNJd4pRKvCGHx9Z4hLoERuEhOAewTrKoOzk526EjNJtsk0n3e2NM--4-InSwhIwUXUHvYY5jCyiaANy5m7azjtAMtg6iZbbsKsM1Cfv3cX6exQOgSTfXjS8geCU4_joX6TTg1Ec5iSv2thy9rhUqtRu-357kx7OSLGRDSGNwwzhSM64RfTnAwnYwXJjkomhrtFbzSYiv5G50n7oa-Vpb-x-k",
  },

  {
    name: "Accessories",
    desc: "Enhance your experience",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDHIpSZj4ejuh2nslDu1Kx9toxYATf1HL3KOV8oSAjCqqfho9eW14aVOSWB7UAnOk9svKcP6IERsf3RNITdP0CaG0S34iIJVC5Lkujuw9YvRc41J28MYe_w5b2U4m5Xm1M7DbFqRj4ZOK0F4P_cPQWKbhNe9hY75IwMfoynvhAI2bB6LxEbfMbuyhlbMcOZmZ9Bp-8N8TK4GxHbz7u2yjVrFX_FWEAuaMeH8wtCbkNUyI-X4jyBMfofTRydwVuCPZQcq4IlFUM7dwca",
  },

  {
    name: "Cameras",
    desc: "Capture every moment",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200",
  },

  {
    name: "Watches",
    desc: "Smart luxury lifestyle",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200",
  },
];

const Home = () => {
  const [showAll, setShowAll] = useState(false);

  const navigate = useNavigate();

  const featuredProducts = products.slice(0, 4);

  return (
    <div className="mt-16">

      {/* HERO SECTION */}
      <section className="relative h-[700px] flex items-center overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0">

          {/* GRADIENT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent z-10"></div>

          {/* IMAGE */}
          <motion.img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8cEBmtLk3HpTLN0TtcnznGx_T3b9NnNU443HtgHA4B0QJm4vEUkWcfTEWsciom2uGU26peitO6ceedU3bkw9hQRV6LgjqHJ2tHlbESj2-ZBaPS2TYQhH3e7THnOJdX2mpsD8vF1e2EJf5IowxJTiRb_CCXOunJYJtJu_7Ynr1eihCjsNIAMUlfcmBLZRKEN3IUzm9HpOF4RD79dLcA7sQjsu-FxYsRa6YtwelWF45xNiwH3wPWUE9qwOsIFmwDGawR58MJqWFuaRE"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >

            {/* TAG */}
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 text-violet-600 text-sm mb-6">
              Innovation Refined
            </span>

            {/* HEADING */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight italic">
              Next-Gen Tech for <br />
              <span className="text-violet-600 italic">Next-Gen Ideas</span>
            </h1>

            {/* DESCRIPTION */}
            <p className="text-gray-600 mb-10 max-w-lg">
              Experience the pinnacle of engineering and design. Our curated
              collection of premium electronics is built to empower your creative
              journey.
            </p>

            {/* BUTTONS */}
            <div className="flex items-center gap-6">

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 20px 40px rgba(139,92,246,0.35)",
                }}
                onClick={() => navigate("/products")}
                className="bg-violet-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-violet-700 transition active:scale-95"
              >
                Shop the Collection
              </motion.button>

              <button className="flex items-center gap-2 font-semibold text-gray-900 group">
                Learn more
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>

            </div>

          </motion.div>
        </div>

      </section >

      {/* PROMO */}
      < section className="bg-violet-600 py-4" >
        <div className="max-w-7xl mx-auto px-6 flex justify-center items-center gap-3 text-white">

          <FiTruck className="text-lg" />

          <p className="font-medium text-sm md:text-base">
            Free shipping on orders over ₹499. Use code{" "}
            <span className="font-bold">NEXORA10</span>
          </p>

        </div>
      </section >

      {/* CATEGORIES */}
      < section className="py-20 bg-white" >
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Shop by Category
              </h2>

              <p className="text-gray-500">
                Curated essentials for your digital lifestyle.
              </p>
            </div>

            <button
              onClick={() => setShowAll(!showAll)}
              className="text-blue-600 font-semibold hover:underline"
            >
              {showAll ? "Show Less" : "View all"}
            </button>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {(showAll ? categories : categories.slice(0, 3)).map((cat, index) => (
              <div
                key={index}
                onClick={() =>
                  navigate(
                    `/products?category=${cat.name}`
                  )
                }
                className="group relative overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer"
              >

                {/* IMAGE */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                {/* TEXT */}
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-2xl font-semibold mb-1">
                    {cat.name}
                  </h3>

                  <p className="text-white/80 text-sm">
                    {cat.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section >

      {/* FEATURED PRODUCTS */}
      < section className="py-20" >
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="text-center max-w-2xl mx-auto mb-16">

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Innovations
            </h2>

            <p className="text-gray-600">
              The most sought-after devices in our current ecosystem.
            </p>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>
        </div>
      </section >

      {/* BOTTOM SECTION */}
      < section className="py-20 bg-gray-100" >
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* BIG CARD */}
            <div className="md:col-span-2 bg-gray-900 rounded-3xl p-10 text-white flex flex-col justify-center relative overflow-hidden h-[400px]">

              {/* IMAGE */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoH_9UBZKNcrMWELF94reax7kVVJUko-yj-gClU58sfGbqznDMqNOQ9KcVNQSdwSbXuOsw0MpCoyDLAf5D7y3gGMXRFBcQ783Fg_NGB9TLzRhPVUhoLXgdeOsYbbXXoX8jO1A2vBKMgIgaOg_G2LVvt4E3pWvxvreaFVAQPwWDDx6lua2accaMxi4gdzSusqwhbfa7WYBvEX9QuoKr53SJcRLGaf2y-YWGo9amljjYzCXPqG0cOQlWQ7k5hBfRIypMviapgusN7YdR"
                alt="Tech"
                className="absolute top-0 right-0 w-1/2 h-full object-cover opacity-40"
              />

              {/* CONTENT */}
              <div className="relative z-10 max-w-md">

                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Designed for the Creative Edge.
                </h2>

                <p className="text-gray-300 text-lg mb-8">
                  Our hardware is optimized to run the most demanding software with zero latency.
                </p>

                <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
                  Explore Specs
                </button>

              </div>
            </div>

            {/* SMALL CARD */}
            <div className="bg-violet-600 rounded-3xl p-10 text-white flex flex-col justify-between h-[400px]">

              <FiBox className="text-5xl" />

              <div>

                <h3 className="text-2xl font-bold mb-4">
                  Sustainability First.
                </h3>

                <p className="text-white/80">
                  100% recycled aluminum chassis and zero-plastic packaging.
                </p>

              </div>

            </div>

          </div>
        </div>
      </section >


      {/* WHY CHOOSE US */}
      < section className="py-20 bg-gray-50" >

        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="text-center max-w-2xl mx-auto mb-16">

            <span className="text-violet-600 font-semibold">
              Why Choose Nexora
            </span>

            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">
              Built Around Premium Experience
            </h2>

            <p className="text-gray-500">
              We combine cutting-edge technology with seamless customer experience.
            </p>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* CARD 1 */}
            <div className="bg-white rounded-3xl p-8 border hover:shadow-xl transition">

              <div className="w-16 h-16 rounded-2xl bg-violet-100 flex items-center justify-center mb-6">
                <FiTruck className="text-2xl text-violet-600" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Fast Delivery
              </h3>

              <p className="text-gray-500 leading-relaxed">
                Lightning-fast shipping with real-time order tracking and secure packaging.
              </p>

            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-3xl p-8 border hover:shadow-xl transition">

              <div className="w-16 h-16 rounded-2xl bg-violet-100 flex items-center justify-center mb-6">
                <FiShield className="text-2xl text-violet-600" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Secure Payments
              </h3>

              <p className="text-gray-500 leading-relaxed">
                Advanced payment protection with trusted global transaction systems.
              </p>

            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-3xl p-8 border hover:shadow-xl transition">

              <div className="w-16 h-16 rounded-2xl bg-violet-100 flex items-center justify-center mb-6">
                <FiHeadphones className="text-2xl text-violet-600" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                24/7 Support
              </h3>

              <p className="text-gray-500 leading-relaxed">
                Dedicated support team ready to help you anytime, anywhere.
              </p>

            </div>

            {/* CARD 4 */}
            <div className="bg-white rounded-3xl p-8 border hover:shadow-xl transition">

              <div className="w-16 h-16 rounded-2xl bg-violet-100 flex items-center justify-center mb-6">
                <FiRefreshCw className="text-2xl text-violet-600" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Easy Returns
              </h3>

              <p className="text-gray-500 leading-relaxed">
                Hassle-free returns and replacements with customer-first policies.
              </p>

            </div>

          </div>

        </div>

      </section >


      {/* CUSTOMER REVIEWS */}
      < section className="py-20 bg-white" >
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="text-center max-w-2xl mx-auto mb-16">

            <span className="text-violet-600 font-semibold">
              Customer Reviews
            </span>

            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">
              Trusted by Thousands
            </h2>

            <p className="text-gray-500">
              See what our customers say about their Nexora experience.
            </p>

          </div>

          {/* REVIEWS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* REVIEW 1 */}
            <div className="bg-gray-50 rounded-3xl p-8 border hover:shadow-xl transition">

              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                <FiStar fill="currentColor" />
                <FiStar fill="currentColor" />
                <FiStar fill="currentColor" />
                <FiStar fill="currentColor" />
                <FiStar fill="currentColor" />
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                Absolutely premium quality. The delivery was super fast and the product exceeded my expectations.
              </p>

              <div className="flex items-center gap-4">
                <img
                  src="https://i.pravatar.cc/100?img=12"
                  alt="customer"
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Arjun Kumar
                  </h4>

                  <p className="text-sm text-gray-500">
                    Chennai, India
                  </p>
                </div>
              </div>

            </div>

            {/* REVIEW 2 */}
            <div className="bg-gray-50 rounded-3xl p-8 border hover:shadow-xl transition">

              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                <FiStar fill="currentColor" />
                <FiStar fill="currentColor" />
                <FiStar fill="currentColor" />
                <FiStar fill="currentColor" />
                <FiStar fill="currentColor" />
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                Nexora products feel futuristic. Smooth experience from browsing to checkout.
              </p>

              <div className="flex items-center gap-4">
                <img
                  src="https://i.pravatar.cc/100?img=32"
                  alt="customer"
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Priya Sharma
                  </h4>

                  <p className="text-sm text-gray-500">
                    Bangalore, India
                  </p>
                </div>
              </div>

            </div>

            {/* REVIEW 3 */}
            <div className="bg-gray-50 rounded-3xl p-8 border hover:shadow-xl transition">

              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                <FiStar fill="currentColor" />
                <FiStar fill="currentColor" />
                <FiStar fill="currentColor" />
                <FiStar fill="currentColor" />
                <FiStar fill="currentColor" />
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                One of the best tech shopping experiences I've had. Highly recommended.
              </p>

              <div className="flex items-center gap-4">
                <img
                  src="https://i.pravatar.cc/100?img=45"
                  alt="customer"
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Rahul Verma
                  </h4>

                  <p className="text-sm text-gray-500">
                    Hyderabad, India
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section >

    </div >
  );
};

export default Home;