import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import cn from 'classnames'

import styles from './style.module.scss'

type ButtonProps = {
  text: string
  theme: 'gray' | 'blue' | 'dark' | 'yellow' | 'green'
  type: 'submit' | 'reset' | 'button'
  onClick?: React.MouseEventHandler
  className?: string
}

const Button: FC<ButtonProps> = ({ text, theme, type, onClick, className }) => {
  const blockName = 'button'

  return (
    <button
      className={cn(
        styles[`${blockName}`],
        styles[`${blockName}--${theme}`],
        className
      )}
      type={type}
      onClick={onClick}
    >
      <FormattedMessage id={text} />
    </button>
  )
}

export default Button
