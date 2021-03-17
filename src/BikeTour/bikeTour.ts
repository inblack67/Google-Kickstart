const numberOfPeaks = (numberOfCheckPoints: number, heights: number[]): number => {
    let res = 0;

    for (let i = 0; i < numberOfCheckPoints; i++) {
        const prev = heights[ i - 1 ];
        const curr = heights[ i ];
        const next = heights[ i + 1 ];
        if (curr > prev && curr > next) {
            if (i !== 0 && i !== heights.length - 1) {
                res++;
            }
        }
    }

    return res;
};

console.log(numberOfPeaks(3, [ 10, 20, 14 ])); // 1
console.log(numberOfPeaks(4, [ 7, 7, 7, 7 ])); // 0
console.log(numberOfPeaks(5, [ 10, 90, 20, 90, 10 ])); // 2
console.log(numberOfPeaks(3, [ 10, 3, 10 ])); // 0