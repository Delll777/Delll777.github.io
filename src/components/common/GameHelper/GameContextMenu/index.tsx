import React, { FC } from 'react'
import { OpponentData } from '../../../../contexts/GameContextProvider/types'
import { sessionTime as sessionTimeText, task } from '../../../../data/game'
import UserAvatarName from '../../UserAvatarName'
import { FormattedMessage } from 'react-intl'
import { secondsToMMSSformat } from '../../../../utils/secondsToMMSSformat'
import cn from 'classnames'

import styles from './style.module.scss'

type GameContextMenuProps = {
  isMenuOpen: boolean
  opponentData: OpponentData
  sessionTime: number
  taskName: string
  className?: string
}

const GameContextMenu: FC<GameContextMenuProps> = ({
  isMenuOpen,
  opponentData: { avatarUrl, name },
  sessionTime,
  taskName,
  className,
}) => {
  const blockName = 'game-context-menu'

  return (
    <div
      className={cn(
        styles[`${blockName}`],
        className,
        { [styles[`${blockName}--open`]]: isMenuOpen },
        { [styles[`${blockName}--close`]]: !isMenuOpen }
      )}
    >
      <UserAvatarName avatarUrl={avatarUrl} name={name} mod="low-size" />
      <div className={styles[`${blockName}__info`]}>
        <div className={styles[`${blockName}__info-block`]}>
          <FormattedMessage id={sessionTimeText} />
          <span className={styles[`${blockName}__info-block-value`]}>
            {` ${secondsToMMSSformat(sessionTime)}`}
          </span>
        </div>
        <div className={styles[`${blockName}__info-block`]}>
          <FormattedMessage id={task} />
          <span className={styles[`${blockName}__info-block-value`]}>
            {` ${taskName}`}
          </span>
        </div>
      </div>
    </div>
  )
}

export default GameContextMenu
