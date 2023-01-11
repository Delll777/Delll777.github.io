import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import cn from 'classnames'
import styles from './style.module.scss'

type LabelProps = {
  text: string
  theme: 'white' | 'dark'
  className?: string
}

const Label: FC<LabelProps> = ({ text, theme, className }) => {
  const blockName = 'label'

  return (
    <div
      className={cn(
        styles[`${blockName}`],
        styles[`${blockName}--${theme}`],
        className
      )}
    >
      <FormattedMessage id={text} />
    </div>
  )
}

export default Label
