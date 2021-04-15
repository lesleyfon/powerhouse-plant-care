const { UserSchema, mongoose } = require("./Schema.js");

UserSchema.statics.authenticate = (username, password, cb) => {
	User.findOne({ username: username }).exec(function (err, user) {
		if (err) {
			return cb(err);
		} else if (!user) {
			var error = new Error("User not found");
			error.status = 401;
			return cb(error);
		}
		cb(user);
	});
};
const User = mongoose.model("user", UserSchema);

module.exports = { User };
