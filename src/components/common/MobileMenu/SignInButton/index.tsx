import React, { FC } from 'react'
import { IconNamesType } from '../../../ui/Icon'
import IconInCircle from '../../../ui/IconInCircle'
import { FormattedMessage } from 'react-intl'
import cn from 'classnames'

import styles from './style.module.scss'

type SignInButtonProps = {
  iconName: IconNamesType
  text: string
  onClick?: () => void
  className?: string
}

const SignInButton: FC<SignInButtonProps> = ({
  iconName,
  text,
  onClick,
  className,
}) => {
  const blockName = 'sign-in-button'

  return (
    <div className={cn(styles[`${blockName}`], className)} onClick={onClick}>
      <IconInCircle
        iconName={iconName}
        className={styles[`${blockName}__image`]}
      />
      <div className={styles[`${blockName}__name`]}>
        <FormattedMessage id={text} />
      </div>
    </div>
  )
}

export default SignInButton
