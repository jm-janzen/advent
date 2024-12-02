import { readFileSync } from 'fs'

const f = readFileSync('./input.txt', 'utf-8')
const lines = f.split("\n")

let rights = {}
for (const i in lines) {
	if (lines[i] == '') { continue }

	const [, right] = lines[i].split(/\s+/)
	if (rights[right] === undefined) {
		rights[right] = 0
	}

	rights[right]++
}

let ans = 0
for (const i in lines) {
	const [left] = lines[i].split(/\s+/)
	const similarity = rights[left]

	if (similarity) {
		ans += (Number(left) * rights[left])
	}
}

console.dir(ans)
