"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const { getItems, getItem } = require('./request');
router.get('/items', (req, res) => {
    const query = req.query.q;
    const response = getItems(query)
        .then((data) => res.json(data));
});
router.get('/item/:id', (req, res) => {
    const query = req.params.id;
    const response = getItem(query)
        .then((data) => res.json(data));
});
module.exports = router;
//# sourceMappingURL=api.js.map