require("dotenv");
const express = require("express");
const PORT = process.env.PORT || 5050;
const app = express();
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (request, response) => {
	response.send("Welcome gome");
});

app.listen(PORT, console.log(`App listening to http://localhost:${PORT}`));
