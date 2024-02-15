import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";
import CharactersCollection from "./charactersCollection";

// const numbersCollection = new NumbersCollection([-1, 4, 10, 3, 0, -5]);
// const sorter = new Sorter(numbersCollection);

// sorter.sort();

// console.log(numbersCollection.data);


const charactersCollection = new CharactersCollection('Xaaya');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);