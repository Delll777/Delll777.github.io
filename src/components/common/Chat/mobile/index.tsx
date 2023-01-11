import React, { FC, useState } from 'react'
import {
  DialogPreviewType,
  NotificationItemType,
  UserDataType,
  MessageType,
} from '../../../../data/chat/types'
import ChatContainer from './ChatContainer'
import CloseLabel from './CloseLabel'
import { closeChatLabel, clickToReturnToDialogs } from '../../../../data/chat'
import DialogsAndNotifications from '../DialogsAndNotifications'
import Dialog from '../Dialog'
import cn from 'classnames'

import styles from './style.module.scss'

type ChatProps = {
  dialogs: DialogPreviewType[]
  notifications: NotificationItemType[]
  userData: UserDataType
  messages: MessageType[]
  isOpen: boolean
  closeChat: () => void
  className?: string
}

const Chat: FC<ChatProps> = ({
  dialogs,
  notifications,
  userData,
  messages,
  isOpen,
  closeChat,
  className,
}) => {
  const [currentWindow, setCurrentWindow] = useState<
    'dialogs-and-notifications' | 'dialog'
  >('dialogs-and-notifications')
  const [inputMessageValue, setInputMessageValue] = useState<string>('')

  const onInputMessageChange: React.ChangeEventHandler = event => {
    setInputMessageValue(event.target.nodeValue!)
  }

  const backToDialogs = () => {
    setCurrentWindow('dialogs-and-notifications')
  }

  const blockName = 'mobile-chat-wrap'

  const renderContent = () => {
    if (currentWindow === 'dialogs-and-notifications') {
      return (
        <DialogsAndNotifications
          dialogs={dialogs}
          notifications={notifications}
          onDialogClick={() => alert('open dialog')}
          onNotificationRemoveClick={() => alert('remove notification')}
        />
      )
    } else if (currentWindow === 'dialog') {
      return (
        <Dialog
          messages={messages}
          userData={userData}
          inputValue={inputMessageValue}
          inputOnChange={onInputMessageChange}
        />
      )
    }
  }

  return (
    <div
      className={cn(
        styles[`${blockName}`],
        { [styles[`${blockName}--close`]]: !isOpen },
        className
      )}
    >
      <div
        className={cn(styles[`${blockName}__blur`], {
          [styles[`${blockName}__blur--close`]]: !isOpen,
        })}
      ></div>
      <div
        className={cn(
          styles[`${blockName}__movable-container`],
          { [styles[`${blockName}__movable-container--open`]]: isOpen },
          { [styles[`${blockName}__movable-container--close`]]: !isOpen }
        )}
      >
        <CloseLabel
          label={
            currentWindow === 'dialogs-and-notifications'
              ? closeChatLabel
              : clickToReturnToDialogs
          }
          onClick={
            currentWindow === 'dialogs-and-notifications'
              ? closeChat
              : backToDialogs
          }
        />
        <ChatContainer className={styles[`${blockName}__chat-container`]}>
          {renderContent()}
        </ChatContainer>
      </div>
    </div>
  )
}

export default Chat
