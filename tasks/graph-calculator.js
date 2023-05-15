// The goal of this task is to create a canvas object that can draw a function on a graph.
// The showCanvas method is already implemented. It will show the canvas in the console.

// What has to be implemented are the following 3 methods:
// 1. clearPixels() - this method should clear the canvas and set all pixels to 0.
//                    If the pixels array is empty, it should create a 2D array of 0s with the size of xLength and yLength.
//
// 2. drawFunction(func) - this method should draw a function on the canvas. The function is passed as an argument.
//                         The function takes an x value and returns a y value.
//                         The function should draw the function on the canvas by setting the pixels to 1.
//
// 3. fillCube(x, y, size) - this method should fill a square on the canvas with 1s.
//                           The square should start at the x and y coordinates and have the size of the size argument.
//                           The square should be filled with 1s.

const canvas = {
    yLength: 20,
    xLength: 40,
    pixels: [],
    clearPixels() {
        this.pixels = []
        for (let i = 0; i < this.xLength; i++) {
            this.pixels.push([])
            for (let j = 0; j < this.yLength; j++) {
                this.pixels[i].push(0)
            }
        }
    },
    drawFunction(func) {
        this.clearPixels()

        for (let i = 0; i < this.xLength; i++) {
            const y = Math.floor(func(i))
            this.pixels[i][y] = 1
        }
    },
    fillCube(x, y, size) {
        this.clearPixels()
        for (let i = x; i < x + size; i++) {
            for (let j = y; j < y + size; j++) {
                this.pixels[i][j] = 1
            }
        }
    },
    showCanvas() {
        let canvas = ""

        for (let j = this.yLength - 1; j >= 0; j--) {
            canvas += String(j).padStart(2, " ") + " "
            for (let i = 0; i < this.xLength; i++) {

                if (this.pixels[i][j] === 0) {
                    canvas += "⋅"
                } else {
                    canvas += "*"
                }
            }

            canvas += "\n"
        }

        canvas += "   0    5    1    1    2     2   3    3\n"
        canvas += "             0    5    0     5   0    5"

        console.log(canvas)
    }
}

canvas.clearPixels()
canvas.drawFunction((x) => {
    return (x / 4 - 5) ** 2
})

canvas.showCanvas()


















// Please do not change the code below. This code is used for testing your solution.

export {
    canvas
}