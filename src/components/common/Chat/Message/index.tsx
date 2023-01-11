import React, { FC } from 'react'
import { MessageOwnerType } from '../../../../data/chat/types'
import cn from 'classnames'

import styles from './style.module.scss'

type MessageProps = {
  message: string
  owner: MessageOwnerType
  className?: string
}

const Message: FC<MessageProps> = ({ message, owner, className }) => {
  const blockName = 'message'

  return (
    <div
      className={cn(
        styles[`${blockName}`],
        styles[`${blockName}--${owner}`],
        className
      )}
    >
      {message}
    </div>
  )
}

export default Message
