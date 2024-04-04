import { Button } from 'components'
import { FC, useCallback } from 'react'
import { BLOCK_COORDS, N, NUMBERS } from 'typings'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { IReducer, fillBlock } from 'reducers'

interface IProps {
  value: NUMBERS
}

interface IState {
  selectedBlock?: BLOCK_COORDS
  selectedValue: N
  incorrectAttempts?: number
}

const NumberButton: FC<IProps> = ({ value }) => {
  const state = useSelector<IReducer, IState>(
    ({ incorrectAttempts, selectedBlock, workingGrid }) => ({
      selectedBlock,
      selectedValue:
        workingGrid && selectedBlock
          ? workingGrid[selectedBlock[0]][selectedBlock[1]]
          : 0,
      incorrectAttempts,
    }),
    shallowEqual
  )
  const dispatch = useDispatch<Dispatch<AnyAction>>()

  const fill = useCallback(() => {
    if (state.selectedBlock && state.selectedValue === 0) {
      console.log(state)
      dispatch(fillBlock(value, state.selectedBlock, state.incorrectAttempts))
    }
  }, [dispatch, state, value])

  return <Button onClick={fill}>{value}</Button>
}

export default NumberButton
