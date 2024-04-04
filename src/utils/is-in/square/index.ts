import { NUMBERS, SQUARE } from 'typings'

interface IInput {
  square: SQUARE
  value: NUMBERS
}

/**
 * A function that return true if a value is already being used in the current grid square
 * @param IInput Object with 3x3 Square and value
 * @returns boolean
 */
function isInSquare({ square, value }: IInput): boolean {
  return [...square[0], ...square[1], ...square[2]].includes(value)
}

export default isInSquare
