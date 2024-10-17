"use strict";
exports.__esModule = true;
var form_1 = require("./form");
function RegisterPage() {
    return (React.createElement(React.Fragment, null,
        React.createElement("section", { className: "bg-ct-blue-600 min-h-screen pt-20" },
            React.createElement("div", { className: "container mx-auto px-6 py-12 h-full flex justify-center items-center" },
                React.createElement("div", { className: "md:w-8/12 lg:w-5/12 bg-white px-8 py-10" },
                    React.createElement(form_1.RegisterForm, null))))));
}
exports["default"] = RegisterPage;
