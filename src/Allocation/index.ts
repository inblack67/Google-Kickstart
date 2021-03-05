import readline from 'readline';

const calculateMaxHouses = (numberOfHouses: number, prices: number[], budget: number): number => {
    let max = 0;
    const sortedPrices = [ ...prices ].sort((a, b) => a - b);
    for (let i = 0; i < numberOfHouses; i++) {
        const price = sortedPrices[ i ];
        if (budget >= price) {
            budget -= price;
            max++;
        }
    }
    return max;
};

console.log(calculateMaxHouses(4, [ 20, 90, 40, 90 ], 100));
console.log(calculateMaxHouses(4, [ 30, 30, 10, 10 ], 50));
console.log(calculateMaxHouses(3, [ 999, 999, 999 ], 300));

export const maxHouses = async () => {
    const myConsole = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const q1 = (): Promise<number> => {
        return new Promise((res) => {
            myConsole.question('Number of test cases ? ', t => {
                res(+t);
            });
        });
    };
    const q2 = (): Promise<number> => {
        return new Promise((res) => {
            myConsole.question('Number of houses ? ', n => {
                res(+n);
            });
        });
    };
    const q3 = (): Promise<number> => {
        return new Promise((res) => {
            myConsole.question('Your budget ? ', b => {
                res(+b);
            });
        });
    };
    const q4 = (): Promise<number> => {
        return new Promise((res) => {
            myConsole.question('Price ? ', p => {
                res(+p);
            });
        });
    };

    const tests = await q1();
    for (let i = 0; i < tests; i++) {
        const numberOfHouses = await q2();
        const budget = await q3();
        const prices: number[] = [];
        for (let i = 0; i < numberOfHouses; i++) {
            const price = await q4();
            prices.push(price);
        }
        myConsole.close();
        const res = calculateMaxHouses(numberOfHouses, prices, budget);
        console.log(`Case #${ i + 1 }: `, res);
    }

    myConsole.on('close', () => {
        process.exit(0);
    });
};