import fs from 'fs';

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[ currentLine++ ];
const tests = readMe();

const numberOfPeaks = (numberOfCheckPoints: number, heights: number[]): number => {
    console.log(numberOfCheckPoints);
    console.log(heights);
    let res = 0;
    return res;
};

// console.log(numberOfPeaks(3, [ 10, 20, 14 ])); // 1
// console.log(numberOfPeaks(4, [ 7, 7, 7, 7 ])); // 0 
// console.log(numberOfPeaks(5, [ 10, 90, 20, 90, 10 ])); // 2
console.log(numberOfPeaks(3, [ 10, 3, 10 ])); // 0

for (let i = 1; i <= +tests; i++) {
    const numberOfCheckPoints = readMe();
    const heights = readMe().split('').map(el => +el);
    const res = numberOfPeaks(+numberOfCheckPoints, heights);
    console.log(`Case #${ i }: `, res);
}