import React, { FC } from 'react'
import DarkLayout from '../../layouts/dark'
import PageGameResult from '../../components/containers/PageGameResult'

type GameResultPageProps = {}

const GameResultPage: FC<GameResultPageProps> = () => {
  return (
    <DarkLayout>
      <PageGameResult />
    </DarkLayout>
  )
}

export default GameResultPage
