const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const tests = readMe();

const calculateMaxHouses = (numberOfHouses, prices, budget) => {
	let max = 0;
	const sortedPrices = [ ...prices ].sort((a, b) => a - b);
	for (let i = 0; i < numberOfHouses; i++) {
		const price = sortedPrices[i];
		if (budget >= price) {
			budget -= price;
			max++;
		}
	}
	return max;
};

for (let i = 0; i < +tests; i++) {
	const [ numberOfHouses, budget ] = readMe().split(' ');
	const prices = readMe().split(' ').map((el) => +el);
	const res = calculateMaxHouses(+numberOfHouses, prices, +budget);
	console.log(`Case #${i + 1}: `, res);
}
