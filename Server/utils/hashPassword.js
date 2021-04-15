const bcrypt = require("bcryptjs");
const BCRYPT_HASHING_STRING = process.env.BCRYPT_HASHING_STRING;
const BCRYPT_HASHING_SALT_ROUNDS = process.env.BCRYPT_HASHING_SALT_ROUNDS;

function hashPassword(password) {
	const hashedPassword = bcrypt.hashSync(password, BCRYPT_HASHING_SALT_ROUNDS);
	return hashedPassword;
}

module.exports = { hashPassword };
