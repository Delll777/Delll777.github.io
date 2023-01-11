import React, { FC, useContext } from 'react'
import GameHelperMobileView from './mobile'
import { GameContext } from '../../../contexts/GameContextProvider'

type GameHelperProps = {
  children: React.ReactNode
}

const GameHelper: FC<GameHelperProps> = ({ children }) => {
  const {
    winner,
    opponentData,
    sessionTime,
    taskName,
    opponentGuessedCardsCount,
    maxSelectedCardsCount,
  } = useContext(GameContext)

  return (
    <>
      <GameHelperMobileView
        timeToFinishRound={120}
        opponentHits={opponentGuessedCardsCount}
        maxHitsCount={maxSelectedCardsCount}
        opponentData={opponentData!}
        sessionTime={sessionTime}
        taskName={taskName}
        winner={winner!}
      >
        {children}
      </GameHelperMobileView>
    </>
  )
}

export default GameHelper
