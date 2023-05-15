import { prompt } from '../prompt.js'

// The goal is to create a login system that can login, add, remove, change and list users.
// For that, you will need an array of users. Each user should have a username and a password.
// For ease of use, pre-populate the array with one user: { username: "admin", password: "password" }
//
// The login system should work like this:
//
// 1. When the program starts, the user is prompted to enter a command.
// 2. If the command is "add", the user is prompted to enter a username and password.
// 3. If the command is "login", the user is prompted to enter a username and password.
//    In case that the username and password match log "Logged in successfully", otherwise log "Wrong username or password".
// 4. If the command is "remove", the user is prompted to enter a username.
// 5. If the command is "change", the user is prompted to enter a username and a new username.
// 6. If the command is "list", the user is shown a list of all usernames where each username is on a new line.
// 7. If the command is "exit", the program ends.