"use client";
"use strict";
exports.__esModule = true;
exports.ProfileButton = exports.LogoutButton = exports.RegisterButton = exports.LoginButton = void 0;
var react_1 = require("next-auth/react");
var link_1 = require("next/link");
exports.LoginButton = function () {
    return (React.createElement("button", { className: "border px-2", onClick: function () { return react_1.signIn(); } }, "Sign in"));
};
exports.RegisterButton = function () {
    return (React.createElement(link_1["default"], { className: "border text-center px-2", href: "/register" }, "Register"));
};
exports.LogoutButton = function () {
    return (React.createElement("button", { className: "border px-2", onClick: function () { return react_1.signOut(); } }, "Sign Out"));
};
exports.ProfileButton = function () {
    return React.createElement(link_1["default"], { className: "border text-center px-2", href: "/profile" }, "Profile");
};
