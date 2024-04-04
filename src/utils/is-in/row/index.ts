import { GRID, NUMBERS } from 'typings'

interface IInput {
  grid: GRID
  row: number
  value: NUMBERS
}

/**
 * A function that return true if a value is already being used in the current grid row
 * @param IInput Object with 9x9 Sudoku Grid, row index and value
 * @returns boolean
 */
function isInRow({ grid, row, value }: IInput): boolean {
  return grid[row].includes(value)
}

export default isInRow
