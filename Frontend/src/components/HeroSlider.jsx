import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    title: "Welcome to My Gadget",
    subtitle: "Discover the latest gadgets & exclusive offers",
    img: "https://mygadget.com.bd/wp-content/uploads/2024/08/Neutral-Modern-Elegant-Watch-Instagram-Post_20240803_170801_0000.webp",
    ctaLink: "/products",
    ctaText: "Shop Now",
  },
  {
    title: "Upgrade Your Tech",
    subtitle: "Explore cutting-edge gadgets for everyday life",
    img: "https://mygadget.com.bd/wp-content/uploads/2024/08/White-Red-Modern-New-Product-Headphone-Instagram-Post_20240803_183049_0000.webp",
    ctaLink: "/products",
    ctaText: "Browse Products",
  },
  {
    title: "Exclusive Deals",
    subtitle: "Save big on the gadgets you love",
    img: "https://mygadget.com.bd/wp-content/uploads/2024/09/20240907_152202-1.webp",
    ctaLink: "/products",
    ctaText: "Check Offers",
  },
];

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="relative w-full min-h-[50vh] lg:min-h-[105vh] flex flex-col lg:flex-row items-start overflow-hidden">
      {/* Left content for desktop */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="hidden lg:flex flex-col justify-center px-10 lg:px-[5%] w-1/2 h-full mt-50 text-gray-800"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Welcome to My Gadget
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-6 max-w-md text-gray-700 italic tracking-wide"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Smart and futuristic.
          <br />
          Your choice, our loyalty.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            to="/products"
            className="w-fit hover:bg-[#78B04F] border border-[#78B04F] text-[#78B04F] hover:text-white px-6 py-3 rounded-md font-semibold transition duration-300"
          >
            Shop Now
          </Link>
        </motion.div>
      </motion.div>

      {/* Right slider */}
      <div className="w-full lg:w-1/2 lg:pr-[5%] relative">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div className="relative  w-full aspect-square rounded-b overflow-hidden">
                {/* Blurred background */}
                <motion.img
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1 }}
                  src={slide.img}
                  alt={slide.title}
                  className="absolute top-0 left-0 w-full aspect-square object-cover filter blur-[12px] scale-110"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Foreground image */}
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="relative w-full  object-cover rounded-b"
                />

                {/* Mobile content */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="lg:hidden relative z-10 h-full flex flex-col justify-center items-center text-center px-5 text-white"
                >
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-md md:text-lg mb-6">{slide.subtitle}</p>
                  <Link
                    to={slide.ctaLink}
                    className="inline-block bg-[#78B04F] hover:bg-green-700 px-6 py-3 rounded-md font-semibold transition"
                  >
                    {slide.ctaText}
                  </Link>
                </motion.div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSlider;
