import { congratulations, tryAgain } from '../messages.js';
import getRandomInt from '../random/getRandomInt.js';
import readlineSync from 'readline-sync';

const NOD = (min, remaind) => {
    if(remaind === 0) return min;

    return NOD(remaind, min % remaind);
}

const getDivider = (user = 'Jonh Dou') => {
    const first = getRandomInt(0, 100);
    const second = getRandomInt(0, 100);

    const max = Math.max(first, second);
    const min = Math.min(first, second);
    const remaind = max % min;
    
    const del = NOD(min, remaind);
    console.log(`Question: ${first} ${second}`);
    return del;
}

const gcdeeting = (user) => {
    console.log('Find the greatest common divisor of given numbers.');

    let counter = 0;

    while (counter < 3) {
        const divider = getDivider();
        const anwser = readlineSync.question('Your anwser: ');

        if (divider !== +anwser) {
            tryAgain({result: anwser, trueResult: divider, user: user});
            return;
        } 

        console.log('Correct!');
        counter += 1;
    }

    congratulations({user: user});
};

export default gcdeeting;