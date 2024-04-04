import { FC } from 'react'

import { Container } from './styles'
import { IReducer, selectBlock } from 'reducers'
import { INDEX, N } from 'typings'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'

interface IProps {
  colIndex: INDEX
  rowIndex: INDEX
}

interface IState {
  isActive: boolean
  isPuzzle: boolean
  value: N
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
  const state = useSelector<IReducer, IState>(
    ({ challengeGrid, selectedBlock, workingGrid }) => ({
      isActive: selectedBlock
        ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex
        : false,
      isPuzzle:
        challengeGrid && challengeGrid[rowIndex][colIndex] !== 0 ? true : false,
      value: workingGrid ? workingGrid[rowIndex][colIndex] : 0,
    }),
    shallowEqual
  )

  const dispatch = useDispatch<Dispatch<AnyAction>>()

  function handleClick() {
    if (!state.isActive) dispatch(selectBlock([rowIndex, colIndex]))
  }

  return (
    <Container
      active={state.isActive ? 'true' : 'false'}
      data-cy={`block-${rowIndex}-${colIndex}`}
      onClick={handleClick}
      puzzle={state.isPuzzle ? 'true' : 'false'}
    >
      {state.value === 0 ? '' : state.value}
    </Container>
  )
}

export default Block
