const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readLine = () => input[currentLine++];

const tests = readLine();

const calculateMaxBeautifulPlates = (numberOfStacks, stackLength, maxPlates, stacks) => {
	let res = 0;
	for (let i = 0; i < stacks.length; i++) {
		const stack = stacks[i];
		const maxEl = Math.max(...stack);
		const indexOfMaxEl = stack.indexOf(maxEl);
		for (let j = 0; j < stack.length; j++) {
			const el = stack[j];
			if (j <= indexOfMaxEl && maxPlates > 0) {
				res += el;
				maxPlates--;
			} else if (maxPlates > 0) {
				if (i === stacks.length - 1) {
					res += el;
					maxPlates--;
				}
			} else {
				break;
			}
		}
	}
	return res;
};

for (let i = 0; i < +tests; i++) {
	const [ numberOfStacks, stackLength, maxPlates ] = readLine().split(' ');
	const stacks = [];
	for (let j = 0; j < +numberOfStacks; j++) {
		const beauties = readLine().split(' ').map((el) => +el);
		stacks.push(beauties);
	}
	const res = calculateMaxBeautifulPlates(+numberOfStacks, +stackLength, +maxPlates, stacks);
	console.log(`Case #${i}: ${res}`);
}
