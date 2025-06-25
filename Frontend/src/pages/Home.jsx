import React from "react";
import HeroSlider from "../components/HeroSlider"; // Adjust the path based on your folder structure
import { Link } from "react-router-dom";
import Features from "../components/Features";
import PopulerProduct from "../components/PopulerProduct";
import BestSells from "../components/BestSells";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-white text-gray-800">
      {/* Hero Section */}
      <HeroSlider />

      {/* Features */}
      <Features />

      {/* Best Sells */}
      <BestSells />

      {/* Product Cards Preview */}
      <PopulerProduct />

      {/* Offer Section */}
      <section className="bg-[#f7ffe6] py-16 text-center px-5">
        <h2 className="text-3xl font-bold mb-4">Special Offer</h2>
        <p className="mb-6">
          Up to 50% off on selected gadgets. Limited time only!
        </p>
        <Link
          to="/products"
          className="bg-[#78B04F] text-white px-6 py-2 rounded-md font-semibold hover:bg-green-700 transition"
        >
          Explore Deals
        </Link>
      </section>

      {/* Subscribe */}
      <section className="py-16 px-5 md:px-20 text-center bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="mb-6">
          Get updates on the latest arrivals and exclusive offers
        </p>
        <form className="flex justify-center gap-2 flex-wrap">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded border w-[250px] focus:outline-none focus:ring-2 focus:ring-[#78B04F]"
          />
          <button
            type="submit"
            className="bg-[#78B04F] text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Testimonial */}
      <Testimonial />
    </div>
  );
};

export default Home;
