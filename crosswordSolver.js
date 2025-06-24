import * as valid from './modules/checker.js';
import * as mod from './modules/parser.js';
import { solver } from './modules/solver.js';

function crosswordSolver(puzzle, words) {
    if (!valid.checker(puzzle, words)) {
        console.log("Error");
        return;
    }

   
    const grid = mod.parser(puzzle);
    const solved = grid.map(row => [...row]);
    const revers = grid.map(row => [...row]);

    const success = solver(grid, solved, words, 0);
    solver(grid, revers, words.reverse(), 0);

    if (solved.includes('0')) {
        console.log("Error");
        return
    }

    if (!success) {
        console.log("Error");
        return;
    }

    const output = solved.map(row => row.join('')).join('\n');
    const reverse = revers.map(row => row.join('')).join('\n');

    if (output !== reverse) {
        console.log("Error");
        return;
    }
    console.log(output);
}



crosswordSolver(puzzle, words);


