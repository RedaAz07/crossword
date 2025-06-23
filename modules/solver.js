export function solver(grid,row,col) {
    if (row >= grid.length) {
        return grid
    }
    console.log(grid[row][col]);
    // console.log(row,col)
    // console.log(grid);
    if (col === grid[0].length-1 ) {
        solver(grid,row+1,0)
    }
    if (col < grid[row].length-1) {
        solver(grid,row,col+1)
    }

    
    
    
}