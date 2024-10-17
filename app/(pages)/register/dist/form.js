"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.RegisterForm = void 0;
var react_1 = require("next-auth/react");
var react_2 = require("react");
exports.RegisterForm = function () {
    var _a = react_2.useState(false), loading = _a[0], setLoading = _a[1];
    var _b = react_2.useState({
        name: "",
        email: "",
        password: ""
    }), formValues = _b[0], setFormValues = _b[1];
    var _c = react_2.useState(""), error = _c[0], setError = _c[1];
    var onSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var res, _a, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    e.preventDefault();
                    setLoading(true);
                    setFormValues({ name: "", email: "", password: "" });
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, fetch("/api/register", {
                            method: "POST",
                            body: JSON.stringify(formValues),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })];
                case 2:
                    res = _b.sent();
                    setLoading(false);
                    if (!!res.ok) return [3 /*break*/, 4];
                    _a = setError;
                    return [4 /*yield*/, res.json()];
                case 3:
                    _a.apply(void 0, [(_b.sent()).message]);
                    return [2 /*return*/];
                case 4:
                    react_1.signIn(undefined, { callbackUrl: "/" });
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _b.sent();
                    setLoading(false);
                    setError(error_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var handleChange = function (event) {
        var _a;
        var _b = event.target, name = _b.name, value = _b.value;
        setFormValues(__assign(__assign({}, formValues), (_a = {}, _a[name] = value, _a)));
    };
    var input_style = "form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";
    return (React.createElement("form", { onSubmit: onSubmit },
        error && (React.createElement("p", { className: "text-center bg-red-300 py-4 mb-6 rounded" }, error)),
        React.createElement("div", { className: "mb-6" },
            React.createElement("input", { required: true, type: "name", name: "name", value: formValues.name, onChange: handleChange, placeholder: "Name", className: "" + input_style })),
        React.createElement("div", { className: "mb-6" },
            React.createElement("input", { required: true, type: "email", name: "email", value: formValues.email, onChange: handleChange, placeholder: "Email address", className: "" + input_style })),
        React.createElement("div", { className: "mb-6" },
            React.createElement("input", { required: true, type: "password", name: "password", value: formValues.password, onChange: handleChange, placeholder: "Password", className: "" + input_style })),
        React.createElement("button", { type: "submit", style: { backgroundColor: "" + (loading ? "#ccc" : "#3446eb") }, className: "inline-block px-7 py-4 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full", disabled: loading }, loading ? "loading..." : "Sign Up")));
};
