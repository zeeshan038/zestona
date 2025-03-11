import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useSelector } from "react-redux";
const Navbar = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const [isOpen, setIsOpen] = useState(false);
  console.log("total quantity", totalQuantity)
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
          <Link  to={'/'} className="text-2xl font-bold">
            Zestona
          </Link>
         
        </div>
        <div className="flex gap-8 relative">
          <div>
            <Link to={'/cart'}>
              <HiOutlineShoppingBag className="cursor-pointer text-[22px]" />
            </Link>
            {totalQuantity > 0 && (
              <span className="absolute -top-3 -right-2  text-[13px] w-5 h-5 flex items-center justify-center rounded-full">
                {totalQuantity}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu (Sliding from Right) */}
      <div className={`fixed top-0 left-0 z-50 text-white h-full w-64 bg-[#0c3241] shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}>
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes size={24} />
        </button>

        <ul className="flex flex-col items-center space-y-6 mt-16">
          <Link to={'/'} onClick={() => setIsOpen(false)} className="block text-lg hover:text-gray-300">Home</Link>
          <Link to={'/products'} onClick={() => setIsOpen(false)} className="block text-lg hover:text-gray-300">Products</Link>
          <Link to={'/contact'} onClick={() => setIsOpen(false)} className="block text-lg hover:text-gray-300">Contact</Link>
          <Link to={'/bundles'} onClick={() => setIsOpen(false)} className="block text-lg hover:text-gray-300">Bundles</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
