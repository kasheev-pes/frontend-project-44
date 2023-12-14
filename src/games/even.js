import readlineSync from 'readline-sync';
import getRandomInt from '../random/getRandomInt.js';
import { tryAgain } from '../messages.js';

const isEven = (number) => number % 2 === 0;

const evening = (user = 'John Dou') => {
    let counter = 0;

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    while (counter < 3) {
        const number = getRandomInt(0, 20);
        console.log('Question: ', number);
        const answer = readlineSync.question('Yout answer: ');
        const realAnswer = isEven(number) ? 'yes' : 'no';

        if (answer === realAnswer) {
            counter += 1;
            console.log('Correct!');
        } else {
            tryAgain({ result: answer, trueResult: realAnswer, user });
            return;
        }
    }

    console.log(`Congratulations, ${user}!`);
};

export default evening;
