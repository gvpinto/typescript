"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const charactersCollection_1 = __importDefault(require("./charactersCollection"));
const numbersCollection = new NumbersCollection_1.NumbersCollection([-1, 4, 10, 3, 0, -5]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
numbersCollection.sort();
console.log(numbersCollection.data);
const charactersCollection = new charactersCollection_1.default('Xaaya');
charactersCollection.sort();
console.log(charactersCollection.data);
