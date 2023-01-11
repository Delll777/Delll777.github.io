import React, { FC } from 'react'
import Icon from '../Icon'
import cn from 'classnames'

import styles from './style.module.scss'

type EmptyAvatarProps = {
  mod?: 'low-size'
  className?: string
}

const EmptyAvatar: FC<EmptyAvatarProps> = ({ mod, className }) => {
  const blockName = 'empty-avatar'

  return (
    <div
      className={cn(styles[`${blockName}`], className, {
        [styles[`${blockName}--${mod}`]]: mod,
      })}
    >
      <Icon
        name="empty-avatar-placeholder"
        className={styles[`${blockName}__icon`]}
      />
    </div>
  )
}

export default EmptyAvatar
