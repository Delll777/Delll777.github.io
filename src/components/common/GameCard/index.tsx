import React, { FC } from 'react'
import { GameCardStatus } from '../../../contexts/GameContextProvider/types'
import Opened from './Opened'
import { apiRoot } from '../../../api/constants'
import cn from 'classnames'

import styles from './style.module.scss'

type GameCardProps = {
  imageURL: string
  status: GameCardStatus
  onClick?: React.MouseEventHandler
  className?: string
}

const GameCard: FC<GameCardProps> = ({
  imageURL,
  status,
  onClick,
  className,
}) => {
  const blockName = 'game-card'

  return (
    <div className={cn(styles[`${blockName}`], className)} onClick={onClick}>
      <img
        src={`http://${apiRoot}${imageURL}`}
        alt="card"
        className={styles[`${blockName}__image`]}
      />
      <Opened status={status} />
    </div>
  )
}

export default GameCard
