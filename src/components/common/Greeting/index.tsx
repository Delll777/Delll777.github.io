import React, { FC } from 'react'
import Container from '../../ui/Container'
import { FormattedMessage } from 'react-intl'
import PrimaryButton from '../../ui/PrimaryButton'
import SecondaryButton from '../../ui/SecondaryButton'
import cn from 'classnames'

import styles from './style.module.scss'

type GreetingProps = {
  heading: string
  image: any
  subhead: string
  subtext: string
  signInButtonText: string
  signUpButtonText: string
  signInOnClick: React.MouseEventHandler
  signUpOnClick: React.MouseEventHandler
  className?: string
}

const Greeting: FC<GreetingProps> = ({
  heading,
  image,
  subhead,
  subtext,
  signInButtonText,
  signUpButtonText,
  signInOnClick,
  signUpOnClick,
  className,
}) => {
  const blockName = 'greeting-block'

  return (
    <Container
      heading={heading}
      className={cn(styles[`${blockName}`], className)}
    >
      <img src={image} alt="alt" className={styles[`${blockName}__image`]} />
      <h5 className={styles[`${blockName}__subhead`]}>
        <FormattedMessage id={subhead} />
      </h5>
      <div className={styles[`${blockName}__subtext`]}>
        <FormattedMessage id={subtext} />
      </div>
      <div className={styles[`${blockName}__buttons`]}>
        <SecondaryButton text={signInButtonText} onClick={signInOnClick} />
        <PrimaryButton text={signUpButtonText} onClick={signUpOnClick} />
      </div>
    </Container>
  )
}

export default Greeting
