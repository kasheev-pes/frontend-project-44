import readlineSync from 'readline-sync';
import getRandomInt from '../random/getRandomInt.js';
import { congratulations, tryAgain } from '../messages.js';

const getRandomExpression = () => {
    const operands = ['+', '-', '*'];
    const arg1 = getRandomInt(0, 100);
    const arg2 = getRandomInt(0, 100);
    const operation = getRandomInt(0, 3);

    const expression = (arg1, arg2, op) => `Question: ${arg1} ${op} ${arg2}`;
    const op = operands[operation];

    const result = {
        '+': (a, b) => a + b,
        '*': (a, b) => a * b,
        '-': (a, b) => a - b,
    };

    console.log(expression(arg1, arg2, op));
    return result[op](arg1, arg2);
};

const calculating = (user = 'Jonh Dou') => {
    console.log('What is the result of the expression?');

    let counter = 0;

    while (counter < 3) {
        const result = getRandomExpression();
        const anwser = readlineSync.question('Your anwser: ');

        if (+anwser !== result) {
            tryAgain({ result: anwser, trueResult: result, user });
            return;
        }

        console.log('Correct!');
        counter += 1;
    }

    congratulations({ user: user })
};

export default calculating;
