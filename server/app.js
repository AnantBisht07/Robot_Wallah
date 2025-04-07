require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// require("dotenv").config();

const path = require("path");
const cookieParser = require("cookie-parser");


const authRoutes = require("./routes/authRoutes"); // Import auth routes;

const app = express();



const _dirname = path.resolve(); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));;
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: ['https://www.robotwallah.com', 'https://robot-wallah-1.onrender.com'], // Match frontend URL
  credentials: true,
}));



// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Error:", err));


app.use("/api/v1/auth", authRoutes); // Register auth routes

// app.get("/", (req, res) => res.send("Hello, World!"));

// serve frontend files
app.use(express.static(path.join(_dirname, "/01start/dist")));
app.get('*', (_, res) => {
  res.sendFile(path.join(_dirname, "/01start/dist/index.html"));
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));






