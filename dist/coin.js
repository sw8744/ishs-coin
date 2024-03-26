"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Coin {
    constructor(name, defaultPrice, maxDelta) {
        this.name = name;
        this.defaultPrice = defaultPrice;
        this.maxDelta = maxDelta;
        this.currentValue = defaultPrice;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.defaultPrice;
    }
    changePrice() {
        let delta = Math.floor(Math.random() * this.maxDelta - this.maxDelta / 3);
        this.currentValue += delta;
        console.log(this.currentValue);
        console.log(delta);
        console.log('');
    }
}
exports.default = Coin;
