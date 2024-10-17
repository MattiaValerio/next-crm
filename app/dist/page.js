"use strict";
exports.__esModule = true;
var AuthButtons_1 = require("./components/forms/AuthButtons");
function Home() {
    return (React.createElement(React.Fragment, null,
        React.createElement("main", { style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"
            } },
            React.createElement("div", { className: "flex gap-2 " },
                React.createElement(AuthButtons_1.LoginButton, null),
                React.createElement(AuthButtons_1.RegisterButton, null),
                React.createElement(AuthButtons_1.LogoutButton, null),
                React.createElement(AuthButtons_1.ProfileButton, null)))));
}
exports["default"] = Home;
