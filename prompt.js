import fs, { writeSync } from 'fs'

export function prompt(message) {
    writeSync(1, String(message))
    let s = ''
    while (true) {
        const b = new Uint8Array(1)
        fs.readSync(0, b, 0, 1)
        if (b[0] === 13) {
            break
        }
        s += String.fromCharCode(b[0])
    }
    return s.trim()
}