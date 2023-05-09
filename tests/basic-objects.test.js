import { expect, test, describe, vi } from 'vitest'

describe('basic-objects', async () => {

    const {person, personAge, likesReading, personBirthYear, cleanPerson} = await import('../tasks/basic-objects.js')

    test('person', () => {
        expect(person).toEqual({
            name: 'John',
            age: 31,
            hobbies: ['reading', 'music', 'movies'],
            birthday: expect.any(Function),
            getBirthYear: expect.any(Function),
            "likes reading": true,
            height: 180
        })
    })

    test('personAge', () => {
        expect(personAge).toEqual(30)
    })

    test('likesReading', () => {
        expect(likesReading).toEqual(true)
    })

    test('personBirthYear', () => {
        expect(personBirthYear).toEqual(1992)
    })

    test('cleanPerson', () => {
        cleanPerson();
        expect(person).toEqual({
            name: 'John',
            age: 31,
            birthday: expect.any(Function),
            getBirthYear: expect.any(Function),
            height: 180
        })
    })
})