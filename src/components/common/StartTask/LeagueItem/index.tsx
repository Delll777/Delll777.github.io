import React, { FC } from 'react'
import cn from 'classnames'
import { Slide, Image } from 'pure-react-carousel'

import styles from './style.module.scss'

type LeagueItemProps = {
  index: number
  imageUrl: string
  leagueName: string
  className?: string
}

const LeagueItem: FC<LeagueItemProps> = ({
  index,
  imageUrl,
  leagueName,
  className,
}) => {
  const blockName = 'league-item'

  return (
    <Slide className={cn(styles[`${blockName}`], className)} index={index}>
      <Image
        className={styles[`${blockName}__wrap`]}
        tag="div"
        src={imageUrl}
        hasMasterSpinner={false}
        isBgImage={true}
      >
        <div className={styles[`${blockName}__league-name`]}>{leagueName}</div>
      </Image>
    </Slide>
  )
}

export default LeagueItem
