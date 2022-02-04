"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const machine_1 = __importDefault(require("../classes/machine"));
const router = express_1.Router();
router.route('/create')
    .get((req, res) => {
    const machine = new machine_1.default();
    machine.play();
    let num1 = machine.getFirstValue();
    let num2 = machine.getSecondValue();
    let num3 = machine.getThirdValue();
    let award = machine.getAward();
    let winType = machine.getWinType();
    var luckyValues = [
        { val1: num1, val2: num2, val3: num3, bonus: award, winType: winType }
    ];
    res.render('play/create', { values: luckyValues });
});
exports.default = router;
