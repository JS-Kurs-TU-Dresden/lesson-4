import { expect, test, describe, vi } from 'vitest'

describe('basic-objects', async () => {

    const {cakes, increasePrice, sellCake} = await import('../tasks/in-keyword.js')

    test('cakes', () => {
        expect(cakes).toEqual([
            {
                type: 'Chocolate',
                layers: 4,
                price: 25,
            }, {
                type: 'Vanilla',
                layers: 3,
                price: 18,
            }, {
                type: 'Strawberry',
                price: 32,
            }, {
                type: 'Caramel',
                layers: 1
            }
        ])
    })

    test('sellCake', () => {
        expect(sellCake('Chocolate', 2)).toEqual(50)
        expect(sellCake('Vanilla', 1)).toEqual(18)
        expect(sellCake('Strawberry', 3)).toEqual(96)
        expect(sellCake('Caramel', 1)).toEqual(0)
    })

    test('increasePrice', () => {
        increasePrice(1.5)
        expect(cakes).toEqual([
            {
                type: 'Chocolate',
                layers: 4,
                price: 37.5,
            }, {
                type: 'Vanilla',
                layers: 3,
                price: 27,
            }, {
                type: 'Strawberry',
                price: 48,
            }, {
                type: 'Caramel',
                layers: 1
            }
        ])
    })
})