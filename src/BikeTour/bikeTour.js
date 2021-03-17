const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];
const tests = readMe();

const numberOfPeaks = (numberOfCheckPoints, heights) => {
	let res = 0;

	return res;
};

for (let i = 1; i <= +tests; i++) {
	const numberOfCheckPoints = readMe();
	const heights = readMe().split('').map((el) => +el);
	const res = numberOfPeaks(+numberOfCheckPoints, heights);
	console.log(`Case #${i}: `, res);
}
