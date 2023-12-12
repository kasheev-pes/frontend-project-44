import readlineSync from 'readline-sync';

const greeting = () => {
    console.log('Welcome to the Brain Games!');
    const user = readlineSync.question('May I have your name? ');
    const greeting = `Hello, ${user}!`;
    console.log(greeting);

    return user;
};

const isEven = (number) => number % 2 === 0;

const getRandomInt = (min, max) => {
    const minF = Math.ceil(min);
    const maxF = Math.floor(max);
    return Math.floor(Math.random() * (maxF - minF)) + minF;
};

const evening = () => {
    const user = greeting();
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
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${realAnswer}'.`);
            console.log(`Let's try again, ${user}!`);
            break;
        }
    }

    if (counter === 3) {
        console.log(`Congratulations, ${user}!`);
    }
};

export default evening;
