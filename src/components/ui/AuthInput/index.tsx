import React, { FC } from 'react'
import { FieldInputProps } from 'formik'
import { FormattedMessage } from 'react-intl'
import cn from 'classnames'

import styles from './style.module.scss'

type AuthInputProps = {
  label: string
  field: FieldInputProps<any>
  inputType: 'text' | 'email' | 'password'
  className?: string
}

const AuthInput: FC<AuthInputProps> = ({
  label,
  field,
  inputType,
  className,
}) => {
  const blockName = 'auth-input'

  return (
    <label className={cn(styles[`${blockName}`], className)}>
      <div className={styles[`${blockName}__label`]}>
        <FormattedMessage id={label} />
      </div>
      <input
        type={inputType}
        {...field}
        className={styles[`${blockName}__input`]}
      />
    </label>
  )
}

export default AuthInput
