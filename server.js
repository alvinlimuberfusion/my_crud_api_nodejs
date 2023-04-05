const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");

const connectDB = require("./database/connection");

const app = express();

app.use(cors());

dotenv.config({ path: "./environments/config.env" });
const PORT = process.env.PORT || 8080;

//log requests
app.use(morgan("tiny"));

//mongoDB connection
connectDB();

// parse request to body-parser
app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.send("CRUD Application");
});

// load routers
app.use("/", require("./routes/router"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


exports.app