import React, { FC } from 'react'
import Icon from '../Icon'
import NotificationsBadge from '../NotificationsBadge'
import cn from 'classnames'

import styles from './style.module.scss'

type PrimaryMenuButtonProps = {
  theme: 'light' | 'dark' | 'white' | 'transparent-bg'
  iconName: 'menu' | 'chat' | 'dir-up' | 'three-dots'
  onClick: (event: React.MouseEvent) => void
  notifcationsCount?: number
  disabled?: boolean
  className?: string
}

const PrimaryMenuButton: FC<PrimaryMenuButtonProps> = ({
  theme,
  iconName,
  onClick,
  notifcationsCount,
  disabled,
  className,
}) => {
  const blockName = 'primary-menu-button'

  const renderNotificationsBadge = () => {
    if (notifcationsCount) {
      return (
        <NotificationsBadge
          notificationsCount={notifcationsCount}
          className={styles[`${blockName}__notifications-badge`]}
        />
      )
    }
    return null
  }

  return (
    <button
      className={cn(
        styles[`${blockName}`],
        styles[`${blockName}--${theme}`],
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <Icon
        name={iconName}
        className={cn(
          styles[`${blockName}__icon`],
          styles[`${blockName}__icon--${theme}`],
          { [styles[`${blockName}__icon--disabled`]]: disabled }
        )}
      />
      {renderNotificationsBadge()}
    </button>
  )
}

export default PrimaryMenuButton
