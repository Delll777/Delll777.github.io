import React, { FC } from 'react'
import GameLayout from '../../layouts/game'
import PageGame from '../../components/containers/PageGame'

type GamePageProps = {}

const GamePage: FC<GamePageProps> = () => {
  return (
    <GameLayout>
      <PageGame />
    </GameLayout>
  )
}

export default GamePage
