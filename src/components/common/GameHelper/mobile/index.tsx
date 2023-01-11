import React, { FC, useState } from 'react'
import PrimaryMenuButton from '../../../ui/PrimaryMenuButton'
import { FormattedMessage } from 'react-intl'
import {
  timeToFinishRound as timeToFinishRoundText,
  opponent,
  notCompleted,
  taskFinished,
  taskNotFinished,
  completedSuccessfully,
} from '../../../../data/game'
import { secondsToMMSSformat } from '../../../../utils/secondsToMMSSformat'
import Chat from '../../Chat'
import GameContextMenu from '../GameContextMenu'
import {
  OpponentData,
  WinnerType,
} from '../../../../contexts/GameContextProvider/types'
import cn from 'classnames'

import styles from './style.module.scss'

type GameHelperViewProps = {
  timeToFinishRound: number
  opponentHits: number
  maxHitsCount: number
  opponentData: OpponentData
  sessionTime: number
  taskName: string
  winner: WinnerType
  children: React.ReactNode
  className?: string
}

const GameHelperView: FC<GameHelperViewProps> = ({
  timeToFinishRound,
  opponentHits,
  opponentData,
  sessionTime,
  taskName,
  winner,
  maxHitsCount,
  children,
  className,
}) => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false)
  const [isContextMenuOpen, setIsContextMenuOpen] = useState<boolean>(false)

  const openChat = () => {
    setIsChatOpen(true)
  }

  const closeChat = () => {
    setIsChatOpen(false)
  }

  const toogleContextMenu = () => {
    setIsContextMenuOpen(!isContextMenuOpen)
  }

  const blockName = 'game-helper-view'

  const renderInfo = () => {
    if (winner === 'not-yet') {
      return (
        <>
          <div
            className={cn(
              styles[`${blockName}__time-to-finish-round`],
              styles[`${blockName}__data-block`]
            )}
          >
            <FormattedMessage id={timeToFinishRoundText} />
            <span
              className={cn(
                styles[`${blockName}__time-to-finish-round-value`],
                styles[`${blockName}__data-block-value`]
              )}
            >
              {` ${secondsToMMSSformat(timeToFinishRound)}`}
            </span>
          </div>
          <div
            className={cn(
              styles[`${blockName}__opponent-hits`],
              styles[`${blockName}__data-block`]
            )}
          >
            <FormattedMessage id={opponent} />
            <span
              className={cn(
                styles[`${blockName}__opponent-hits-value`],
                styles[`${blockName}__data-block-value`]
              )}
            >
              {` ${opponentHits}/${maxHitsCount}`}
            </span>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className={styles[`${blockName}__task-completed-label`]}>
            <FormattedMessage
              id={winner === 'user' ? taskFinished : taskNotFinished}
            />
          </div>
          <div className={styles[`${blockName}__task-completed-status-label`]}>
            <FormattedMessage
              id={winner === 'user' ? completedSuccessfully : notCompleted}
            />
          </div>
        </>
      )
    }
  }

  return (
    <>
      <header className={cn(styles[`${blockName}`], className)}>
        <PrimaryMenuButton
          iconName="three-dots"
          theme={isContextMenuOpen ? 'white' : 'dark'}
          onClick={toogleContextMenu}
          disabled={winner !== 'not-yet'}
        />
        <div className={styles[`${blockName}__info`]}>{renderInfo()}</div>
        <PrimaryMenuButton iconName="chat" onClick={openChat} theme="dark" />
        <Chat isOpen={isChatOpen} closeChat={closeChat} />
        <GameContextMenu
          isMenuOpen={isContextMenuOpen}
          opponentData={opponentData}
          sessionTime={sessionTime}
          taskName={taskName}
          className={styles[`${blockName}__context-menu`]}
        />
      </header>
      {children}
    </>
  )
}

export default GameHelperView
