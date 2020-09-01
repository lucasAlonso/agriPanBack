const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const exptes_routes = require("./routes/expte-routes");

app.use(cors({ origin: "*" }), bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/exptes", exptes_routes);

module.exports = app;
