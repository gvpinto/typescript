"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const charactersCollection_1 = __importDefault(require("./charactersCollection"));
// const numbersCollection = new NumbersCollection([-1, 4, 10, 3, 0, -5]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
const charactersCollection = new charactersCollection_1.default('Xaaya');
const sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
