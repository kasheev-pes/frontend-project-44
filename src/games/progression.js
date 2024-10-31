import { congratulations, tryAgain } from '../messages.js';
import readlineSync from 'readline-sync';

const gameProgression = () => {
    const start = Math.floor(Math.random() * 20) + 1;

    const diff = Math.floor(Math.random() * 4) + 2;
    const length = Math.floor(Math.random() * 10) + 5;
    const progression = [];
    for (let i = 0; i < length; i += 1) {
        progression.push(start + i * diff);
    }

    const hiddenIndex = Math.floor(Math.random() * length);
    const hiddenValue = progression[hiddenIndex];
    progression[hiddenIndex] = '..';

    console.log(`Question: ${progression.join(' ')}`);
    return hiddenValue;
}


const progression = (user) => {
    console.log('What number is missing in the progression?');
    

    let counter = 0;
    while (counter < 3) {
        const hiddenValue = gameProgression();
        const anwser = readlineSync.question('Your anwser: ');

        if (hiddenValue !== +anwser) {
            tryAgain({result: anwser, trueResult: hiddenValue, user: user});
            return;
        }

        console.log('Correct!');
        counter += 1;
    }

    congratulations({user: user});
}

export default progression;