import React, { FC } from 'react'
import DarkLayout from '../../layouts/dark'
import PageGamePreparation from '../../components/containers/PageGamePreparation'

type GamePreparationPageProps = {}

const GamePreparationPage: FC<GamePreparationPageProps> = () => {
  return (
    <DarkLayout>
      <PageGamePreparation />
    </DarkLayout>
  )
}

export default GamePreparationPage
