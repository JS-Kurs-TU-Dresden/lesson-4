const cakes = [
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
        // should not be sold
    }
]

function sellCake(type, amount) {
    for(let index in cakes) {

        const cake = cakes[index]
        if('price' in cake === false) {
            continue
        }

        if(cake.type === type) {
            return cake.price * amount
        }
    }

    return 0
}

function increasePrice(amount) {
    for(let index in cakes) {
        const cake = cakes[index]

        if('price' in cake === false) {
            continue
        }

        cake.price = cake.price * amount
    }
}













// Please do not change the code below. This code is used for testing your solution.

export {
    cakes,
    sellCake,
    increasePrice
}