import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState({ title: "", content: "" });

  useEffect(() => {
    axios.get(`/api/articles/${id}`).then(res => {
      setArticle(res.data);
    });
  }, [id]);

  const handleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.patch(`/api/articles/${id}`, article);
    navigate("/");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Edit Article</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={article.title}
          onChange={handleChange}
          className="w-full border mb-3 p-2"
        />
        <textarea
          name="content"
          value={article.content}
          onChange={handleChange}
          rows={10}
          className="w-full border mb-3 p-2"
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditArticle;
