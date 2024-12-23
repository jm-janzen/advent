import { readFileSync } from 'fs'


const input = readFileSync('./input.txt', 'utf-8')

const output = ((input: string): number => {
    let answer = 0
    let active = true
    const muls = input.match(/(do\(\)|don't\(\)|mul\(\d+,\d+\))/g)
    for (const mul of muls!) {
        const op = mul.match(/[a-z']+/)![0]
        if (op.startsWith('do')) {
            if (op === 'do') active = true
            if (op === "don't") active = false
            continue
        }
        if (!active) continue

        const [a, b] = mul.match(/\d+/g)!

        if (op === 'mul') {
            answer += Number(a) * Number(b)
        }
    }

    return answer
})(input)

console.log('---')
console.log(output)
