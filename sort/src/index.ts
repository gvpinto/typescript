import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([-1, 4, 10, 3, 0, -5]);
const sorter = new Sorter(numbersCollection);

sorter.sort();

console.log(numbersCollection.data);