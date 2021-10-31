"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appControllers = exports.HttpRequest = void 0;
const axios_1 = __importDefault(require("axios"));
const HelloWorldController_1 = require("../controllers/HelloWorldController");
const API_KEY = "";
exports.HttpRequest = axios_1.default.create({
    baseURL: "",
    timeout: 3000,
    headers: { token: API_KEY, "Content-Type": "application/json" },
});
// app controller collections;
exports.appControllers = [HelloWorldController_1.HelloWorldController];
