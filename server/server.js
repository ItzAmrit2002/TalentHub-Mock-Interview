const express = require("express");
const { connectDB } = require("./utils/db");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const {connectPassport} = require("./utils/Provider");
dotenv.config();

const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3000', // or your client origin
  credentials: true
}));
const port = 8000;
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: "false" }));

connectPassport();

//import routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

//import middleware
const authMiddleware = require("./middlewares/authMiddleware");


app.get("/", authMiddleware, async(req, res) => {
	res.send("Hello, World!");
});

//connect to db
connectDB();

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
