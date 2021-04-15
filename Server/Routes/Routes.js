const express = require("express");
const { User } = require("../Models/Models");
const router = express.Router();

router.post("/api/login", (request, response) => {
	const { username, password } = request.body;
	console.log(username, password);
	if (!username || !password) {
		let error = { message: "Please Provide Username and Password", status: 401 };

		return response.status(401).send(error);
	}

	User.authenticate(username, password, (user) => {
		if (user.message === "User not found") {
			let error = { message: "Wrong email or password", status: 401 };
			return response.status(401).json(error);
		} else if (user.message === "Invalid password") {
			let error = { message: "Invalid password", status: 401 };
			return response.status(401).json(error);
		}

		return response.status(200).send(user);
	});
});

module.exports = { router };
