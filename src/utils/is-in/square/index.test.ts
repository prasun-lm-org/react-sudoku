import { SQUARE } from 'typings'
import isInSquare from '.'

describe('isInSquare', () => {
  it('returns true when value is in grid square', () => {
    const square: SQUARE = [
      [1, 4, 3],
      [8, 5, 7],
      [6, 2, 9],
    ]

    expect(isInSquare({ square, value: 1 })).toBeTruthy()
    expect(isInSquare({ square, value: 5 })).toBeTruthy()
    expect(isInSquare({ square, value: 9 })).toBeTruthy()
  })

  it('returns false when value is not in grid square', () => {
    const square: SQUARE = [
      [0, 4, 3],
      [8, 0, 7],
      [6, 2, 0],
    ]

    expect(isInSquare({ square, value: 1 })).toBeFalsy()
    expect(isInSquare({ square, value: 5 })).toBeFalsy()
    expect(isInSquare({ square, value: 9 })).toBeFalsy()
  })
})
