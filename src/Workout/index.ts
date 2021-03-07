const calculateDifficulty = (a: number, b: number) => Math.abs(a - b);

const sessions = (numberOfSessions: number, additionalSessions: number, minutes: number[]): number => {
    console.log(numberOfSessions);
    console.log(additionalSessions);
    console.log(minutes);

    const difficulties: number[] = [];

    for (let i = 0; i < numberOfSessions; i++) {
        const spentMinutes = minutes[ i ];
        const nextSpentMinutes = minutes[ i + 1 ];
        if (nextSpentMinutes) {
            const difficulty = calculateDifficulty(spentMinutes, nextSpentMinutes);
            difficulties.push(difficulty);
        }
    }

    const hardwork = Math.max(...difficulties);
    console.log(hardwork);

    return 0;
};

// n, k
console.log(sessions(3, 1, [ 100, 200, 230 ]));