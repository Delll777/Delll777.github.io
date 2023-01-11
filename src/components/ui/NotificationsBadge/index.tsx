import React, { FC } from 'react'
import cn from 'classnames'

import styles from './style.module.scss'

type NotificationsBadgeProps = {
  notificationsCount: number
  className?: string
}

const NotificationsBadge: FC<NotificationsBadgeProps> = ({
  notificationsCount,
  className,
}) => {
  const blockName = 'notification-badge'

  return (
    <div
      className={cn(
        styles[`${blockName}`],
        { [styles[`${blockName}--hiden`]]: notificationsCount <= 0 },
        className
      )}
    >
      {notificationsCount}
    </div>
  )
}

export default NotificationsBadge
