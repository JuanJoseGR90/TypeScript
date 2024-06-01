function rollDice(userName: string, maxOfTries: number) {
    const results: string[] = [];
    let MAX_DICE_NUMBER: number;

    if (!maxOfTries) {
        throw new Error('Max could not be undefined');
    }

    if (!userName) {
        throw new Error('Please enter a user name');
    }

    if (typeof userName !== 'string') {
        throw new Error('Username should be a string, not a: ' + typeof userName);
    }

    MAX_DICE_NUMBER = 6;

    for (let index:number = 0; index < maxOfTries; index++) {
        const result:number = Math.ceil(Math.random() * MAX_DICE_NUMBER);

        if (result === MAX_DICE_NUMBER) {
            results.push(`${userName} is a WINNER`);
        } else {
            results.push(`${userName} is a LOSER`);
        }
    }
    return results;
}

const results = rollDice('TypeScript', 2);

console.log(results);
