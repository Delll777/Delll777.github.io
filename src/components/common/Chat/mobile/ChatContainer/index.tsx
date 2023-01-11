import React, { FC } from 'react'
import cn from 'classnames'
import styles from './style.module.scss'

type ChatContainerProps = {
  children: React.ReactNode
  className?: string
}

const ChatContainer: FC<ChatContainerProps> = ({ children, className }) => {
  const blockName = 'chat-container'

  return <div className={cn(styles[`${blockName}`], className)}>{children}</div>
}

export default ChatContainer
