import { horizontal, vertical } from "./checker.js";

export function solver(grid, solved, words, index) {
    if (index === words.length) return true;

    const word = words[index];

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if ((grid[row][col] === '1' || grid[row][col] === '2')) {

                if (horizontal(solved, word, col, row, grid)) {
                    const backup = [...solved[row]];
                    for (let i = 0; i < word.length; i++) {
                        solved[row][col + i] = word[i];
                    }
                    if (grid[row][col] === '1') grid[row][col] = '0';
                    if (solver(grid, solved, words, index + 1)) return true;
                    if (grid[row][col] === '0') grid[row][col] = '1';

                    solved[row] = backup;
                }
            }
            if ((grid[row][col] === '1' || grid[row][col] === '2')) {
                if (vertical(solved, word, col, row, grid)) {
                    const backup = [];
                    for (let i = 0; i < word.length; i++) {
                        backup.push(solved[row + i][col]);
                        solved[row + i][col] = word[i];
                    }

                    if (grid[row][col] === '1') grid[row][col] = '0';
                    if (solver(grid, solved, words, index + 1)) return true;
                    if (grid[row][col] === '0') grid[row][col] = '1';
                    for (let i = 0; i < word.length; i++) {
                        solved[row + i][col] = backup[i];
                    }
                }
            }
        }
    }

    return false;
}
