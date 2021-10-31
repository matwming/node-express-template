"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const check_1 = require("../controllers/check");
const router = (0, express_1.Router)();
/**
 * @method Get
 * @header
 * @return
 */
router.get('/', (req, res) => res.send('<h1>This is nodejs hello world get request</h1>'));
/**
 * @method Post
 * @header
 * @param
 * @return
 */
router.post('/hello-world', check_1.check);
exports.default = router;
