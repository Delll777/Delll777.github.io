import React, { FC } from 'react'
import Icon from '../../../../ui/Icon'
import cn from 'classnames'

import styles from './style.module.scss'

type ChooseMarkProps = {
  onClick: any
  selected: boolean
  className?: string
}

const ChooseMark: FC<ChooseMarkProps> = ({ selected, className, onClick }) => {
  const blockName = 'choose-mark'

  return (
    <div
      className={cn(
        styles[`${blockName}`],
        {
          [styles[`${blockName}--selected`]]: selected,
        },
        className
      )}
      onClick={onClick}
    >
      <Icon
        name="checkmark"
        className={cn(styles[`${blockName}__icon`], {
          [styles[`${blockName}__icon--selected`]]: selected,
        })}
      />
    </div>
  )
}

export default ChooseMark
