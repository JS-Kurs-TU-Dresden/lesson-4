import { expect, test, describe, vi } from 'vitest'

vi.mock('../prompt.js', () => {
    let counter = 0
    const responses = [
        "login", "admin", "password",
        "add", "user", "pass",
        "list",
        "login", "user", "pass",
        "change", "user", "newuser",
        "list",
        "login", "newuser", "pass",
        "remove", "newuser",
        "login", "newuser", "pass",
        "list",
        "exit"
    ]

    return {
        prompt: () => {
            if (counter >= responses.length) throw new Error("Too many prompts")
            return responses[counter++]
        }
    }
})

describe('login-system', async () => {

    const log = vi.spyOn(console, 'log')

    await import('../tasks/login-system.js')

    const calls = log.calls.flat()

    test('logging in as admin', () => {
        expect(calls[0]).toEqual("Logged in successfully")
    })

    test('adding user', () => {
        expect(calls[1]).toEqual("admin")
        expect(calls[2]).toEqual("user")
        expect(calls[3]).toEqual("Logged in successfully")
    })

    test('changing username', () => {
        expect(calls[4]).toEqual("admin")
        expect(calls[5]).toEqual("newuser")
        expect(calls[6]).toEqual("Logged in successfully")
    })

    test('removing user', () => {
        expect(calls[7]).toEqual("Wrong username or password")
    })

    test('get list of users', () => {
        expect(calls[8]).toEqual("admin")
    })
})