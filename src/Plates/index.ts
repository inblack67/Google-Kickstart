const calculateSumOfElements2 = (arr: number[]) => arr.reduce((a, b) => a + b, 0);

const getMaxBeauty = (arr1: number[], arr2: number[], maxPlates: number): number => {

    let res = 0;
    let j = arr1.length;

    while (j > 0) {
        let newSet = [ ...arr1.slice(0, j) ];
        for (let k = 0; k < arr1.length; k++) {
            if (newSet.length === maxPlates) {
                const sum = calculateSumOfElements2(newSet);
                if (sum > res) {
                    res = sum;
                }
            } else {
                const restSet = arr2.slice(0, maxPlates - newSet.length);
                newSet = [ ...newSet, ...restSet ];
            }
        }
        j--;
    }

    return res;
};

const calculateMaxBeautifulPlates2 = (_: number, __: number, maxPlates: number, stacks: number[][]): number => {
    let res = 0;
    let count = 0;

    for (let i = 0; i < stacks.length; i++) {
        const stack = stacks[ i ];
        const nextStack = stacks[ i + 1 ];
        if (nextStack) {
            const totalBeauty = getMaxBeauty(stack, nextStack, maxPlates);
            if (totalBeauty > res) {
                res = totalBeauty;
            }
        } else if (stacks.length > 2 && count === 0) {
            const totalBeauty = getMaxBeauty(stack, stacks[ 0 ], maxPlates);
            if (totalBeauty > res) {
                res = totalBeauty;
            }
            count++;
        } else {
            break;
        }
    }
    return res;
};

console.log(calculateMaxBeautifulPlates2(2, 4, 5, [ [ 10, 10, 100, 30 ], [ 80, 50, 10, 50 ] ]));

console.log(calculateMaxBeautifulPlates2(3, 2, 3, [ [ 80, 80 ], [ 15, 50 ], [ 20, 10 ] ]));