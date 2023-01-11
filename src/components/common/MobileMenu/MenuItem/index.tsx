import React, { FC } from 'react'
import { IconNamesType } from '../../../ui/Icon'
import IconInCircle from '../../../ui/IconInCircle'
import { FormattedMessage } from 'react-intl'
import cn from 'classnames'

import styles from './style.module.scss'

type MenuItemProps = {
  iconName: IconNamesType
  text: string
  active?: boolean
  onClick?: () => void
  className?: string
}

const MenuItem: FC<MenuItemProps> = ({
  iconName,
  text,
  active,
  onClick,
  className,
}) => {
  const blockName = 'menu-item'

  return (
    <li className={cn(styles[`${blockName}`], className)} onClick={onClick}>
      <IconInCircle iconName={iconName} mod={active ? 'active' : null} />
      <div className={styles[`${blockName}__text`]}>
        <FormattedMessage id={text} />
      </div>
    </li>
  )
}

export default MenuItem
