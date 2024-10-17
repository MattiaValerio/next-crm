"use strict";
exports.__esModule = true;
exports.saltAndHashPassword = void 0;
var bcryptjs_1 = require("bcryptjs");
function saltAndHashPassword(password) {
    var saltRounds = 10; // Adjust the cost factor according to your security requirements
    var salt = bcryptjs_1["default"].genSaltSync(saltRounds); // Synchronously generate a salt
    var hash = bcryptjs_1["default"].hashSync(password, salt); // Synchronously hash the password
    return hash; // Return the hash directly as a string
}
exports.saltAndHashPassword = saltAndHashPassword;
