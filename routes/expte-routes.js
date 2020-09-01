const express = require("express");
const ExpteController = require("../controllers/expte-controller");
const api = express.Router();

api.route("/").get(ExpteController.getExptes);
api.route("/:id").get(ExpteController.getExpteById);
api.route("/add").post(ExpteController.addExpte);
api.route("/update/:id").post(ExpteController.postExpteUpdate);
api.route("/delete/:id").delete(ExpteController.deleteExpte);

module.exports = api;
