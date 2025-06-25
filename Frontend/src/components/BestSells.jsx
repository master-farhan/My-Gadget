import React from "react";
import { useNavigate } from "react-router-dom";

const BestSells = () => {
  const navigate = useNavigate();

  return (
    <section className="relative my-20 -ml-[1%] overflow-hidden">
      <div className="relative w-[100%]">
        <img
          src="https://img.freepik.com/free-photo/top-view-virtual-reality-headset-white-headphones_23-2148912739.jpg"
          alt="Best Selling Banner"
          className="w-full h-[180px] md:h-[280px] lg:h-[340px] object-cover rounded-xl"
        />

        <div className="absolute inset-0 bg-black/10 flex flex-col justify-center items-center gap-4 text-white text-center">
          <h2 className="text-2xl text-gray-800 md:text-3xl font-semibold">
            Best Selling Products
          </h2>
          <p className="text-sm text-gray-800 md:text-base">
            Discover our most popular gadgets chosen by customers!
          </p>
          <button
            onClick={() => navigate("/products")}
            className="mt-2 bg-white text-[#78B04F] hover:bg-[#78B04F] hover:text-white font-medium px-5 py-2 rounded transition-all"
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSells;
