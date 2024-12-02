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

foo = foo.sort()
bar = bar.sort()

console.log(foo[0], bar[0])

let sum: number = 0
for (const i in foo) {
	const diff = Math.abs(foo[i] - bar[i])
	//console.log(`The diff between ${foo[i]} and ${bar[i]} is ${diff}`)

	sum += diff
}

console.dir(sum)
