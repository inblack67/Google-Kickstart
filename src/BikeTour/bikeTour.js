const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];
const tests = readMe();

const numberOfPeaks = (numberOfCheckPoints, heights) => {
	let res = 0;

	for (let i = 0; i < numberOfCheckPoints; i++) {
		const prev = heights[i - 1];
		const curr = heights[i];
		const next = heights[i + 1];
		if (curr > prev && curr > next) {
			if (i !== 0 && i !== heights.length - 1) {
				res++;
			}
		}
	}

	return res;
};

for (let i = 1; i <= +tests; i++) {
	const numberOfCheckPoints = readMe();
	const heights = readMe().split(' ');
	const numberHeights = heights.map((el) => +el);
	const res = numberOfPeaks(+numberOfCheckPoints, numberHeights);
	console.log(`Case #${i}: ${res}`);
}


// const fs = `
// 4
// 3
// 10 20 14
// 4
// 7 7 7 7
// 5
// 10 90 20 90 10
// 3
// 10 3 10`;

// const input = fs.trim().split('\n');