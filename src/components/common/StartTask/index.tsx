import React, { FC } from 'react'
import Container from '../../ui/Container'
import cn from 'classnames'
import { LeagueItemType } from '../../../data/start-task/types'
import { startTask } from '../../../data/start-task'
import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import LeagueItem from './LeagueItem'
import { FormattedMessage } from 'react-intl'
import { apiRoot } from '../../../api/constants'

import styles from './style.module.scss'
import Icon from '../../ui/Icon'

type StartTaskProps = {
  heading: string
  leagues: LeagueItemType[]
  className?: string
}

const StartTask: FC<StartTaskProps> = ({ heading, leagues, className }) => {
  const blockName = 'start-task'

  const renderSlides = leagues.map(({ leagueImage, leagueName }, index) => (
    <LeagueItem
      key={index}
      index={index}
      leagueName={leagueName}
      imageUrl={`https://${apiRoot}${leagueImage}`}
    />
  ))

  return (
    <Container
      heading={heading}
      className={cn(styles[`${blockName}`], className)}
    >
      <div className={styles[`${blockName}__slider-wrap`]}>
        <CarouselProvider
          totalSlides={leagues.length}
          naturalSlideHeight={169}
          naturalSlideWidth={296}
          infinite={true}
        >
          <Slider>{renderSlides}</Slider>
          <div className={styles[`${blockName}__slider-control`]}>
            <ButtonBack
              className={cn(
                styles[`${blockName}__arrow-button`],
                styles[`arrow-button`]
              )}
            >
              <Icon
                name="left-arrow"
                className={styles[`arrow-button__arrow-icon`]}
              />
            </ButtonBack>
            <ButtonNext
              className={cn(
                styles[`${blockName}__arrow-button`],
                styles[`arrow-button`]
              )}
            >
              <Icon
                name="right-arrow"
                className={styles[`arrow-button__arrow-icon`]}
              />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
      <div className={styles[`${blockName}__info-row`]}>
        <div
          className={cn(
            styles[`${blockName}__info-col`],
            styles[`${blockName}__left-col`]
          )}
        >
          <div className={styles[`${blockName}__label`]}>
            <FormattedMessage id={startTask.yourPlaceText} />
          </div>
          <div className={styles[`${blockName}__data`]}>
            {`${leagues[0]?.userPlace} `}
            <span className={styles[`${blockName}__sublabel`]}>
              <FormattedMessage id={startTask.place} />
            </span>
          </div>
        </div>
        <div
          className={cn(
            styles[`${blockName}__info-col`],
            styles[`${blockName}__right-col`]
          )}
        >
          <div className={styles[`${blockName}__label`]}>
            <FormattedMessage id={startTask.untilTheEndOfRound} />
          </div>
          <div className={styles[`${blockName}__data`]}>
            {`${leagues[0]?.tasksLeft} `}
            <span className={styles[`${blockName}__sublabel`]}>
              <FormattedMessage id={startTask.tasks} />
            </span>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default StartTask
