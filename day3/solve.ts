const input = 'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))'

const output = ((input: string): number => {
    let answer = 0
    const muls = input.match(/mul\(\d+,\d+\)/g)
    for (const mul of muls!) {
        const op = mul.match(/[a-z]+/)![0]
        const [a, b] = mul.match(/\d+/g)!

        if (op === 'mul') {
            answer += Number(a) * Number(b)
        }
    }

    return answer
})(input)

console.log('---')
console.log(output)
