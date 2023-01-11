import React, { FC, useContext, useEffect } from 'react'
import { GameContext } from '../../../contexts/GameContextProvider'
import {
  startTaskHeadData,
  waitingOpponentHeadData,
  chooseCardsHeadData,
  opponentChoosingHeadData,
} from '../../../data/game-preparation'
import Button from '../../ui/Button'
import { FormattedMessage } from 'react-intl'
import UserAvatarName from '../UserAvatarName'
import cn from 'classnames'

import styles from './style.module.scss'
import EmptyAvatar from '../../ui/EmptyAvatar'

type GamePreparationControllerProps = {
  className?: string
}

const GamePreparationController: FC<GamePreparationControllerProps> = ({
  className,
}) => {
  const {
    gameStage,
    startSearchingOpponent,
    opponentData,
    taskName,
    selectedCardsCount,
    maxSelectedCardsCount,
    sendSelectedCardsOnClick,
  } = useContext(GameContext)

  const blockName = 'gp-controller'

  const startTaskButtonHandler = () => {
    startSearchingOpponent()
  }

  const renderHead = () => {
    switch (gameStage) {
      case 'start-task':
        return (
          <>
            <div className={styles[`task-label`]}>
              <div className={styles[`task-label__label`]}>
                <FormattedMessage id={startTaskHeadData.taskLabel} />
              </div>
              <div className={styles[`task-label__task`]}>{taskName}</div>
            </div>
            <Button
              theme="dark"
              text={startTaskHeadData.changeTask}
              type="button"
            />
          </>
        )
      case 'waiting-opponent':
        return (
          <>
            <div className={styles[`task-label`]}>
              <div className={styles[`task-label__label`]}>
                <FormattedMessage id={startTaskHeadData.taskLabel} />
              </div>
              <div className={styles[`task-label-task`]}>{taskName}</div>
            </div>
            <Button
              theme="dark"
              text={startTaskHeadData.changeTask}
              type="button"
            />
          </>
        )
      case 'choose-cards':
        return (
          <>
            <div className={styles[`${blockName}__task-name`]}>{taskName}</div>
            <div className={styles[`${blockName}__cards-selected`]}>
              <span className={styles[`${blockName}__cards-selected-label`]}>
                <FormattedMessage id={chooseCardsHeadData.selected} />
              </span>
              <span
                className={styles[`${blockName}__cards-selected-numbers`]}
              >{` ${selectedCardsCount}/${maxSelectedCardsCount}`}</span>
            </div>
          </>
        )
      case 'opponent-choosing':
        return (
          <>
            <div className={styles[`${blockName}__task-name`]}>{taskName}</div>
            <div className={styles[`${blockName}__cards-selected`]}>
              <span className={styles[`${blockName}__cards-selected-label`]}>
                <FormattedMessage id={chooseCardsHeadData.selected} />
              </span>
              <span
                className={styles[`${blockName}__cards-selected-numbers`]}
              >{` ${selectedCardsCount}/${maxSelectedCardsCount}`}</span>
            </div>
          </>
        )
    }
  }

  const renderStatusMessage = () => {
    switch (gameStage) {
      case 'start-task':
        return <FormattedMessage id={startTaskHeadData.stageStatusLabel} />
      case 'waiting-opponent':
        return (
          <FormattedMessage id={waitingOpponentHeadData.stageStatusLabel} />
        )
      case 'choose-cards':
        return <FormattedMessage id={chooseCardsHeadData.stageStatusLabel} />
      case 'opponent-choosing':
        return (
          <FormattedMessage id={opponentChoosingHeadData.stageStatusLabel} />
        )
    }
  }

  const renderBottom = () => {
    switch (gameStage) {
      case 'start-task':
        return (
          <Button
            theme="yellow"
            text={startTaskHeadData.startTask}
            type="button"
            onClick={startTaskButtonHandler}
          />
        )
      case 'waiting-opponent':
        return (
          <>
            <div className={styles[`searching-label`]}>
              <EmptyAvatar mod="low-size" />
              <span className={styles[`searching-label__text`]}>
                <FormattedMessage id={waitingOpponentHeadData.searching} />
              </span>
            </div>
            <Button
              theme="dark"
              text={waitingOpponentHeadData.cancel}
              type="button"
            />
          </>
        )
      case 'choose-cards':
        return (
          <>
            <UserAvatarName
              name={opponentData?.name!}
              avatarUrl={opponentData?.avatarUrl!}
              mod="low-size"
              nameClassName={styles[`${blockName}__opponent-name`]}
            />
            <Button
              theme="dark"
              text={chooseCardsHeadData.ready}
              onClick={sendSelectedCardsOnClick}
              type="button"
            />
          </>
        )
      case 'opponent-choosing':
        return (
          <>
            <UserAvatarName
              name={opponentData?.name!}
              avatarUrl={opponentData?.avatarUrl!}
              mod="low-size"
              nameClassName={styles[`${blockName}__opponent-name`]}
            />
            <Button
              theme="dark"
              text={opponentChoosingHeadData.cancel}
              type="button"
            />
          </>
        )
    }
  }

  return (
    <div className={cn(styles[`${blockName}`], className)}>
      <div className={styles[`${blockName}__head`]}>{renderHead()}</div>
      <div className={styles[`${blockName}__status-message`]}>
        {renderStatusMessage()}
      </div>
      <div
        className={cn(
          styles[`${blockName}__bottom`],
          styles[`${blockName}__bottom--${gameStage}`]
        )}
      >
        {renderBottom()}
      </div>
    </div>
  )
}

export default GamePreparationController
