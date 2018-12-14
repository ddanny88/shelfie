require("dotenv");
const express = require("express");
const { json } = require("body-parser");
const controller = require("./controller");
const PORT = 3000;
const app = express();

app.use(json());




app.listen(PORT, console.log(`Listening on port${PORT}...`));