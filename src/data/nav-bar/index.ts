import { NavItemsType } from './types'
import routes from '../../routing/routes'

export const navItems: NavItemsType = [
  {
    iconName: 'aim',
    text: 'navBar.startTask',
    slug: routes.gamePreparation,
  },
  {
    iconName: 'house',
    text: 'navBar.main',
    slug: routes.mainMenu,
  },
  {
    iconName: 'hearts',
    text: 'navBar.dating',
    slug: routes.root,
  },
  {
    iconName: 'purse',
    text: 'navBar.funPoints',
    slug: routes.root,
  },
  {
    iconName: 'libra',
    text: 'navBar.rules',
    slug: routes.root,
  },
  {
    iconName: 'lamp',
    text: 'navBar.aboutProject',
    slug: routes.root,
  },
]

export const signInButtonText = 'navBar.signInButton'
