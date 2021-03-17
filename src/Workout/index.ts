const calculateDifficulty = (a: number, b: number) => Math.abs(a - b);

const getDfficulties = (numberOfSessions: number, minutes: number[]): number[] => {
    const difficulties: number[] = [];
    for (let i = 0; i < numberOfSessions; i++) {
        const spentMinutes = minutes[ i ];
        const nextSpentMinutes = minutes[ i + 1 ];
        if (nextSpentMinutes) {
            const difficulty = calculateDifficulty(spentMinutes, nextSpentMinutes);
            difficulties.push(difficulty);
        }
    }
    return difficulties;
};

const sessions = (numberOfSessions: number, additionalSessions: number, minutes: number[]): number => {
    console.log(numberOfSessions);
    console.log(additionalSessions);
    console.log(minutes);

    const difficulties = getDfficulties(numberOfSessions, minutes);

    let hardwork = Math.max(...difficulties);

    console.log(hardwork);

    const newUs: number[] = [];

    console.log(minutes);

    for (let j = 0; j < numberOfSessions; j++) {
        const next = j + 1;
        const current = j;
        const avg = (minutes[ next ] + minutes[ current ]) / 2;
        console.log(avg);
        if (!isNaN(avg)) {
            newUs.push(Math.floor(avg));
        }
    }

    const avg2 = (minutes[ 0 ] + minutes[ minutes.length - 1 ]) / 2;
    console.log(avg2);
    newUs.push(Math.floor(avg2));

    console.log(newUs);

    const newSortedUs = newUs.sort((a, b) => a - b);
    console.log(newSortedUs);

    while (newSortedUs.length > 0) {

        const sessionMinutes = [ ...minutes ];

        const allowed = newSortedUs.splice(0, additionalSessions);
        console.log(allowed);

        sessionMinutes.push(...allowed);

        const newSessionMinutes = [ ...sessionMinutes ].sort((a, b) => a - b);

        console.log(newSessionMinutes);

        const newDifficulties = getDfficulties(newSessionMinutes.length, newSessionMinutes);

        console.log(newDifficulties);

        const newHardwork = Math.max(...newDifficulties);

        console.log(newHardwork);

        if (newHardwork < hardwork) {
            hardwork = newHardwork;
        }
    }

    console.log(hardwork);

    return Math.floor(hardwork);
};

// console.log(sessions(5, 2, [ 10, 13, 15, 16, 17 ])); // 2
console.log(sessions(5, 6, [ 9, 10, 20, 26, 30 ])); // 3
// console.log(sessions(8, 3, [ 1, 2, 3, 4, 5, 6, 7, 10 ])); // 1
// console.log(sessions(3, 1, [ 100, 200, 230 ])); // 50