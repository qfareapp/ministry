// src/components/Sidebar.js
import React from "react";
import { FaGlobe, FaNewspaper, FaFilm, FaFlask, FaTrophy, FaChartBar, FaHeart, FaMugHot, FaPlayCircle, FaVideo } from "react-icons/fa";

const categories = [
  { name: "Life+Style", icon: <FaHeart /> },
  { name: "India", icon: <FaNewspaper /> },
  { name: "South", icon: <FaMugHot /> },
  { name: "Global", icon: <FaGlobe /> },
  { name: "Business", icon: <FaChartBar /> },
  { name: "All Sports", icon: <FaTrophy /> },
  { name: "Technology", icon: <FaFlask /> },
  { name: "Showbuzz", icon: <FaFilm /> },
  { name: "Newspresso", icon: <FaPlayCircle /> },
  { name: "Specials", icon: <FaMugHot /> },
  { name: "Videos", icon: <FaVideo /> },
  { name: "Short Videos", icon: <FaVideo /> },
];

const Sidebar = () => {
  return (
    <div className="w-[200px] h-screen bg-white shadow-md px-4 py-6 sticky top-0">
      <ul className="space-y-4">
        {categories.map((cat, index) => (
          <li key={index} className="flex items-center space-x-3 text-gray-700 hover:text-red-600 cursor-pointer text-sm font-medium">
            <span className="text-xl">{cat.icon}</span>
            <span>{cat.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
