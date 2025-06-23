import { horizontal, vertical } from "./checker.js"

export function solver(grid,solved,row,col,word) {

    if (row >= grid.length) {
        return true
    }
    if (!isNaN(grid[row][col])){
        // console.log(grid[row][col])
        if (horizontal(solved[row],word,col)){
            console.log(word);
            
            for (let i = 0;i<word.length;i++) {
                solved[row][col+i] = word[i]
            }
            return true
        } 
        if (vertical(solved,word,col,row)) {
             console.log(word);
            for (let i = 0;i<word.length;i++) {
                solved[row+i][col] = word[i]
            }
            return true
        } 
    }
    if (col === grid[0].length-1 ) {
        solver(grid,solved,row+1,0,word)
    }
    if (col < grid[row].length-1) {
        solver(grid,solved,row,col+1,word)
    }
    
}