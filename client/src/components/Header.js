import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-red-600 shadow-md">
      {/* Left: Logo + Title */}
      <div className="flex items-center space-x-3">
        {/* Bigger Logo */}
        <img src="/assets/puzzle.png" alt="Logo" className="h-12 w-12" />

        {/* Title */}
        <h1 className="text-2xl font-bold text-white whitespace-nowrap">
          Ministry of Missed Opportunities
        </h1>
      </div>

      {/* Right: Nav links */}
      <nav className="space-x-6 text-white text-sm font-medium">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/submit" className="hover:underline">Submit</Link>
        <Link to="/policy" className="hover:underline">Policy</Link>
      </nav>
    </header>
  );
};

export default Header;
