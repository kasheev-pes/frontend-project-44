import greeting from '../src/cli.js';
import progression from '../src/games/progression.js';

const user = greeting();
progression(user);