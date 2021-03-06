type MyRes = {
    score: number;
    str: string;
};

const calculateScore = (s1: string, s2: string): MyRes => {
    let final = '';
    console.log(s1, s2);
    for (let i = 0; i < s1.length; i++) {
        const el = s1[ i ];
        if (el === s2[ i ]) {
            final += el;
        }
    }

    return { score: final.length, str: final };
};

const getScore = (group: string[]): MyRes => {
    let res = 0;
    let final = '';
    let count = 0;
    for (let i = 0; i < group.length; i++) {
        const el = group[ i ];
        const nextEl = group[ i + 1 ];

        if (nextEl) {
            const { score, str } = calculateScore(el, nextEl);
            if (score > res) {
                final = str;
                res = score;
            }
        } else if (count === 0) {
            const { score, str } = calculateScore(group[ 0 ], group[ group.length - 1 ]);
            if (score < res) {
                final = str;
                res = score;
            }
            count++;
        }
    }
    console.log(res);
    console.log(final);
    return { score: res, str: final };
};

const bundleMe = (numberOfStrings: number, groupSize: number, groups: string[]): number => {
    console.log(numberOfStrings);
    console.log(groupSize);
    let sum = 0;

    const sortedGroups = [ ...groups ].sort((a, b) => a.length - b.length);

    const myMap = new Map<string, string[]>();

    for (let i = 0; i < sortedGroups.length; i++) {
        const el = sortedGroups[ i ];
        const nextEl = sortedGroups[ i + 1 ];
        const first = el[ 0 ];
        const old = myMap.get(first);
        if (nextEl) {
            const second = nextEl[ 0 ];
            if (first === second) {
                if (old) {
                    myMap.set(first, [ ...old, el, nextEl ]);
                } else {
                    myMap.set(first, [ el ]);
                }
            }
        }
    }

    console.log(myMap);

    for (const [ key, value ] of myMap.entries()) {
        const { score } = getScore(value);
        sum += score;
    }

    return sum;
};

console.log(bundleMe(6, 3, [ 'RAINBOW', 'FIREBALL', 'RANK', 'RANDOM', 'FIREWALL', 'FIREFIGHTER' ]));

console.log(bundleMe(2, 2, [ 'KICK', 'KTART', 'K' ]));

console.log(bundleMe(8, 2, [ 'G', 'G', 'GO', 'GO', 'GOO', 'GOO', 'GOOO', 'GOOO' ]));