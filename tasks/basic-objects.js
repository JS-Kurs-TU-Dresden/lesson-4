// Replace the (___) with the correct values to make the code work.
// For more info, see: https://javascript.info/object

const CURRENT_YEAR = 2023;

const person = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'music', 'movies'],
    birthday() {
        this.age++;
    },
    getBirthYear() {
        return CURRENT_YEAR - this.age;
    },
    "likes reading": true,
};

// Access the correct value from the person object
const personAge = person.age;
const likesReading = person["likes reading"];

// Call the birthday method on the person object
person.birthday();

// Get the birth year of the person
const personBirthYear = person.getBirthYear();

// Add a height property to the person object
person.height = 180;

// The function should delete the hobbies and "likes reading" properties from the person object
function cleanPerson() {
    delete person.hobbies;
    delete person["likes reading"];
}















// Please do not change the code below. This code is used for testing your solution.

export {
    person,
    personAge,
    likesReading,
    personBirthYear,
    cleanPerson
}