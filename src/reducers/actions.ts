import { AnyAction } from 'redux'

import * as types from './types'
import { BLOCK_COORDS, NUMBERS } from 'typings'

export const createGrid = (): AnyAction => ({ type: types.CREATE_GRID })

export const fillBlock = (
  value: NUMBERS,
  coords: BLOCK_COORDS,
  score?: number,
  incorrectAttempts?: number
): AnyAction => ({
  coords,
  type: types.FILL_BLOCK,
  value,
  score,
  incorrectAttempts,
})

export const selectBlock = (coords: BLOCK_COORDS): AnyAction => ({
  coords,
  type: types.SELECT_BLOCK,
})
