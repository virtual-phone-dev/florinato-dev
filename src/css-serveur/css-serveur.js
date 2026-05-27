const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "..")));

app.listen(1000, () => {
    console.log("css-serveur disponible ici http://localhost:1000");
});
