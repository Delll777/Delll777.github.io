import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import cn from 'classnames'

import styles from './style.module.scss'

type SecondaryButtonProps = {
  text: string
  onClick: (e: React.MouseEvent) => void
  className?: string
}

const SecondaryButton: FC<SecondaryButtonProps> = ({
  text,
  onClick,
  className,
}) => {
  const blockName = 'secondary-button'

  return (
    <button className={cn(styles[`${blockName}`], className)} onClick={onClick}>
      <FormattedMessage id={text} />
    </button>
  )
}

export default SecondaryButton
