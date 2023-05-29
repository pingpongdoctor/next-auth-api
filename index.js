require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const { connectDB } = require("./db/db");
const loginRoute = require("./routes/loginRoute");
const PORT = process.env.PORT || 8000;

app.set("trust proxy", 1);
app.use(cors());
app.use(express.json());
app.use(helmet());

connectDB();

app.use("/login", loginRoute);

app.listen(PORT, (req, res) => {
  console.log(`The server is listening to the port http://localhost:${PORT}`);
});
