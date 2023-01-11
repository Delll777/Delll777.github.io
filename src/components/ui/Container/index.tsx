import React, { FC } from 'react'
import cn from 'classnames'
import { FormattedMessage } from 'react-intl'

import styles from './style.module.scss'

type ContainerProps = {
  heading: string
  children: React.ReactNode
  className?: string
}

const Container: FC<ContainerProps> = ({ heading, children, className }) => {
  const blockName = 'container'

  return (
    <div className={cn(styles[`${blockName}`], className)}>
      <h4 className={styles[`${blockName}__heading`]}>
        <FormattedMessage id={heading} />
      </h4>
      {children}
    </div>
  )
}

export default Container
