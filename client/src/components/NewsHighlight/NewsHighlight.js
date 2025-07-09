import React from "react";
import "./NewsHighlight.css";
import { useNavigate } from "react-router-dom";

const NewsHighlight = ({ mainArticle, sideArticles }) => {
  const navigate = useNavigate();

  const handleMainClick = () => navigate(`/article/${mainArticle._id}`);
  const handleSideClick = (id) => navigate(`/article/${id}`);

  return (
    <div className="news-highlight-container">
      <div className="news-highlight-header">🔴 {mainArticle.category}</div>
      <div className="news-highlight-body">
        <div className="main-article" onClick={handleMainClick}>
          <img src={mainArticle.imageUrl} alt="Main" />
          <div className="main-article-overlay">
            <span>{mainArticle.category.toUpperCase()}</span>
            <h3>{mainArticle.title}</h3>
          </div>
        </div>
        <div className="side-articles">
          {sideArticles.map((article) => (
            <div
              key={article._id}
              className="side-article"
              onClick={() => handleSideClick(article._id)}
            >
              {article.title}
            </div>
          ))}
        </div>
      </div>
      <div className="news-highlight-footer">
        <span>News</span> | <span>Videos</span> | <span>Visuals</span>
      </div>
    </div>
  );
};

export default NewsHighlight;
