import React, { FC, useContext } from 'react'
import { GameContext } from '../../../contexts/GameContextProvider'
import cn from 'classnames'
import { CarouselProvider, Slider, Dot } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import CardToChoose from './CardToChoose'

import styles from './style.module.scss'
import './style.scss'
import CardToChoosePlaceholder from './CardToChoosePlaceholder'

type ChooseCardCarouselProps = {
  className?: string
}

const ChooseCardCarousel: FC<ChooseCardCarouselProps> = ({ className }) => {
  const { gameStage, userCards, selectingCardOnClick } = useContext(GameContext)

  const blockName = 'choose-card-carousel'

  const renderSlider = () => {
    if (gameStage === 'choose-cards' || gameStage === 'opponent-choosing') {
      return <Slider>{renderCards}</Slider>
    } else {
      return <CardToChoosePlaceholder />
    }
  }

  const renderCards = userCards.map(({ id, imageUrl, selected }, index) => (
    <CardToChoose
      index={index}
      imageUrl={imageUrl}
      selected={selected!}
      selectingCardOnClick={selectingCardOnClick}
      id={id}
      key={id}
    />
  ))

  const renderDots = userCards.map(({ id, selected }, index) => (
    <Dot
      slide={index}
      className={cn(
        styles[`${blockName}__dot`],
        styles[`${blockName}__dot--${gameStage}`],
        `${blockName}__dot--${gameStage}`,
        {[styles[`${blockName}__dot--selected`]]: selected}
      )}
      key={id}
    />
  ))

  return (
    <div className={cn(styles[`${blockName}`], className)}>
      <CarouselProvider
        totalSlides={userCards.length}
        naturalSlideHeight={328}
        naturalSlideWidth={328}
        infinite={true}
        className={styles[`${blockName}__carousel`]}
      >
        <div className={styles[`${blockName}__slider-wrap`]}>
          {renderSlider()}
        </div>
        <div className={styles[`${blockName}__dots-wrap`]}>{renderDots}</div>
      </CarouselProvider>
    </div>
  )
}

export default ChooseCardCarousel
