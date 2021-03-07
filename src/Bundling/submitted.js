const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
let currentLine = 0;
const readLine = () => input[currentLine++];
const tests = readLine();

const calculateScore = (s1, s2) => {
	let final = '';
	for (let i = 0; i < s1.length; i++) {
		const el = s1[i];
		if (el === s2[i]) {
			final += el;
		}
	}

	return { score: final.length, str: final };
};

const getScore = (group) => {
	let res = 0;
	let final = '';
	let count = 0;
	for (let i = 0; i < group.length; i++) {
		const el = group[i];
		const nextEl = group[i + 1];

		if (nextEl) {
			const { score, str } = calculateScore(el, nextEl);
			if (score > res) {
				final = str;
				res = score;
			}
		} else if (count === 0) {
			const { score, str } = calculateScore(group[0], group[group.length - 1]);
			if (score < res) {
				final = str;
				res = score;
			}
			count++;
		}
	}
	return { score: res, str: final };
};

const bundleMe = (numberOfStrings, groupSize, groups) => {
	let sum = 0;

	const sortedGroups = [ ...groups ].sort((a, b) => a.length - b.length);

	const myMap = new Map();

	for (let i = 0; i < sortedGroups.length; i++) {
		const el = sortedGroups[i];
		const nextEl = sortedGroups[i + 1];
		const first = el[0];
		const old = myMap.get(first);
		if (nextEl) {
			const second = nextEl[0];
			if (first === second) {
				if (old) {
					myMap.set(first, [ ...old, nextEl ]);
				} else {
					myMap.set(first, [ el, nextEl ]);
				}
			}
		}
	}

	for (const [ _, value ] of myMap.entries()) {
		const arr = [ ...value ];
		while (arr.length > 0) {
			const temp = arr.splice(0, groupSize);
			const { score } = getScore(temp);
			sum += score;
		}
	}

	return sum;
};

const main = () => {
	for (let i = 1; i <= +tests; i++) {
		const [ numberOfStrings, groupSize ] = readLine().split(' ');
		const groups = [];
		for (let j = 0; j < +numberOfStrings; j++) {
			const str = readLine();
			groups.push(str);
		}
		const res = bundleMe(numberOfStrings, groupSize, groups);
		console.log('Case #' + i + ': ' + res);
	}
};

main();
