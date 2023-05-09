import { expect, test, describe, vi } from 'vitest'

describe('basic-arrays', async () => {

    const {first, last, sum, sumResult, numbers} = await import('../tasks/basic-arrays.js')

    test('first', () => {
        expect(first).toEqual(1)
    })

    test('last', () => {
        expect(last).toEqual(9)
    })

    test('sumResult', () => {
        expect(sumResult).toEqual(45)
    })

    test('sum', () => {
        expect(sum([1, 2, 3])).toEqual(6)
        expect(sum([11,12,-1,12])).toEqual(34)
    })

    test('numbers', () => {
        expect(numbers).toEqual([1, 5, 3, 4, 2, 6, 7, 8, 9])
    })
})