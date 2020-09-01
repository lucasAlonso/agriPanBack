const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let crudExpte = new Schema({
    expte_name: {
        type: String,
    },
    expte_type: {
        type: String,
    },
    expte_number: {
        type: Number,
    },
    expte_date: {
        type: String,
    },
    expte_descrition: {
        type: Number,
    },
    expte_active: {
        type: Boolean,
    },
});

module.exports = mongoose.model("expte_agrimensura", crudExpte);
