import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import cn from 'classnames'

import styles from './style.module.scss'

type CloseLabelProps = {
  label: string
  onClick: (e: React.MouseEvent) => void
  className?: string
}

const CloseLabel: FC<CloseLabelProps> = ({ label, onClick, className }) => {
  const blockName = 'close-chat-label'

  return (
    <div className={cn(styles[`${blockName}`], className)} onClick={onClick}>
      <FormattedMessage id={label} />
    </div>
  )
}

export default CloseLabel
