import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminForm from "./pages/AdminForm";
import ArticleDetail from "./pages/ArticleDetail";
import Header from "./components/Header";       // 👈 New header component
import Sidebar from "./components/Sidebar";     // 👈 Category sidebar
import About from "./pages/About";
import EditArticle from "./pages/EditArticle";
function App() {
  return (
    <Router>
      {/* Header spans full width */}
      <Header />

      {/* Below header: category + content side by side */}
      <div className="flex">
        <Sidebar />
        <div className="flex-1 overflow-y-auto px-4 py-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminForm />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin/edit/:id" element={<EditArticle />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
