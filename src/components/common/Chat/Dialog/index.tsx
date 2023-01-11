import React, { FC } from 'react'
import UserAvatarNameStatus from '../../UserAvatarNameStatus'
import { UserDataType, MessageType } from '../../../../data/chat/types'
import { enterMessageText } from '../../../../data/chat'
import PrimaryMenuButton from '../../../ui/PrimaryMenuButton'
import Message from '../Message'
import ChatTextInput from '../../../ui/ChatTextInput'
import IconButton from '../../../ui/IconButton'
import cn from 'classnames'

import styles from './style.module.scss'

type DialogProps = {
  inputValue: string
  inputOnChange: React.ChangeEventHandler
  userData: UserDataType
  messages: MessageType[]
  className?: string
}

const Dialog: FC<DialogProps> = ({
  inputValue,
  inputOnChange,
  userData,
  messages,
  className,
}) => {
  const blockName = 'dialog'

  const renderMessages = messages.map(({ id, text, owner }) => (
    <Message
      message={text}
      owner={owner}
      className={styles[`${blockName}__message`]}
      key={id}
    />
  ))

  return (
    <div className={cn(styles[`${blockName}`], className)}>
      <div className={styles[`${blockName}__head`]}>
        <UserAvatarNameStatus
          avatarUrl={userData.avatarUrl}
          name={userData.name}
          nameMod="primary"
          avatarMod="low-size"
        >
          {userData.status}
        </UserAvatarNameStatus>
        <PrimaryMenuButton
          iconName="three-dots"
          onClick={() => alert('open chat context menu')}
          theme="transparent-bg"
        />
      </div>
      <div className={styles[`${blockName}__messages-container`]}>
        {renderMessages}
      </div>
      <div className={styles[`${blockName}__bottom`]}>
        <ChatTextInput
          placeholder={enterMessageText}
          value={inputValue}
          onChange={inputOnChange}
          className={styles[`${blockName}__input`]}
        />
        <IconButton iconName="send-msg" onClick={() => alert('send message')} />
      </div>
    </div>
  )
}

export default Dialog
