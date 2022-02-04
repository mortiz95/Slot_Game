"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Machine {
    constructor() {
        this.value1 = -1;
        this.value2 = -1;
        this.value3 = -1;
        this.winType = "No Win";
        this.hasBonus = 0;
    }
    play() {
        var award = 0;
        var numbers = [];
        for (let i = 0; i < 3; i++) {
            if (!award) {
                var randomNum = Math.floor(Math.random() * (6 - 0) + 0);
                if (randomNum == 0) {
                    award = 1;
                }
                numbers[i] = randomNum;
            }
            else {
                var randomNum = Math.floor(Math.random() * (6 - 1) + 1);
                numbers[i] = randomNum;
            }
        }
        var num1 = numbers[0];
        var num2 = numbers[1];
        var num3 = numbers[2];
        if (num1 == num2 && num1 == num3 && num2 == num3) {
            this.winType = "Big Win";
        }
        else {
            if (num1 == num2 || num1 == num3 || num2 == num3) {
                this.winType = "Small Win";
            }
            else {
                this.winType = "No Win";
            }
        }
        this.value1 = num1;
        this.value2 = num2;
        this.value3 = num3;
        this.hasBonus = award;
    }
    getFirstValue() {
        return "SYM" + this.value1.toString() + ".png";
    }
    getSecondValue() {
        return "SYM" + this.value2.toString() + ".png";
    }
    getThirdValue() {
        return "SYM" + this.value3.toString() + ".png";
        ;
    }
    getAward() {
        return this.hasBonus;
    }
    getWinType() {
        return this.winType;
    }
}
exports.default = Machine;
