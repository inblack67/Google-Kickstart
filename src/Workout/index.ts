const sessions = (n: number, m: number): number => {
    // const minutes: number[] = [];
    for (let i = 0; i < n; i++) {
        console.log(i);
        const exercisedFor = m * i; // minutes
        console.log(exercisedFor);
    }
    return 0;
};

console.log(sessions(5, 2));