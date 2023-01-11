import React, { FC } from 'react'
import cn from 'classnames'
import Icon from '../../../ui/Icon'
import styles from './style.module.scss'

type CardToChoosePlaceholderProps = {
  className?: string
}

const CardToChoosePlaceholder: FC<CardToChoosePlaceholderProps> = ({
  className,
}) => {
  const blockName = 'card-to-choose-placeholder'

  return (
    <div className={cn(styles[`${blockName}`], className)}>
      <Icon
        name="card-to-choose-placeholder-mobile"
        className={styles[`${blockName}__icon-bg`]}
      />
    </div>
  )
}

export default CardToChoosePlaceholder
