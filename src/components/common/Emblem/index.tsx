import React, { FC } from 'react'
import Icon from '../../ui/Icon'
import cn from 'classnames'

import styles from './style.module.scss'

type EmbplemProps = {
  theme: 'light' | 'dark'
  className?: string
}

const Emblem: FC<EmbplemProps> = ({ theme, className }) => {
  const blockName = 'emblem'

  return (
    <div className={cn(styles[`${blockName}`], className)}>
      <Icon name="logo" className={styles[`${blockName}__logo`]} />
      <Icon
        name="world-of-click-icon"
        className={cn(
          styles[`${blockName}__woc-text`],
          styles[`${blockName}__woc-text--${theme}`]
        )}
      />
    </div>
  )
}

export default Emblem
