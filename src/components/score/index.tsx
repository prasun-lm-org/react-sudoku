import { FC } from 'react'
import { Label } from 'components'
import { IReducer } from 'reducers'
import { shallowEqual, useSelector } from 'react-redux'

interface IState {
  score?: number
}

const Score: FC = () => {
  const state = useSelector<IReducer, IState>(
    ({ score }) => ({
      score,
    }),
    shallowEqual
  )
  return <Label>Score: {state.score}</Label>
}

export default Score
