import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#78B04F] text-white pt-10 pb-6 px-5 md:px-10 lg:px-[5%]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-b border-white/20 pb-10">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold mb-2">My Gadget</h2>
          <p className="text-sm">
            We bring the best tech gadgets directly to your doorstep. Trusted by thousands of customers.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/products" className="hover:underline">Products</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/login" className="hover:underline">Login</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@mygadget.com</li>
            <li>Phone: +880 1234-567890</li>
            <li>Address: Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-black transition"><FaFacebook /></a>
            <a href="#" className="hover:text-black transition"><FaTwitter /></a>
            <a href="#" className="hover:text-black transition"><FaInstagram /></a>
            <a href="#" className="hover:text-black transition"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm pt-5 text-white/80">
        &copy; {new Date().getFullYear()} My Gadget. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
