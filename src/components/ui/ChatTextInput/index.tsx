import React, { FC } from 'react'
import { useIntl } from 'react-intl'
import cn from 'classnames'

import styles from './style.module.scss'

type ChatTextInputProps = {
  value: string
  onChange: React.ChangeEventHandler
  placeholder: string
  className?: string
}

const ChatTextInput: FC<ChatTextInputProps> = ({
  value,
  onChange,
  placeholder,
  className,
}) => {
  const intl = useIntl()

  const blockName = 'chat-text'

  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={intl.formatMessage({ id: placeholder })}
      className={cn(styles[`${blockName}`], className)}
    />
  )
}

export default ChatTextInput
