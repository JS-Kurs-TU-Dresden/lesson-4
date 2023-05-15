// All methods that can be used on arrays: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#array_methods_and_empty_slots
// For more info, see: https://javascript.info/array-methods

const carPark = [
    { name: 'BMW', color: 'red' },
    { name: 'Audi', color: 'blue' },
    { name: 'Mercedes', color: 'red' },
    { name: 'Skoda', color: 'green' },
    { name: 'Volvo', color: 'yellow' },
    { name: 'Fiat', color: 'red' },
    { name: 'Renault', color: 'white' },
    { name: 'Opel', color: 'orange' },
]

// Add 2 more cars to the car park
carPark.push({ name: 'Toyota', color: 'purple' }, { name: 'Volkswagen', color: 'brown' });

// Remove the last car from the car park
const lastCar = carPark.pop();

// Remove the first car from the car park
const firstCar = carPark.shift();

// Add a new car to the beginning of the car park
carPark.unshift({ name: 'Mazda', color: 'pink' });

// Get the second and second last car from the car park using the at() method
const secondCar = carPark.at(1);
const secondLastCar = carPark.at(-2);

// Find the car with the name 'Volvo'
const volvo = carPark.find(car => car.name === 'Volvo');

// Find the index of the car with the name 'Volvo'
const volvoIndex = carPark.findIndex(car => car.name === 'Volvo');

// Find all cars with the color 'red'
const redCars = carPark.filter(car => car.color === 'red');

// Get a list of all the car names
const carNames = carPark.map(car => car.name);

// Get a list of all car names that have more than 4 letters sorted alphabetically
const longCarNames = carPark.filter(car => car.name.length > 4).map(car => car.name).sort();

















// Please do not change the code below. This code is used for testing your solution.

export {
    carPark,
    lastCar,
    firstCar,
    secondCar,
    secondLastCar,
    volvo,
    volvoIndex,
    redCars,
    carNames,
    longCarNames
}