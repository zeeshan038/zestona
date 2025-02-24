import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="">
      <div className="container mx-auto px-4 py-3 flex justify-between md:justify-around items-center">

        <div>
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <Link to={'/'} className="block text-lg hover:text-gray-300">Home</Link>
            <Link to={'/products'} className="block text-lg hover:text-gray-300">Products</Link>
            <Link to={'/contact'} className="block text-lg hover:text-gray-300">Contact</Link>

          </ul>
        </div>

        <div>
          <a href="#" className="text-2xl font-bold">MyLogo</a>
        </div>


        <div className="flex gap-14">

          <h1>Cart</h1>
          <h1>Cart</h1>
        </div>
      </div>



      {/* Mobile Menu (Sliding from Right) */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-blue-700 shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}>
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes size={24} />
        </button>

        <ul className="flex flex-col items-center space-y-6 mt-16">
          <Link to={'/'} className="block text-lg hover:text-gray-300">Home</Link>
          <Link to={'/products'} className="block text-lg hover:text-gray-300">Products</Link>
          <Link to={'/contact'} className="block text-lg hover:text-gray-300">Contact</Link>
          <Link to={'/bundles'} className="block text-lg hover:text-gray-300">Bundles</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
