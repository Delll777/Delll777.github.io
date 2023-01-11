import React, { FC } from 'react'
import { IconNamesType, iconsMap } from '../Icon'
import cn from 'classnames'

import styles from './style.module.scss'

type IconInCircleProps = {
  iconName: IconNamesType
  mod?: 'active' | null
  className?: string
}

const IconIncircle: FC<IconInCircleProps> = ({ iconName, className, mod }) => {
  const blockName = 'icon-in-circle'

  return (
    <div
      className={cn(styles[`${blockName}`], className, {
        [styles[`${blockName}--${mod}`]]: mod,
      })}
    >
      <img
        src={iconsMap[iconName].path}
        alt="alt"
        className={styles[`${blockName}__image`]}
      />
    </div>
  )
}

export default IconIncircle
