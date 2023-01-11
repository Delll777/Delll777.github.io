import React, { FC } from 'react'
import UserAvatar from '../UserAvatar'
import cn from 'classnames'

import styles from './style.module.scss'

type UserAvatarNameProps = {
  avatarUrl: string
  name: string
  theme?: 'dark'
  mod?: 'low-size'
  nameClassName?: string
  className?: string
}

const UserAvatarName: FC<UserAvatarNameProps> = ({
  avatarUrl,
  name,
  theme,
  mod,
  nameClassName,
  className,
}) => {
  const blockName = 'user-avatar-name'

  return (
    <div className={cn(styles[`${blockName}`], className)}>
      <UserAvatar
        avatarUrl={avatarUrl}
        className={styles[`${blockName}__avatar`]}
        mod={mod}
      />
      <div
        className={cn(
          styles[`${blockName}__name`],
          { [styles[`${blockName}__name--${mod}`]]: mod },
          { [styles[`${blockName}__name--${theme}`]]: theme },
          nameClassName
        )}
      >
        {name}
      </div>
    </div>
  )
}

export default UserAvatarName
