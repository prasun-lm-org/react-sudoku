import { FC, useCallback } from 'react'
import { Button } from 'components'
import { useDispatch } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { createGrid } from 'reducers'

const NewButton: FC = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>()

  const createNewGrid = useCallback(() => {
    if (window.confirm('Are you sure you want to start a new game?'))
      dispatch(createGrid())
  }, [dispatch])
  return <Button onClick={createNewGrid}>New Game</Button>
}

export default NewButton
