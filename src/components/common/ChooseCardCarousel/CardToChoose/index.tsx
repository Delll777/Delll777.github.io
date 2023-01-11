import React, { FC } from 'react'
import { Slide, Image } from 'pure-react-carousel'
import ChooseMark from './ChooseMark'
import { apiRoot } from '../../../../api/constants'
import cn from 'classnames'

import styles from './style.module.scss'

type CardToChooseProps = {
  id: number
  index: number
  imageUrl: string
  selected: boolean
  selectingCardOnClick: (id: number) => void
  className?: string
}

const CardToChoose: FC<CardToChooseProps> = ({
  id,
  index,
  imageUrl,
  selected,
  selectingCardOnClick,
  className,
}) => {
  const blockName = 'card-to-choose'

  const onChooseMarkClick = () => {
    selectingCardOnClick(id)
  }

  return (
    <Slide className={cn(styles[`${blockName}`], className)} index={index}>
      <Image
        className={styles[`${blockName}__wrap`]}
        tag="div"
        src={`http://${apiRoot}${imageUrl}`}
        isBgImage={true}
        hasMasterSpinner={false}
      >
        <ChooseMark
          selected={selected}
          className={styles[`${blockName}__choose-mark`]}
          onClick={onChooseMarkClick}
        />
      </Image>
    </Slide>
  )
}

export default CardToChoose
