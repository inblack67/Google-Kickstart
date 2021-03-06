const fs = require('fs');

const calculateSumOfElements = (arr) => arr.reduce((a, b) => a + b, 0);

const getMaxBeauty = (arr1, arr2, maxPlates) => {
	let res = 0;
	let j = arr1.length;

	while (j > 0) {
		let newSet = [ ...arr1.slice(0, j) ];
		for (let k = 0; k < arr1.length; k++) {
			if (newSet.length === maxPlates) {
				const sum = calculateSumOfElements(newSet);
				if (sum > res) {
					res = sum;
				}
			} else {
				const restSet = arr2.slice(0, maxPlates - newSet.length);
				newSet = [ ...newSet, ...restSet ];
			}
		}
		j--;
	}

	return res;
};

const calculateMaxBeautifulPlates = (numberOfStacks, stackLength, maxPlates, stacks) => {
	let res = 0;
	let count = 0;

	for (let i = 0; i < stacks.length; i++) {
		const stack = stacks[i];
		const nextStack = stacks[i + 1];
		if (nextStack) {
			const totalBeauty = getMaxBeauty(stack, nextStack, maxPlates);
			if (totalBeauty > res) {
				res = totalBeauty;
			}
		} else if (stacks.length > 2 && count === 0) {
			const totalBeauty = getMaxBeauty(stack, stacks[0], maxPlates);
			if (totalBeauty > res) {
				res = totalBeauty;
			}
			count++;
		} else {
			break;
		}
	}
	return res;
};

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
let currentLine = 0;
const readLine = () => input[currentLine++];
const tests = readLine();

for (let i = 0; i < +tests; i++) {
	const [ numberOfStacks, stackLength, maxPlates ] = readLine().split(' ');
	const stacks = [];
	for (let j = 0; j < +numberOfStacks; j++) {
		const beauties = readLine().split(' ').map((el) => +el);
		stacks.push(beauties);
	}
	const res = calculateMaxBeautifulPlates(+numberOfStacks, +stackLength, +maxPlates, stacks);
	console.log(`Case #${i + 1}: ${res}`);
}
