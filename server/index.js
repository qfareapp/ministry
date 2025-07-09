const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const articleRoutes = require("./routes/articleRoutes");
app.use("/api/articles", articleRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ MongoDB connected");
  app.listen(5000, () => console.log("🚀 Server running on port 5000"));
})
.catch((err) => console.error("❌ DB connection error:", err));
