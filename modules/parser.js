
export function parser(grid) {  
    let newGrid = []
    let buffer = []
    for (const n of grid) {
        if (n === '\n') {
            newGrid.push(buffer)
            buffer = []
            continue
        }
        buffer.push(n)
    }
    newGrid.push(buffer)

    return newGrid
}