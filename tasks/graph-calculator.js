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