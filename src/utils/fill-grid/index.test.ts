import { GRID } from 'typings'
import fillGrid from '.'

describe('fillGrid', () => {
  it('fills an empty grid', () => {
    const grid: GRID = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
    fillGrid(grid)
    for (let row in grid)
      for (let col in grid[row]) {
        expect(grid[row][col]).toBeGreaterThan(0)
        expect(grid[row][col]).toBeLessThanOrEqual(9)
      }
  })

  it('fills a valid partially filled grid', () => {
    const grid: GRID = [
      [0, 0, 2, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 4, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 9, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 6, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 7, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 5, 0],
    ]
    fillGrid(grid)
    for (let row in grid)
      for (let col in grid[row]) {
        expect(grid[row][col]).toBeGreaterThan(0)
        expect(grid[row][col]).toBeLessThanOrEqual(9)
      }
  })
})
