"use client";
"use strict";
exports.__esModule = true;
exports.ProfileButton = exports.LogoutButton = exports.RegisterButton = exports.LoginButton = void 0;
var react_1 = require("next-auth/react");
var link_1 = require("next/link");
exports.LoginButton = function () {
    return (React.createElement("button", { style: { marginRight: 10 }, onClick: function () { return react_1.signIn(); } }, "Sign in"));
};
exports.RegisterButton = function () {
    return (React.createElement(link_1["default"], { href: "/register", style: { marginRight: 10 } }, "Register"));
};
exports.LogoutButton = function () {
    return (React.createElement("button", { style: { marginRight: 10 }, onClick: function () { return react_1.signOut(); } }, "Sign Out"));
};
exports.ProfileButton = function () {
    return React.createElement(link_1["default"], { href: "/profile" }, "Profile");
};
