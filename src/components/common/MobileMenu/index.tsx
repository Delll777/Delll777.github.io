import React, { FC } from 'react'
import Emblem from '../Emblem'
import MenuItem from './MenuItem'
import UserAvatarName from '../UserAvatarName'
import SignInButton from './SignInButton'
import PrimaryMenuButton from '../../ui/PrimaryMenuButton'
import { NavItemsType } from '../../../data/nav-bar/types'
import { signInButtonText } from '../../../data/nav-bar'
import { useHistory } from 'react-router-dom'
import routes from '../../../routing/routes'
import cn from 'classnames'

import styles from './style.module.scss'

type MobileMenuProps = {
  items: NavItemsType
  currentLocaleDisplayText: string
  changeLocale: any
  isOpen: boolean
  closeMenu: () => void
  userData?: {
    avatarUrl: string
    name: string
  } | null
  className?: string
}

const MobileMenu: FC<MobileMenuProps> = ({
  items,
  userData,
  isOpen,
  closeMenu,
  currentLocaleDisplayText,
  changeLocale,
}) => {
  const history = useHistory()

  const blockName = 'mobile-menu'

  const renderItems = items.map(({ iconName, text, slug }) => (
    <MenuItem
      iconName={iconName}
      text={text}
      className={styles[`${blockName}__menu-item`]}
      key={`${iconName}-${text}`}
      onClick={() => {
        history.push(slug)
      }}
    />
  ))

  return (
    <div
      className={cn(
        styles[`${blockName}`],
        { [styles[`${blockName}--open`]]: isOpen },
        { [styles[`${blockName}--close`]]: !isOpen }
      )}
    >
      <div
        className={cn(
          styles[`${blockName}__up-wrap`],
          styles[`${blockName}__wrap`]
        )}
      >
        <Emblem className={styles[`${blockName}__emblem`]} theme="light" />
        <ul className={styles[`${blockName}__menu`]}>{renderItems}</ul>
      </div>
      <div
        className={cn(
          styles[`${blockName}__down-wrap`],
          styles[`${blockName}__wrap`]
        )}
      >
        {userData ? (
          <UserAvatarName
            avatarUrl={userData.avatarUrl}
            name={userData.name}
            className={styles[`${blockName}__avatar-name`]}
          />
        ) : (
          <SignInButton
            iconName="exit"
            text={signInButtonText}
            className={styles[`${blockName}__sign-in-button`]}
            onClick={() => history.push(routes.login)}
          />
        )}
        <div className={styles[`${blockName}__footer`]}>
          <PrimaryMenuButton
            iconName="dir-up"
            onClick={closeMenu}
            theme="light"
          />
          <div
            className={styles[`${blockName}__change-lang`]}
            onClick={changeLocale}
          >
            {currentLocaleDisplayText}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
