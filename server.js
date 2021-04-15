require("dotenv");
const express = require("express");
const PORT = process.env.PORT || 5050;
const app = express();
const bodyParser = require("body-parser");

const { router } = require("./Server/Routes/Routes.js");
// Mongoes Config
const mongoose = require("mongoose");

// Connecting to the Database
mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/", router);
app.get("/", (request, response) => {
	response.send("Welcome Home");
});

app.listen(PORT, console.log(`App listening to http://localhost:${PORT}`));
