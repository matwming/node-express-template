"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = void 0;
const config_1 = require("../config/config");
const check = (req, res) => {
    let requestData = req.body;
    config_1.HttpRequest.post(``, { ...requestData })
        .then((response) => {
        console.log(response);
    })
        .catch((e) => {
        console.log('there is an error', e.response.data);
        return res.json(e.response.data);
    });
};
exports.check = check;
exports.default = exports.check;
