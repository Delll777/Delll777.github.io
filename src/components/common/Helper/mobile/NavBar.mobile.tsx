import React, { FC, useState } from 'react'
import PrimaryMenuButton from '../../../ui/PrimaryMenuButton'
import Emblem from '../../Emblem'
import MobileMenu from '../../MobileMenu'
import Chat from '../../Chat'
import { NavItemsType } from '../../../../data/nav-bar/types'
import { AppState } from '../../../../store/types'
import { useSelector } from 'react-redux'
import cn from 'classnames'

import styles from './style.module.scss'

type NavBarProps = {
  items: NavItemsType
  currentLocaleDisplayText: string
  changeLocale: any
  auth?: boolean
  theme: 'light' | 'dark'
  children?: React.ReactNode
  className?: string
}

const NavBar: FC<NavBarProps> = ({
  items,
  currentLocaleDisplayText,
  changeLocale,
  auth,
  theme,
  children,
  className,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false)

  const userData = useSelector((state: AppState) => {
    if (state.userData) {
      return {
        avatarUrl: state.userData?.avatarURL,
        name: state.userData?.name,
      }
    } else {
      return null
    }
  })

  const openMenu = () => {
    setIsMenuOpen(true)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const openChat = () => {
    setIsChatOpen(true)
  }

  const closeChat = () => {
    setIsChatOpen(false)
  }

  const blockName = 'nav-bar-mobile'

  return (
    <>
      <header
        className={cn(
          styles[`${blockName}`],
          styles[`${blockName}--${theme}`],
          className
        )}
      >
        <PrimaryMenuButton iconName="menu" onClick={openMenu} theme={theme} />
        <Emblem theme={theme} />
        <PrimaryMenuButton
          iconName="chat"
          onClick={openChat}
          className={cn(styles[`${blockName}__open-chat-button`], {
            [styles[`${blockName}__open-chat-button--hidden`]]: auth,
          })}
          theme={theme}
        />
        <MobileMenu
          items={items}
          isOpen={isMenuOpen}
          currentLocaleDisplayText={currentLocaleDisplayText}
          changeLocale={changeLocale}
          closeMenu={closeMenu}
          userData={userData}
        />
        <Chat isOpen={isChatOpen} closeChat={closeChat} />
      </header>
      {children}
    </>
  )
}

export default NavBar
