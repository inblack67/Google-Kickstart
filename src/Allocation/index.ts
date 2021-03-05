import readline from 'readline';

const calculateMaxHouses = (houses: number, a: number, budget: number): number => {
    let max = 0;
    let i = 1;
    while (budget > 0 && houses > 0) {
        const cost = a * i;
        budget -= cost;
        max++;
        i++;
        houses--;
    }
    return max;
};

export const maxHouses = () => {
    const myConsole = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    myConsole.question('Houses ? ', houses => {
        myConsole.question('a ?', a => {
            myConsole.question('budget ? ', budget => {
                const result = calculateMaxHouses(+houses, +a, +budget);
                console.log('result = ', result);
                myConsole.close();
            });
        });
    });

    myConsole.on('close', () => {
        process.exit(0);
    });
};