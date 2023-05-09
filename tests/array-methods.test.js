import { expect, test, describe, vi } from 'vitest'

describe('array-methods', async () => {

    const {carPark, lastCar, firstCar, secondCar, secondLastCar, volvo, volvoIndex, redCars, carNames, longCarNames } = await import('../tasks/array-methods.js')

    test('carPark', () => {
        expect(carPark).toEqual([
            { name: 'Mazda', color: 'pink' },
            { name: 'Audi', color: 'blue' },
            { name: 'Mercedes', color: 'red' },
            { name: 'Skoda', color: 'green' },
            { name: 'Volvo', color: 'yellow' },
            { name: 'Fiat', color: 'red' },
            { name: 'Renault', color: 'white' },
            { name: 'Opel', color: 'orange' },
            { name: 'Toyota', color: 'purple' }
        ])
    })

    test('lastCar', () => {
        expect(lastCar).toEqual({ name: 'Volkswagen', color: 'brown' })
    })

    test('firstCar', () => {
        expect(firstCar).toEqual({ name: 'BMW', color: 'red' })
    })

    test('secondCar', () => {
        expect(secondCar).toEqual({ name: 'Audi', color: 'blue' })
    })

    test('secondLastCar', () => {
        expect(secondLastCar).toEqual({ name: 'Opel', color: 'orange' })
    })

    test('volvo', () => {
        expect(volvo).toEqual({ name: 'Volvo', color: 'yellow' })
    })

    test('volvoIndex', () => {
        expect(volvoIndex).toEqual(4)
    })

    test('redCars', () => {
        expect(redCars).toEqual([
            { name: 'Mercedes', color: 'red' },
            { name: 'Fiat', color: 'red' }
        ])
    })

    test('carNames', () => {
        expect(carNames).toEqual([
            'Mazda',
            'Audi',
            'Mercedes',
            'Skoda',
            'Volvo',
            'Fiat',
            'Renault',
            'Opel',
            'Toyota'
          ])
    })

    test('longCarNames', () => {
        expect(longCarNames).toEqual([ 'Mazda', 'Mercedes', 'Renault', 'Skoda', 'Toyota', 'Volvo' ])
    })
})