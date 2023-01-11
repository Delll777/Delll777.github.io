import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import cn from 'classnames'

import styles from './style.module.scss'

type AuthContainerProps = {
  heading: string
  subHeading: string
  children: React.ReactNode
  className?: string
}

const AuthContainer: FC<AuthContainerProps> = ({
  heading,
  subHeading,
  children,
  className,
}) => {
  const blockName = 'auth-container'

  return (
    <div className={styles[`${blockName}`]}>
      <h4 className={styles[`${blockName}__heading`]}>
        <FormattedMessage id={heading} />
      </h4>
      <h5 className={styles[`${blockName}__sub-heading`]}>
        <FormattedMessage id={subHeading} />
      </h5>
      <div className={cn(styles[`${blockName}__content-wrap`], className)}>
        {children}
      </div>
    </div>
  )
}

export default AuthContainer
