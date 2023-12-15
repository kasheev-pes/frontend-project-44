const tryAgain = ({
    result,
    trueResult,
    user,
}) => {
    console.log(`'${result}' is wrong anwser ;(. Correct anwser was '${trueResult}'`);
    console.log(`Let's try again, ${user}!`);
};

const congratulations = ({user}) => {
    console.log(`Congratulations, ${user}!`);
}

export {
    tryAgain,
    congratulations,
};
