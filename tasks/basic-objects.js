// Replace the (___) with the correct values to make the code work.
// For more info, see: https://javascript.info/object

const CURRENT_YEAR = 2023;

const person = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'music', 'movies'],
    // Each time this method is called, the age property should increase by 1
    birthday() {
        ___
    },
    // This method should return the birth year of the person
    getBirthYear() {
        ___
    },
    "likes reading": true,
};

// Access the correct value from the person object
const personAge = ___;
const likesReading = ___;

// Call the birthday method on the person object
___

// Get the birth year of the person
const personBirthYear = ___;

// Add a height property to the person object, which value you assign does not matter
___

// The function should delete the hobbies and "likes reading" properties from the person object
function cleanPerson() {
    ___
    ___
}















// Please do not change the code below. This code is used for testing your solution.

export {
    person,
    personAge,
    likesReading,
    personBirthYear,
    cleanPerson
}