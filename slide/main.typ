#import "./theme.typ": *

// --- Colors ---
#let jsYellow = rgb("f7df1e")
#let jsBlack = rgb("#222")
#let jsWhite = rgb("#ffffff")
#let subdued = jsWhite.darken(40%)


#set page(
    fill: jsBlack,
)

#set text(
    font: "Montserrat",
    fill: jsWhite,
)

#show: slides.with(
    author: "Nils Twelker",
    title: "Introcution to JavaScript",
    short-title: "JavaScript Lesson 4",
    date: "March 2023",
    color: jsYellow,
)

#show raw: it => [
    #box(it, fill: jsBlack.lighten(10%), outset: (x: 4pt, y:6pt), radius: 5pt)
]

#let hint = (it, full: false) => [
    #if full [
        #block([#text("tipp", fill: jsBlack)], fill: jsYellow.lighten(10%), outset: (x: 8pt, y:8pt), radius: (top:5pt))
        #v(-14pt)
        #block(it, fill: jsBlack.lighten(10%), outset: (x: 8pt, y:8pt), radius: (bottom: 5pt, top-right: 5pt))
    ] else [
        #text([Tipp: ], fill: jsYellow.lighten(10%))
        #it
    ]
]

== What learned we last Week?

- Functions #raw("function add(a, b) { return a + b; }", lang: "js")
    - (Default) Arguments, Return Values, Scope, Hoisting
- Arrow Functions #raw("let add = (a, b) => a + b;", lang: "js")
- Function Expressions #raw("let add = function(a, b) { return a + b; }", lang: "js")
- Basic Arrays #raw("let myList = [1, 2, 3, 4]", lang: "js")
- Accessing Arrays #raw("myList[0] // 1", lang: "js")

== Goals of this week

#columns(2, [
- Objects
    - Accessing Properties
    - Adding Properties
    - Removing Properties
    - "this" Keyword
    - "in" Operator
    - "For in" loop
    - Object references
    - Garbage Collection
#colbreak()
- Methods on Primitives
- More about Arrays
    - Arrays are Objects
    - Array Methods
])

== Objects

```js
const player = {
    health: 30,
    color: "red",
    running: false,
    sayHello: function() { console.log("Hello!") }
}
```

== Accessing Properties

```js
const player = {
    health: 30,
    "player color": "red",
    running: false,
    sayHello: function() { console.log("Hello!") }
}
player.health // 30
player["player color"] // "red"
player.running // false
player.sayHello() // "Hello!"
```

== Adding Properties

```js
const player = {
    health: 30,
    color: "red",
    running: false
}

console.log(player.name) // undefined
player.name = "Paul"
console.log(player.name) // "Paul"
```

== Removing Properties

```js
const player = {
    health: 30,
    color: "red",
    running: false
}

console.log(player.color) // "red"
delete player.color
console.log(player.color) // undefined
```

== "this" Keyword

#columns(2, [
    
```js
const player = {
    health: 30,
    color: "red",
    sayColor: function() {
        console.log(this.color)
    }
    takeDamage() {
        this.health -= 10
    }
}
```

```js
player.sayColor() // "red"
player.takeDamage()

console.log(player.health)
// 20
```
])

== The "in" Operator

```js
const player = {
    health: 30,
    color: "red",
    running: false
}

console.log("color" in player) // true
console.log("name" in player) // false
```

== The "For in" loop

#grid(
    columns: (2fr, 1fr),
    [
```js
const player = {
    health: 30,
    color: "red",
    running: false
}

for (let key in player) {
    console.log(key, player[key])
}
```
    ],
    [
Console output:
```js
// health 30
// color red
// running false
```
    ]
)

== Object references

#grid(
    columns: (2fr, 1fr),
    [
```js
const player = {
    health: 30,
    color: "red",
    running: false
}

const player2 = player
player2.health = 20

console.log(player.health) // 20
```
    ], [
```js
const a = 1
const b = a

b = 2
console.log(a) // 1
console.log(b) // 2
```
    ]
)

== Garbage Collection

#columns(2, [
```js
let player = {
    health: 30,
    color: "red",
    running: false
}

player = null
```

#colbreak()

- `player` object is not accessible anymore
- Garbage Collector will remove it from memory
])

== Methods on Primitives

```js
const myString = "Hello World"
myString.length // 11
myString.toUpperCase() // "HELLO WORLD"
myString.toLowerCase() // "hello world"

const myNumber = 123
myNumber.toString() // "123"
myNumber.toFixed(2) // "123.00"

true.toString() // "true"
```

== Arrays are Objects

```js
const myArray = ["a", "b", "c", "d"]

const myFakeArray = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    length: 4
}
console.log(typeof myArray) // "object"
```

== Arrays are Objects

```js
const myArray = ["a", "b", "c", "d"]

const notEmpty = '0' in myArray // true
myArray[0] // "a"
myArray[10] = "k"

for(let index in myArray) {
    console.log(index, myArray[index])
}
// 0 "a", 1 "b", 2 "c", 3 "d", 10 "k"
```

== Methods on Arrays (Stack)

```js
const myArray = ["a", "b", "c", "d"]

myArray.push("e") // 5

console.log(myArray) // ["a", "b", "c", "d", "e"]

const last = myArray.pop() // last = "e"

console.log(myArray) // ["a", "b", "c", "d"]
```

== Methods on Arrays (Queue)

```js
const myArray = ["a", "b", "c", "d"]

myArray.push("e") // 5

console.log(myArray) // ["a", "b", "c", "d", "e"]

const first = myArray.shift() // first = "a"

console.log(myArray) // ["b", "c", "d", "e"]
```

== Methods on Arrays (at)

```js
const myArray = ["a", "b", "c", "d"]

myArray.at(0) // "a"
myArray.at(1) // "b"

myArray[myArray.length - 1] // "d"

myArray.at(-1) // "d"
myArray.at(-2) // "c"
```

== Tasks and Points
Goal is to get 100 Points.
#columns(2, [
- `basic-arrays` (25 Points)
- `basic-functions` (25 Points)
- `default-arguments` (25 Points)
- `expressions-arrows` (25 Points)
- `return-values` (25 Points)
- `shop` (50 Points)
- `tic-tac-toe` (50 Points)
])