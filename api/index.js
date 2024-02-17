const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const User = require("./models/User");
const jwt = require("jsonwebtoken");
const cors = require("cors");

dotenv.config();
const app = express();
mongoose.connect(process.env.MONGODB_URL);
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    const createdUser = await User.create({ username, password });
    jwt.sign(
      { userId: createdUser._id },
      process.env.JWT_SECRET_KEY,
      {},
      (error, token) => {
        if (error) throw error;
        res.cookie("token", token).status(201).json({
          _id: createdUser._id,
          username: createdUser.username,
          message: "User is created successfully",
        });
      }
    );
  } catch (error) {
    if (error) throw error;
  }
});

app.listen(4000, () => {
  console.log("Listening on port 4000...");
});
