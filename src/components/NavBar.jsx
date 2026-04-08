import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black border-4 border-black p-2">
      <div className="flex items-center justify-between md:justify-around">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="h-16 w-16 md:h-24 md:w-24 cursor-pointer"
          />
        </Link>

        {/* Hamburger button*/}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Links */}
        <div
          className={`
            text-white font-serif
            flex flex-col md:flex-row md:items-center
            md:gap-8  /* مسافة بين الروابط */
            absolute md:static top-full left-0 w-full md:w-auto bg-black md:bg-transparent
            overflow-hidden transition-all duration-300
            ${isOpen ? "max-h-96 p-4" : "max-h-0 md:max-h-full md:p-0"}
          `}
        >
          <Link
            className="hover:text-red-500 transition duration-300 py-2 md:py-0 text-center"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-red-500 transition duration-300 py-2 md:py-0 text-center"
            to="/about"
          >
            About
          </Link>
          <Link
            className="hover:text-red-500 transition duration-300 py-2 md:py-0 text-center"
            to="/team"
          >
            Team
          </Link>
          <Link
            className="hover:text-red-500 transition duration-300 py-2 md:py-0 text-center"
            to="/courses"
          >
            Courses
          </Link>
          <Link
            className="hover:text-red-500 transition duration-300 py-2 md:py-0 text-center"
            to="/register"
          >
            Registration
          </Link>
          <Link
            className="hover:text-red-500 transition duration-300 py-2 md:py-0 text-center"
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
