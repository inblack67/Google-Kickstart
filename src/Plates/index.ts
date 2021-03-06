const calculateSumOfElements = (arr: number[]) => arr.reduce((a, b) => a + b, 0);

const calculateMaxBeautifulPlates = (numberOfStacks: number, stackLength: number, maxPlates: number, stacks: number[][]): number => {
    console.log(numberOfStacks);
    console.log(stackLength);
    console.log(maxPlates);
    console.log(stacks);

    let res = 0;

    for (let i = 0; i < stacks.length; i++) {
        const stack = stacks[ i ];
        const nextStack = stacks[ i + 1 ];
        console.log(stack);

        let j = stack.length;

        while (j > 0) {
            let newSet = [ ...stack.slice(0, j) ];
            console.log(newSet);
            for (let k = 0; k < stack.length; k++) {
                console.log(j);
                if (newSet.length === maxPlates) {
                    const sum = calculateSumOfElements(newSet);
                    console.log(sum);
                    if (sum > res) {
                        res = sum;
                    }
                } else {
                    if (nextStack) {
                        const restSet = nextStack.slice(0, maxPlates - newSet.length);
                        newSet = [ ...newSet, ...restSet ];
                        console.log(newSet);
                    }
                }
            }
            j--;
        }

    }

    return res;
};

// console.log(calculateMaxBeautifulPlates(2, 4, 5, [ [ 10, 10, 100, 30 ], [ 80, 50, 10, 50 ] ]));

console.log(calculateMaxBeautifulPlates(3, 2, 3, [ [ 80, 80 ], [ 15, 50 ], [ 20, 10 ] ]));
