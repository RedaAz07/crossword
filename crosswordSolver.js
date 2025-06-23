import * as valid from './modules/checker.js'
import * as mod from './modules/parser.js'
import { solver } from './modules/solver.js'

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
].reverse()
const gridToSolve = mod.parser(puzzle)


function crosswordSolver(grid,list) {
    if (!valid.checker(grid,list)) return console.log("Error")
    const solved = gridToSolve.map(row => [...row]);

    for (const w of words) {
        if (solver(gridToSolve,solved,0,0,w)) {
           
            
        }
    }
 console.log(   solved.join('\n'))

}

crosswordSolver(puzzle,words)

