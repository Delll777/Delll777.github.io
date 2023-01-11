import React, { FC } from 'react'
import GameHelper from '../../components/common/GameHelper'
import { Helmet } from 'react-helmet'
import { darkLayoutColor } from '../../styles/variables'

type GameLayoutProps = {
  children: React.ReactNode
}

const GameLayout: FC<GameLayoutProps> = ({ children }) => {
  return (
    <>
      <Helmet>
        <style>{`body { background-color: ${darkLayoutColor}}`}</style>
      </Helmet>
      <GameHelper>{children}</GameHelper>
    </>
  )
}

export default GameLayout
