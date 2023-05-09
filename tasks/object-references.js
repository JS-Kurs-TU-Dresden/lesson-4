const song = {
    name: 'Thunder',
    artist: 'Imagine Dragons',
    album: 'Evolve',
    releaseYear: 2017,
}

function cloneSong(song) {
    const clone = {};
    for (const key in song) {
        clone[key] = song[key];
    }
    return clone;
}

const songReference = song;
const songClone = cloneSong(song);

songReference.name = 'Believer';












// Please do not change the code below. This code is used for testing your solution.

export {
    song,
    songReference,
    songClone,
    cloneSong
}