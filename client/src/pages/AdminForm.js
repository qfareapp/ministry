import React, { useState } from "react";
import axios from "axios";

const AdminForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    date: "",
    category: "",
    imageUrl: "",
    body: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/articles", formData);
      setSuccess(true);
      setFormData({
        title: "",
        location: "",
        date: "",
        category: "",
        imageUrl: "",
        body: "",
      });
    } catch (err) {
      console.error(err);
      alert("Failed to create article");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">🛠️ Create New Article</h2>

      {success && <p className="text-green-600 mb-4">✅ Article submitted successfully!</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" placeholder="Title" className="w-full p-2 border rounded" value={formData.title} onChange={handleChange} required />
        <input name="location" placeholder="Location" className="w-full p-2 border rounded" value={formData.location} onChange={handleChange} required />
        <input name="date" type="date" className="w-full p-2 border rounded" value={formData.date} onChange={handleChange} required />
        <input name="category" placeholder="Category (e.g. Transport, Health)" className="w-full p-2 border rounded" value={formData.category} onChange={handleChange} required />
        <input name="imageUrl" placeholder="Image URL" className="w-full p-2 border rounded" value={formData.imageUrl} onChange={handleChange} />
        <textarea name="body" rows="6" placeholder="Article Body" className="w-full p-2 border rounded" value={formData.body} onChange={handleChange} required />

        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
          Submit Article
        </button>
      </form>
    </div>
  );
};

export default AdminForm;
