// Function tp hash password
const { hashPassword, compareHashedPassword } = require("../utils/hashPassword.js");
const { UserSchema, mongoose } = require("./Schema.js");

UserSchema.statics.authenticate = (username, password, cb) => {
	User.findOne({ username: username }).exec(function (err, user) {
		if (err) {
			return cb(err);
		} else if (user === null) {
			// Logic for creating a new user when the username doesn't exist in the database

			// Hashed password
			let hash = hashPassword(password);

			//Added new entry to the database
			return User.create(
				{
					username,
					password: hash,
				},
				(error, doc) => {
					if (error) return cb(error);
					return cb(doc);
				}
			);
		}
		// Compares password if a user with the username exist in the database
		if (!compareHashedPassword(password, user.password)) {
			return cb({ message: "Invalid password" });
		}
		// Returns user when username and password match
		return cb(user);
	});
};
const User = mongoose.model("user", UserSchema);

module.exports = { User };
