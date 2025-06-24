

export function checker(grid, words) {
    if (typeof grid !== "string" || !Array.isArray(words)) return false
    if (grid === '' || words.length === 0) return false
    let regex = /\w|\W/g
    let numbers = grid.match(regex)

    let setOfWords = new Set(words)


    if (setOfWords.size !== words.length) return false

    let count = 0
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== '.' && numbers[i] !== '\n' && (numbers[i].charCodeAt(0) < 48 || numbers[i].charCodeAt(0) > 57)) return false

        if (numbers[i] > 2) return false
        if (!isNaN(numbers[i])) {
            count += Number(numbers[i])
        }
    }

    if (count !== words.length) return false

    let rows = grid.split('\n')

    for (let i = 0; i < rows.length - 1; i++) {
        if (rows[i].length !== rows[i + 1].length) return false

        if (rows[i][rows[i].length - 1] == 2) return false

    }


    for (let i = 0; i < rows[rows.length - 1].length; i++) {
        if (rows[rows.length - 1][i] > 1) return false

    }

    let longWord = words[0].length
    for (let i = 1; i < words.length; i++) {
        if (!isNaN(words[i])) return false
        if (words[i].length > longWord) longWord = words[i].length
    }

    if (rows[0].length < longWord && rows.length < longWord) return false

    return true
}

export function horizontal(row, word, index) {
    let count = 0
    let match = ''
    for (let i = index; i < row.length; i++) {
        if (row[i] === '.') break
        if (!isNaN(row[i])) {
            count++
        } else {
            if (row[i] !== word[count] && word[count] !== undefined) break
            match += row[i]
            count++
        }
    }
    if (match === word) return false
    return count === word.length
}

export function vertical(grid, word, index, row) {
    let count = 0
    let match = ''
    for (let i = row; i < grid.length; i++) {
        if (grid[i][index] === '.') break
        if (!isNaN(grid[i][index])) {
            count++
        } else {
            if (grid[i][index] !== word[count] && word[count] !== undefined) break
            match += grid[i][index]
            count++
        }
    }
    // console.log(count,match);
    if (match === word) return false
    return count === word.length
}