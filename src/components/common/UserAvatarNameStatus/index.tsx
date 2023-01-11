import React, { FC } from 'react'
import UserAvatar from '../UserAvatar'
import cn from 'classnames'
import styles from './style.module.scss'

type UserAvatarNameStatusProps = {
  children: React.ReactNode
  avatarUrl: string
  name: string
  avatarMod?: 'low-size'
  isOnline?: boolean
  nameMod: 'primary' | 'secondary'
  className?: string
}

const UserAvatarNameStatus: FC<UserAvatarNameStatusProps> = ({
  avatarUrl,
  avatarMod,
  name,
  isOnline,
  nameMod,
  children,
  className,
}) => {
  const blockName = 'user-avatar-name-status'

  return (
    <div className={cn(styles[`${blockName}`], className)}>
      <UserAvatar
        avatarUrl={avatarUrl}
        isOnline={isOnline}
        mod={avatarMod}
        className={styles[`${blockName}__avatar`]}
      />
      <div className={styles[`${blockName}__name-status-wrap`]}>
        <div
          className={cn(styles[`${blockName}__name`], {
            [styles[`${blockName}__name--${nameMod}`]]: nameMod,
          })}
        >
          {name}
        </div>
        <div className={styles[`${blockName}__status`]}>{children}</div>
      </div>
    </div>
  )
}

export default UserAvatarNameStatus
