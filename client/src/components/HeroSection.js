import React from "react";
import { Link } from "react-router-dom";

const HeroSection = ({ article }) => {
  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Left */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {article.title}
          </h2>
          <p className="text-gray-700 mb-6">{article.description}</p>
          <Link
            to={`/article/${article._id}`}
            target="_blank"
            className="inline-block px-6 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition"
          >
            Read Full Article
          </Link>
        </div>

        {/* Image Right */}
        <div>
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-auto rounded shadow-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
