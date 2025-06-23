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

    const success = solver(grid, solved, words, 0);

    if (!success) {
        console.log("Error");
        return;
    }

    const output = solved.map(row => row.join('')).join('\n');
    console.log(output);
}
const puzzle = `...1...........
..1000001000...
...0....0......
.1......0...1..
.0....100000000
100000..0...0..
.0.....1001000.
.0.1....0.0....
.10000000.0....
.0.0......0....
.0.0.....100...
...0......0....
..........0....`

const words = [
  'sun',
  'sunglasses',
  'suncream',
  'swimming',
  'bikini',
  'beach',
  'icecream',
  'tan',
  'deckchair',
  'sand',
  'seaside',
  'sandals',
].reverse();

crosswordSolver(puzzle, words);
