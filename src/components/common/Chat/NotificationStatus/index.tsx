import React, { FC } from 'react'
import cn from 'classnames'
import { FormattedMessage } from 'react-intl'
import { NotificationType } from '../../../../data/chat/types'

import styles from './style.module.scss'

type NotificationStatusProps = {
  statusType: NotificationType
  labels: {
    like: string
    match: string
  }
  className?: string
}

const NotificationStatus: FC<NotificationStatusProps> = ({
  statusType,
  labels,
  className,
}) => {
  const blockName = 'notification-status'

  return (
    <div className={cn(styles[`${blockName}`])}>
      <FormattedMessage id={labels[statusType]} />
    </div>
  )
}

export default NotificationStatus
