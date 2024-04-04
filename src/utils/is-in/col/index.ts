import { GRID, NUMBERS } from 'typings'

interface IInput {
  grid: GRID
  col: number
  value: NUMBERS
}

/**
 * A function that return true if a value is already being used in the current grid column
 * @param IInput Object with 9x9 Sudoku Grid, column index and value
 * @returns boolean
 */
function isInCol({ grid, col, value }: IInput): boolean {
  let isInCol = false
  for (let i = 0; i < 9; i++) {
    if (value === grid[i][col]) {
      isInCol = true
    }
  }
  return isInCol
}

export default isInCol
