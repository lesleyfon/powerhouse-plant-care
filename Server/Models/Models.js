// Function tp hash password
const { hashPassword } = require("../utils/hashPassword.js");
const { UserSchema, mongoose } = require("./Schema.js");

UserSchema.statics.authenticate = (username, password, cb) => {
	User.findOne({ username: username }).exec(function (err, user) {
		if (err) {
			return cb(err);
		} else if (user === null) {
			// Hashed password
			let hash = hashPassword(password);

			User.insertMany(
				{
					username,
					password: hash,
				},
				(error, doc) => {
					if (error) return cb(error);
					console.log(doc);
					return cb(doc);
				}
			);
		}

		return cb(user);
	});
};
const User = mongoose.model("user", UserSchema);

module.exports = { User };
