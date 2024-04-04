import { AnyAction } from 'redux'

import { IReducer } from './interfaces'
import * as types from './types'
import { compareArrays, copyGrid, createFullGrid, removeNumbers } from 'utils'
import { GRID } from 'typings'

const initialState: IReducer = {}

function reducer(state = initialState, action: AnyAction): IReducer {
  switch (action.type) {
    case types.CREATE_GRID:
      const solvedGrid = createFullGrid()
      const gridCopy = copyGrid(solvedGrid)
      const challengeGrid = removeNumbers(gridCopy, 5)
      const workingGrid = copyGrid(challengeGrid)
      return {
        ...state,
        challengeGrid,
        solvedGrid,
        workingGrid,
        selectedBlock: undefined,
        score: 0,
        incorrectAttempts: 0,
      }
    case types.FILL_BLOCK:
      if (state.workingGrid && state.solvedGrid) {
        if (
          state.solvedGrid[action.coords[0]][action.coords[1]] !== action.value
        ) {
          alert('Incorrect option!')
          return {
            ...state,
            score: --action.score,
            incorrectAttempts: ++action.incorrectAttempts,
          }
        } else {
          const workingGrid = state.workingGrid.map((r, i) => {
            return r.map((c, j) => {
              if (i === action.coords[0] && j === action.coords[1])
                return action.value
              else return c
            })
          }) as GRID
          if (compareArrays(workingGrid, state.solvedGrid)) alert('Completed!')
          return {
            ...state,
            workingGrid,
            score: ++action.score,
          }
        }
      }
      return state
    case types.SELECT_BLOCK:
      return {
        ...state,
        selectedBlock: action.coords,
      }
    default:
      return state
  }
}

export default reducer
