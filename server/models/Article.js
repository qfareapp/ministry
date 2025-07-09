const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: String,
  location: String,
  date: Date,
  body: String,
  category: String,
  imageUrl: String,
});

module.exports = mongoose.model("Article", articleSchema);
