import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/articles/${id}`)
      .then((res) => {
        setArticle(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!article) return <p className="text-center py-10">Article not found.</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-8">{new Date(article.date).toLocaleDateString()}</p>
      <img
        src={article.image}
        alt={article.title}
        className="w-full max-h-[400px] object-cover rounded mb-8"
      />
      <div className="prose prose-lg">
        {/* If the content includes HTML use dangerouslySetInnerHTML */}
        {article.body ? (
  <div dangerouslySetInnerHTML={{ __html: article.body }} />
) : (
  <p>No content available.</p>
)}
      </div>
    </div>
  );
};

export default ArticleDetail;
