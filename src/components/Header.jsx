import header from "../assets/header.jpg";

import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="relative">
      <img
        src={header}
        alt="header"
        className="w-full h-[300px] md:h-[500px] lg:h-[700px] object-cover"
      />

      <div className="font-[oswald] absolute inset-0 flex flex-col justify-center pl-4">
        <h1 className="">
          <span className="block text-lg sm:text-xl md:text-2xl text-white tracking-widest">
            Welcome to IRONFURY Gym
          </span>

          <span className="block text-2xl sm:text-3xl md:text-4xl text-red-700 mt-2">
            PROFESSIONAL SPORTS CLUB
          </span>

          <span className="block text-sm sm:text-base md:text-lg text-white mt-4 tracking-wide">
            reach your fitness goals
          </span>
        </h1>
        <Link
          to="/register"
          className="mt-6 bg-red-600 text-white px-8 py-4 w-fit hover:bg-red-500 transition rounded"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
export default Header;
