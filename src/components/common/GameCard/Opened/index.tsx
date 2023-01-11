import React, { FC } from 'react'
import Icon from '../../../ui/Icon'
import cn from 'classnames'
import { GameCardStatus } from '../../../../contexts/GameContextProvider/types'

import styles from './style.module.scss'

type OpenedProps = {
  status: GameCardStatus
  className?: string
}

const Opened: FC<OpenedProps> = ({ status, className }) => {
  const blockName = 'opened'

  return (
    <div
      className={cn(
        styles[`${blockName}`],
        styles[`${blockName}--${status}`],
        className
      )}
    >
      <Icon
        name={
          status === 'opened-true' ? 'checkmark-for-card' : 'cross-for-card'
        }
        className={styles[`${blockName}__icon`]}
      />
    </div>
  )
}

export default Opened
