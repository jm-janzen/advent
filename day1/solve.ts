import { readFileSync } from 'fs'

const f = readFileSync('./input.txt', 'utf-8')
const lines = f.split("\n")

let foo = []
let bar = []
for (const i in lines) {
	if (lines[i] == '') { continue }

	const [left, right] = lines[i].split(/\s+/)

	foo.push(Number(left))
	bar.push(Number(right))
}
