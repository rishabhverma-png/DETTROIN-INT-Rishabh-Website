import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        {/* Logo */}

        <div className="flex items-center gap-3">
          <img
            src="https://www.vasantvalley.org/wp-content/themes/vasant/images/logo-vasant-valley.svg"
            alt="logo"
            className="h-14"
          />

          <div>
            <h2 className="text-xl font-bold text-slate-900">Vasant Valley</h2>

            <p className="text-sm text-gray-500">School</p>
          </div>
        </div>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex gap-8 font-medium">
          <li>
            <Link to="/" className="hover:text-yellow-400 duration-300">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-yellow-400 duration-300">
              About
            </Link>
          </li>

          <li>
            <Link
              to="/academics"
              className="hover:text-yellow-400 duration-300"
            >
              Academics
            </Link>
          </li>

          <li>
            <Link to="/gallery" className="hover:text-yellow-400 duration-300">
              Gallery
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-yellow-400 duration-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Button */}

        <button className="hidden lg:block bg-blue-700 hover:bg-blue-900 transition text-white px-6 py-3 rounded-full">
          Admissions Open
        </button>

        {/* Mobile Menu */}

        <button
          className="lg:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ?
            <HiX />
          : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <ul className="flex flex-col p-6 gap-5">
            <li>Home</li>
            <li>About</li>
            <li>Academics</li>
            <li>Facilities</li>
            <li>Gallery</li>
            <li>Contact</li>

            <button className="bg-blue-700 text-white py-3 rounded-lg">
              Admissions Open
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
