import React, { useEffect, useState } from "react";
import axios from "../api/axiosCofig"; // adjust path as needed
import { Link } from "react-router-dom";

const Features = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const res = await axios.get("/products");
        // Optional: filter or sort for "featured" products
        const featured = res.data.slice(0, 4); // Show first 4
        setProducts(featured);
      } catch (err) {
        console.error("Failed to fetch featured products:", err);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <section className="py-16 px-5 mt-20 md:px-10 lg:px-[5%]">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
        Featured Products
      </h2>
      <p className="text-center text-gray-600 lg:max-w-[80vw] mx-auto mb-10">
        Discover our hand-picked selection of the most popular and best-selling
        gadgets. These customer favorites offer top quality and unbeatable
        value—perfect for upgrading your tech game.
      </p>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-100 rounded hover:shadow-lg transition duration-300 overflow-hidden"
          >
            <Link to={`/product/details/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full object-cover rounded-t"
              />
            </Link>

            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 text-gray-800">
                {product.title.length > 40
                  ? product.title.slice(0, 40) + "..."
                  : product.title}
              </h3>
              <p className="text-[#78B04F] font-bold mb">
                ${parseFloat(product.price).toFixed(2)}
              </p>
              <Link
                to={`/product/details/${product.id}`}
                className="inline-block text-sm text-[#78B04F] hover:underline text-end w-full"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
