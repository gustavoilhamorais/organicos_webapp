require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const connectDb = require("./database/connection");
const authenticateGoogleSheets = require("./google/sheets/authenticate");
// BODY PARSER
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// CORS
app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  app.use(cors());
  next();
});
// SESSION
app.use(
  session({
    secret: "0rg4n1c_0S",
    reserve: true,
    saveUninitialized: true,
  })
);
// DATABASE
connectDb();
// ROUTES
app.use("/user", require("./routes/user.routes"));
app.use("/pld", require("./routes/scrapping.routes"));
// SERVER
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server listening on port ${PORT} 🚀`));