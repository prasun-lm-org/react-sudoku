import createFullGrid from '.'

describe('createFullGrid', () => {
  it('returns a 9x9 grid with value range 1 to 9', () => {
    const grid = createFullGrid()
    for (let row in grid)
      for (let col in grid[row]) {
        expect(grid[row][col]).toBeGreaterThan(0)
        expect(grid[row][col]).toBeLessThanOrEqual(9)
      }
  })
})
