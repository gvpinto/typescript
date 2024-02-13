interface Reportable {
    summary(): string;
};

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `The car is ${this.name}`;
    }
};

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
};


const printSummary = (item: Reportable): void => {
    console.log(`Nane: ${item.summary()}`);

};

printSummary(oldCivic);
printSummary(drink);



