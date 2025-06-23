import * as valid from './modules/checker.js'
import * as mod from './modules/parser.js'
import { solver } from './modules/solver.js'

const puzzle = '2001\n0..0\n1001\n0..0'
const words = ['casa', 'alan', 'ciao', 'anta']
const gridToSolve = mod.parser(puzzle)


function crosswordSolver(grid,list) {
    // if (!valid.checker(grid,list)) return console.log("Error")

    solver(gridToSolve,0,0)
    // console.log(valid.horizontal(gridToSolve[0],'casa',0))


}

crosswordSolver(puzzle,words)

// console.log(isNaN('.'))

// console.log(words)

