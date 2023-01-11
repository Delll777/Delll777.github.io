import React, { FC } from 'react'
import EmptyAvatar from '../../ui/EmptyAvatar'
import cn from 'classnames'

import styles from './style.module.scss'

type UserAvatarProps = {
  avatarUrl: string
  mod?: 'low-size'
  isOnline?: boolean
  className?: string
}

const UserAvatar: FC<UserAvatarProps> = ({
  avatarUrl,
  isOnline,
  mod,
  className,
}) => {
  const blockName = 'user-avatar'

  const renderPhoto = () => {
    if (avatarUrl) {
      return (
        <img
          src={avatarUrl}
          alt="Avatar"
          className={styles[`${blockName}__image`]}
        />
      )
    } else {
      return <EmptyAvatar mod={mod} />
    }
  }

  return (
    <div
      className={cn(
        styles[`${blockName}`],
        { [styles[`${blockName}--${mod}`]]: mod },
        className
      )}
    >
      {renderPhoto()}
    </div>
  )
}

export default UserAvatar
