import React from "react";
import { useNavigate } from "react-router-dom";

const ArticleCard = ({ article }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-start p-4 border rounded hover:shadow transition">
      {/* Left Side - Text Content */}
      <div className="flex-1 pr-4">
        <p className="text-xs uppercase text-red-600 font-bold mb-1">
          {article.category || "General"}
        </p>

        {/* ✅ HEADLINE LINK */}
        <h2 className="text-lg font-bold text-gray-900 hover:text-red-600 leading-snug">
          <a
            href={`/article/${article._id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {article.title}
          </a>
        </h2>

        <p className="text-sm text-gray-600 mt-1">
          {article.body?.slice(0, 120)}...
        </p>

        {/* Actions */}
        <div className="mt-3 flex gap-4 text-sm text-gray-500">
          <button className="hover:text-red-600">👍 Like</button>
          <button className="hover:text-red-600">💬 Comment</button>
          <button className="hover:text-red-600">🔗 Share</button>
          <button
            onClick={() => navigate(`/admin/edit/${article._id}`)}
            className="hover:text-blue-600 ml-auto"
          >
            ✏️ Edit
          </button>
        </div>
      </div>

      {/* Right Side - Thumbnail */}
      <img
        src={article.imageUrl || "https://via.placeholder.com/100"}
        alt={article.title}
        className="w-[100px] h-[100px] object-cover rounded"
      />
    </div>
  );
};

export default ArticleCard;
