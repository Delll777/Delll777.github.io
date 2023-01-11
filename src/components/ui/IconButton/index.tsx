import React, { FC } from 'react'
import cn from 'classnames'
import Icon from '../Icon'

import styles from './style.module.scss'

type IconButtonProps = {
  iconName: 'cross' | 'three-dots' | 'send-msg'
  onClick: (e: React.MouseEvent) => void
  mod?: 'gray-color'
  className?: string
}

const IconButton: FC<IconButtonProps> = ({
  iconName,
  onClick,
  mod,
  className,
}) => {
  const blockName = 'icon-button'

  return (
    <button
      className={cn(
        styles[`${blockName}`],
        { [styles[`${blockName}--${mod}`]]: mod },
        className
      )}
    >
      <Icon name={iconName} />
    </button>
  )
}

export default IconButton
