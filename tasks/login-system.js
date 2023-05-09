import { prompt } from '../prompt.js'

const users = [
    {
        username: "admin",
        password: "password"
    }
]


while (true) {
    const choice = prompt("What do you want to do? (add, login, remove, change, list, exit)")

    if (choice === "add") {
        const username = prompt("Enter username")
        const password = prompt("Enter password")
        addUser(username, password)

    } else if (choice === "login") {
        const username = prompt("Enter username")
        const password = prompt("Enter password")
        const user = login(username, password)
        if (user) {
            console.log("Logged in successfully")
        } else {
            console.log("Wrong username or password")
        }

    } else if (choice === "remove") {
        const username = prompt("Enter username")
        removeUser(username)

    } else if (choice === "change") {
        const username = prompt("Enter username")
        const newUsername = prompt("Enter new username")
        changeUsername(username, newUsername)

    } else if (choice === "exit") {
        break
    } else if (choice === "list") {
        listUsers()
    }
}

function addUser(username, password) {
  users.push({ username, password })
}

function login(username, password) {
    return users.find(user => user.username === username && user.password === password)
}

function removeUser(username) {
    const index = users.findIndex(user => user.username === username)
    users.splice(index, 1)
}

function changeUsername(username, newUsername) {
    const user = users.find(user => user.username === username)
    user.username = newUsername
}

function listUsers() {
    for (const user of users) {
        console.log(user.username)
    }
}