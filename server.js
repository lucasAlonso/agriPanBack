const server = require("./app");
const port = 4000;
const mongoose = require("mongoose");
const db = mongoose.connection;

mongoose.connect(
    "mongodb+srv://agripanelAdmin:evita2020@cluster0-aho4n.gcp.mongodb.net/agripanel0?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("Conectado campeon!");
});

server.listen(port, () => console.log(`server running on port ${port}`));
