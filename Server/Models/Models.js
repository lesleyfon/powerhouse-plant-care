// Function tp hash password
const { hashPassword, compareHashedPassword } = require("../utils/hashPassword.js");
const { UserSchema, mongoose } = require("./Schema.js");

UserSchema.statics.authenticate = (username, password, cb) => {
	User.findOne({ username: username }).exec(function (err, user) {
		if (err) {
			return cb(err);
		} else if (user === null) {
			// Hashed password
			let hash = hashPassword(password);
			console.log("user", hash);
			return User.insertMany(
				{
					username,
					password: hash,
				},
				(error, doc) => {
					console.log(doc);
					if (error) return cb(error);
					return cb(doc);
				}
			);
		}

		if (!compareHashedPassword(password, user.password)) {
			return cb({ message: "Invalid password" });
		}
		return cb(user);
	});
};
const User = mongoose.model("user", UserSchema);

module.exports = { User };
