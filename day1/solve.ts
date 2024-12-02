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
	const [left, right] = lines[i].split(/\s+/)
	const similarity = rights[left]

	if (similarity) {
		console.log(`${left} appears ${rights[left]} times in right list`)
		ans += (Number(left) * rights[left])
	}
}

console.dir(ans)
