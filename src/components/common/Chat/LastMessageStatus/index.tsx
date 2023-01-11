import React, { FC } from 'react'
import cn from 'classnames'
import { FormattedMessage } from 'react-intl'

import styles from './style.module.scss'

type LastMessageStatusProps = {
  isUserMessage: boolean
  message: string
  userMessageLabel: string
  newMessageLabel: string
  className?: string
}

const LastMessageStatus: FC<LastMessageStatusProps> = ({
  isUserMessage,
  message,
  userMessageLabel,
  newMessageLabel,
  className,
}) => {
  const blockName = 'last-message-status'

  return (
    <div className={cn(styles[`${blockName}`], className)}>
      <span
        className={cn(
          styles[`${blockName}__owner`],
          { [styles[`${blockName}__owner--user`]]: isUserMessage },
          { [styles[`${blockName}__owner--new`]]: !isUserMessage }
        )}
      >
        <FormattedMessage
          id={isUserMessage ? userMessageLabel : newMessageLabel}
        />
      </span>
      <span className={styles[`${blockName}__message`]}>{` ${message}`}</span>
    </div>
  )
}

export default LastMessageStatus
