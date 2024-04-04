import { FC } from 'react'
import { Label } from 'components'
import { IReducer } from 'reducers'
import { shallowEqual, useSelector } from 'react-redux'

interface IState {
  incorrectAttempts?: number
}

const IncorrectAttempts: FC = () => {
  const state = useSelector<IReducer, IState>(
    ({ incorrectAttempts }) => ({
      incorrectAttempts,
    }),
    shallowEqual
  )
  return <Label>Incorrect Attemts: {state.incorrectAttempts}</Label>
}

export default IncorrectAttempts
