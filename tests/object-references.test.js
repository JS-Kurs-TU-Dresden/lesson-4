import { expect, test, describe, vi } from 'vitest'

describe('object-references', async () => {

    const {song, cloneSong, songClone, songReference} = await import('../tasks/object-references.js')

    test('song', () => {
        expect(song).toEqual({
            name: 'Believer',
            artist: 'Imagine Dragons',
            album: 'Evolve',
            releaseYear: 2017,
        })
    })

    test('cloneSong', () => {
        expect(cloneSong(song)).toEqual(song)
        expect(cloneSong(song)).not.toBe(song)
    })

    test('songClone', () => {
        expect(songClone).toEqual({
            name: 'Thunder',
            artist: 'Imagine Dragons',
            album: 'Evolve',
            releaseYear: 2017,
        })
    })

    test('songReference', () => {
        expect(songReference).toEqual(song)
    })
})