import React, { FC, useContext, useEffect } from 'react'
import GamePreparationController from '../../common/GamePreparationController'
import ChooseCardCarousel from '../../common/ChooseCardCarousel'
import { GameContext } from '../../../contexts/GameContextProvider'
import { useHistory } from 'react-router-dom'
import routes from '../../../routing/routes'

import styles from './style.module.scss'

type PageGamePreparationProps = {}

const PageGamePreparation: FC<PageGamePreparationProps> = () => {
  const { gameStage } = useContext(GameContext)

  const history = useHistory()

  useEffect(() => {
    if (gameStage === 'finish-preparations') {
      history.push(routes.game)
    }
  }, [gameStage, history])

  const blockName = 'page-game-preparation'

  return (
    <div className={styles[`${blockName}`]}>
      <div className={styles[`${blockName}__container`]}>
        <GamePreparationController />
        <ChooseCardCarousel
          className={styles[`${blockName}__cards-carousel`]}
        />
      </div>
    </div>
  )
}

export default PageGamePreparation
