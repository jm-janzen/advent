import { readFileSync } from 'fs'


const parseInput = (input: string) => {
    let i = 0
    const output: number[][] = []
    for (const line of input.split("\n")) {
        output[i] = []
        for (const entry of line.split(/\s+/)) {
            output[i].push(Number(entry))
        }
        i++
    }
    return output
}

const reports = parseInput(readFileSync('./input.txt', 'utf-8'))

// The levels are either all increasing or all decreasing.
// Any two adjacent levels differ by at least one and at most three.

let safeReports = 0
for (const i in reports) {
    const report = reports[i]
    console.dir(report)

    let j = 1
    let safe = true
    let sign: string
    while (j < report.length && safe) {
        const level = report[j]
        const prevLevel = report[j - 1]
        const diff = Math.abs(level - prevLevel)
        if (diff > 3 || diff < 1) {
            console.log(`Report #${i} is unsafe '${level}' and '${prevLevel}' out of range (${diff})`)
            safe = false
        } else if (sign === undefined){
            // Figure out init sign
            if (level > prevLevel) {
                sign = '+'
            } else {
                sign = '-'
            }
        } else {
            // Figure out if sign changed
            if (sign == '-') {
                if (level > prevLevel) {
                    console.log(`Report #${i} is unsafe '${level}' and '${prevLevel}' change from - to +`)
                    safe = false
                }
            } else {
                if (prevLevel > level) {
                    console.log(`Report #${i} is unsafe '${level}' and '${prevLevel}' change from + to -`)
                    safe = false
                }
            }
        }

        j++
    }

    if (safe){
        console.log(`Report #${i} is safe`)
        safeReports++
    }
}

console.log(`Answer: ${safeReports}`)

