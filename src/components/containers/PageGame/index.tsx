import React, { FC, useContext, useEffect } from 'react'
import { GameContext } from '../../../contexts/GameContextProvider'
import {
  yourCards,
  opponentChoose,
  completedSuccessfully,
  continueText,
  notCompleted,
} from '../../../data/game'
import { FormattedMessage } from 'react-intl'
import GameCard from '../../common/GameCard'
import Label from '../../ui/Label'
import { useHistory } from 'react-router-dom'
import routes from '../../../routing/routes'
import cn from 'classnames'

import styles from './style.module.scss'
import Button from '../../ui/Button'

type PageGameProps = {}

const PageGame: FC<PageGameProps> = () => {
  const {
    userCards,
    opponentCards,
    currentMove,
    winner,
    onOpponentCardClick,
  } = useContext(GameContext)

  const history = useHistory()

  const onContinueButtonClick = () => {
    history.push(routes.gameResult)
  }

  const blockName = 'page-game'

  const renderOpponentCards = opponentCards.map(({ imageUrl, status, id }) => (
    <GameCard
      imageURL={imageUrl}
      status={status}
      onClick={() => onOpponentCardClick(id)}
      key={id}
    />
  ))

  const renderUserCards = userCards.map(({ imageUrl, status, id }) => (
    <GameCard imageURL={imageUrl} status={status} key={id} />
  ))

  const renderBottomOfPage = () => {
    if (winner === 'not-yet') {
      return (
        <div className={styles[`${blockName}__user-cards-block`]}>
          <div className={styles[`${blockName}__user-cards-label`]}>
            <FormattedMessage id={yourCards} />
          </div>
          <div className={styles[`${blockName}__user-cards-wrap`]}>
            {renderUserCards}
          </div>
        </div>
      )
    } else {
      return (
        <div className={styles[`${blockName}__result-wrap`]}>
          <div className={styles[`${blockName}__result-label-wrap`]}>
            <Label
              text={winner === 'user' ? completedSuccessfully : notCompleted}
              theme="dark"
            />
          </div>
          <Button
            text={continueText}
            theme={winner === 'user' ? 'yellow' : 'green'}
            type="button"
            className={styles[`${blockName}__continue-button`]}
            onClick={onContinueButtonClick}
          />
        </div>
      )
    }
  }

  return (
    <div className={styles[`${blockName}`]}>
      <div className={styles[`${blockName}__container`]}>
        <div className={styles[`${blockName}__opponent-cards-wrap`]}>
          {renderOpponentCards}
        </div>
        {renderBottomOfPage()}
        <div
          className={cn(styles[`${blockName}__opponent-move-holder`], {
            [styles[`${blockName}__opponent-move-holder--hidden`]]:
              currentMove === 'user' || winner !== 'not-yet',
          })}
        >
          <Label text={opponentChoose} theme="white" />
        </div>
      </div>
    </div>
  )
}

export default PageGame
