const bcrypt = require("bcryptjs");
const BCRYPT_HASHING_STRING = process.env.BCRYPT_HASHING_STRING;
const BCRYPT_HASHING_SALT_ROUNDS = process.env.BCRYPT_HASHING_SALT_ROUNDS;

/**
 *
 * @param {string} password User password to be hashed
 * @returns returns a hashed password
 */
function hashPassword(password) {
	const hashedPassword = bcrypt.hashSync(password, BCRYPT_HASHING_SALT_ROUNDS);
	return hashedPassword;
}

/**
 *
 * @param {string} userPassword Password send from post request by user
 * @param {string} hashedPassword Hashed password saved to the database on user signup
 * @returns boolean
 */
function compareHashedPassword(userPassword, hashedPassword) {
	const result = bcrypt.compareSync(userPassword, hashedPassword);
	return result;
}
module.exports = { hashPassword, compareHashedPassword };
