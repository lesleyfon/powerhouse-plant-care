const express = require("express");
const { User } = require("../Models/Models");
const router = express.Router();

router.post("/api/login", (request, response) => {
	const { username, password } = request.body;

	if (!username || !password) {
		let error = { message: "Please Provide Username and Password", status: 401 };

		return response.send(error);
	}
	User.authenticate(username, password, (user) => {
		if (user.message === "User not found") {
			let error = { message: "Wrong email or password", status: 401 };
			return response.json(error);
		}
		return response.send(user);
	});
});

module.exports = { router };
