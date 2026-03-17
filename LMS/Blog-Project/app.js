require("dotenv").config();

const express = require("express");
const app = express();

const connectDB = require("./config/db");

const cookieParser = require("cookie-parser");

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));

app.set("view engine", "ejs");

const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");

app.use(authRoutes);
app.use(blogRoutes);

app.listen(process.env.PORT, () => {

    console.log("Server Running");

})