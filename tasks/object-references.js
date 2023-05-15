// Replace the (___) with the correct values to make the code work.
// For more info, see: https://javascript.info/object-copy

const song = {
    name: 'Thunder',
    artist: 'Imagine Dragons',
    album: 'Evolve',
    releaseYear: 2017,
}

// Implement a function that takes in an object and returns the clone.
// The clone should be a new object with the same properties and values as the song object.
function cloneSong(song) {
    const clone = {};
    for (const key in song) {
        clone[key] = song[key];
    }
    return clone;
}

// Set the songReference variable to reference the song object.
const songReference = song;

// Set the songClone variable to be a clone of the song object.
const songClone = cloneSong(song);

// Change the name of the song object to 'Believer'.
songReference.name = 'Believer';














// Please do not change the code below. This code is used for testing your solution.

export {
    song,
    songReference,
    songClone,
    cloneSong
}