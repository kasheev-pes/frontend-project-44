import readlineSync from 'readline-sync';


const greeting = () => {
    console.log("Welcome to the Brain Games!");
    const user = readlineSync.question('May I have your name? ')
    const greeting = `Hello, ${user}!`
    console.log(greeting);
}

export default greeting;