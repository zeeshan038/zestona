import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">

        {/* Logo */}
        <div className="font-bold">
          <span className="text-4xl">Zestona</span>

        </div>
        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl hover:text-pink-500 transition" />
          </a>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-4">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
