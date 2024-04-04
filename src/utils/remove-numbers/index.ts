import global from 'global'
import { GRID } from 'typings'
import { getRandomIndex, solveGrid } from 'utils'

/**
 * Removes numbers from a full grid to create a Sudoku Puzzle.
 * @param grid 9x9 Sudoku Grid
 * @param attempts number of attempts to solve (higher means more difficult) - default 5
 */
function removeNumbers(grid: GRID, attempts = 5): GRID {
  while (attempts > 0) {
    let row = getRandomIndex()
    let col = getRandomIndex()

    while (grid[row][col] === 0) {
      row = getRandomIndex()
      col = getRandomIndex()
    }

    const tmp = grid[row][col]
    grid[row][col] = 0

    // set a global counter
    global.counter = 0

    // attempt to solve the grid
    solveGrid(grid)

    // if global counter is not 1
    if (global.counter !== 1) {
      grid[row][col] = tmp

      // decrement attempts
      attempts--
    }
  }
  return grid
}

export default removeNumbers
