import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import cn from 'classnames'

import styles from './style.module.scss'

type PrimaryButtonProps = {
  text: string
  onClick: (e: React.MouseEvent) => void
  className?: string
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
  text,
  onClick,
  className,
}) => {
  const blockName = 'primary-button'

  return (
    <button className={cn(styles[`${blockName}`], className)} onClick={onClick}>
      <FormattedMessage id={text} />
    </button>
  )
}

export default PrimaryButton
