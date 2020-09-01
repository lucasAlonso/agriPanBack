const expte = require("../models/expte-model");
const expteModel = require("../models/expte-model");

const getExptes = (req, res) => {
    expteModel.find((err, results) => {
        if (err) console.log(err);
        else res.json(results);
    });
};

const getExpteById = (req, res) => {
    let id = req.params.id;
    expteModel.findById(id, (err, result) => {
        if (err) console.log(err);
        else res.json(result);
    });
};

const addExpte = (req, res) => {
    let list = new expteModel(req.body);
    list.save()
        .then((list) => {
            res.status(200).json({ list: "Expte created" });
        })
        .catch((err) => {
            res.status(400).send("Adding failed");
        });
};

const postExpteUpdate = (req, res) => {
    expteModel.findById(req.params.id, (err, data) => {
        if (!data) res.status(404).send("Expte not found");
        else {
            data.expte_name = req.body.expte_name;
            data.expte_type = req.body.expte_type;
            data.expte_number = req.body.expte_number;
            data.expte_date = req.body.expte_date;
            data.expte_descrition = req.body.expte_descrition;
            data.expte_active = req.body.expte_active;

            data.save()
                .then((data) => {
                    res.json("Expte updated!");
                })
                .catch((err) => {
                    res.status(400).send("Update isn't possible");
                });
        }
    });
};

const deleteExpte = (req, res) => {
    expteModel.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) return res.status(500).send("There was a problem deleting the Expte.");
        res.status(200).send(`Expte ${data.expte_name} was deleted`);
    });
};

module.exports = {
    deleteExpte,
    postExpteUpdate,
    addExpte,
    getExpteById,
    getExptes,
};
