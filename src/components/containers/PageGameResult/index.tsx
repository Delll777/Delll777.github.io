import React, { FC, useContext } from 'react'
import { GameContext } from '../../../contexts/GameContextProvider'
import UserAvatarName from '../../common/UserAvatarName'
import Button from '../../ui/Button'
import { FormattedMessage } from 'react-intl'
import {
  becomeEcquainted,
  taskSuccess,
  taskFailed,
  tryAgain,
  tryAgainButtonLabel,
  sessionTime as sessionTimeText,
  changeTask,
} from '../../../data/game-result'
import { secondsToMMSSformat } from '../../../utils/secondsToMMSSformat'
import { useHistory } from 'react-router-dom'
import routes from '../../../routing/routes'
import cn from 'classnames'

import styles from './style.module.scss'

type PageGameResultProps = {}

const PageGameResult: FC<PageGameResultProps> = () => {
  const { opponentData, winner, sessionTime, clearState } = useContext(
    GameContext
  )

  const history = useHistory()

  const onTryAgainButtonClick = () => {
    clearState()
    history.push(routes.gamePreparation)
  }

  const blockName = 'page-game-result'

  return (
    <div className={styles[`${blockName}`]}>
      <div className={styles[`${blockName}__container`]}>
        <div className={styles[`${blockName}__head`]}>
          <UserAvatarName
            name={opponentData!.name}
            avatarUrl={opponentData!.avatarUrl}
            mod="low-size"
            theme="dark"
          />
          <Button theme="blue" type="button" text={becomeEcquainted} />
        </div>
        <div className={styles[`${blockName}__ad`]}>Ad</div>
        <div className={styles[`${blockName}__status-message`]}>
          <FormattedMessage id={winner === 'user' ? taskSuccess : taskFailed} />
        </div>
        <div className={styles[`${blockName}__info`]}>
          <div
            className={cn(styles[`${blockName}__try-again-label`], {
              [styles[`${blockName}__try-again-label--green`]]:
                winner === 'opponent',
            })}
          >
            <FormattedMessage id={tryAgain} />
          </div>
          <div className={styles[`${blockName}__session-time`]}>
            <FormattedMessage id={sessionTimeText} />
            <span className={styles[`${blockName}__session-time-data`]}>
              {` ${secondsToMMSSformat(sessionTime)}`}
            </span>
          </div>
        </div>
        <div className={styles[`${blockName}__buttons`]}>
          <Button theme="dark" text={changeTask} type="button" />
          <Button
            theme={winner === 'user' ? 'yellow' : 'green'}
            text={tryAgainButtonLabel}
            type="button"
            onClick={onTryAgainButtonClick}
          />
        </div>
      </div>
    </div>
  )
}

export default PageGameResult
