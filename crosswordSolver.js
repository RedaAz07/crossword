import * as valid from './modules/checker.js';
import * as mod from './modules/parser.js';
import { solver } from './modules/solver.js';

function crosswordSolver(puzzle, words) {
    if (!valid.checker(puzzle, words)) {
        console.log("Error check");
        return;
    }

    const grid = mod.parser(puzzle);
    const solved = grid.map(row => [...row]);
    const revers = grid.map(row => [...row]);

    const success = solver(grid, solved, words, 0);
    solver(grid, revers, words.reverse(), 0);

    if (solved.includes('0')) {
        console.log("Error 0");
        return
    }

    if (!success) {
        console.log("Error no solution");
        return;
    }

    const output = solved.map(row => row.join('')).join('\n');
    const reverse = revers.map(row => row.join('')).join('\n');

    if (output !== reverse) {
        console.log("Error dupp");
        return;
    }
    console.log(output);
}


const puzzle = '2001\n0..0\n1000\n0..0'
const words = ['casa', 'alan', 'ciao', 'anta']

crosswordSolver(puzzle, words);


