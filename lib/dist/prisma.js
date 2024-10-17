"use strict";
exports.__esModule = true;
exports.db = void 0;
var client_1 = require("@prisma/client");
exports.db = global.prisma || new client_1.PrismaClient();
if (process.env.NODE_ENV !== "production")
    global.prisma = exports.db;
