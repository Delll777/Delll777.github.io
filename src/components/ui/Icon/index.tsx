import React, { FC } from 'react'
import cn from 'classnames'
import styles from './style.module.scss'

import LogoPath, { ReactComponent as Logo } from '../../../images/svg/logo.svg'
import ExitPath, { ReactComponent as Exit } from '../../../images/svg/exit.svg'
import DirDownPath, {
  ReactComponent as DirDown,
} from '../../../images/svg/dir-down.svg'
import DirUpPath, {
  ReactComponent as DirUp,
} from '../../../images/svg/dir-up.svg'
import HeartsPath, {
  ReactComponent as Hearts,
} from '../../../images/svg/hearts.svg'
import HousePath, {
  ReactComponent as House,
} from '../../../images/svg/house.svg'
import LampPath, { ReactComponent as Lamp } from '../../../images/svg/lamp.svg'
import LibraPath, {
  ReactComponent as Libra,
} from '../../../images/svg/libra.svg'
import PursePath, {
  ReactComponent as Purse,
} from '../../../images/svg/purse.svg'
import WorldOfClickIconPath, {
  ReactComponent as WorldOfClickIcon,
} from '../../../images/svg/world-of-click-icon.svg'
import MenuPath, { ReactComponent as Menu } from '../../../images/svg/menu.svg'
import ChatPath, { ReactComponent as Chat } from '../../../images/svg/chat.svg'
import AimPath, { ReactComponent as Aim } from '../../../images/svg/aim.svg'
import CrossPath, {
  ReactComponent as Cross,
} from '../../../images/svg/cross.svg'
import ThreeDotsPath, {
  ReactComponent as ThreeDots,
} from '../../../images/svg/three-dots.svg'
import SendMsgPath, {
  ReactComponent as SendMsg,
} from '../../../images/svg/send-msg.svg'
import LeftArrowPath, {
  ReactComponent as LeftArrow,
} from '../../../images/svg/left-arrow.svg'
import RightArrowPath, {
  ReactComponent as RightArrow,
} from '../../../images/svg/right-arrow.svg'
import EmptyAvatarPlaceholderPath, {
  ReactComponent as EmptyAvatarPlaceholder,
} from '../../../images/svg/empty-avatar-placeholder.svg'
import CardToChoosePlaceholderMobilePath, {
  ReactComponent as CardToChoosePlaceholderMobile,
} from '../../../images/svg/card-to-choose-placeholder-mobile.svg'
import CheckmarkPath, {
  ReactComponent as Checkmark,
} from '../../../images/svg/checkmark.svg'
import CheckmarkForCardPath, {
  ReactComponent as CheckmarkForCard,
} from '../../../images/svg/checkmark-for-card.svg'
import CrossForCardPath, {
  ReactComponent as CrossForCard,
} from '../../../images/svg/cross-for-card.svg'

export const iconsMap = {
  logo: {
    component: Logo,
    path: LogoPath,
  },
  exit: {
    component: Exit,
    path: ExitPath,
  },
  'dir-down': {
    component: DirDown,
    path: DirDownPath,
  },
  'dir-up': {
    component: DirUp,
    path: DirUpPath,
  },
  hearts: {
    component: Hearts,
    path: HeartsPath,
  },
  house: {
    component: House,
    path: HousePath,
  },
  lamp: {
    component: Lamp,
    path: LampPath,
  },
  libra: {
    component: Libra,
    path: LibraPath,
  },
  purse: {
    component: Purse,
    path: PursePath,
  },
  'world-of-click-icon': {
    component: WorldOfClickIcon,
    path: WorldOfClickIconPath,
  },
  menu: {
    component: Menu,
    path: MenuPath,
  },
  chat: {
    component: Chat,
    path: ChatPath,
  },
  aim: {
    component: Aim,
    path: AimPath,
  },
  cross: {
    component: Cross,
    path: CrossPath,
  },
  'three-dots': {
    component: ThreeDots,
    path: ThreeDotsPath,
  },
  'send-msg': {
    component: SendMsg,
    path: SendMsgPath,
  },
  'left-arrow': {
    component: LeftArrow,
    path: LeftArrowPath,
  },
  'right-arrow': {
    component: RightArrow,
    path: RightArrowPath,
  },
  'empty-avatar-placeholder': {
    component: EmptyAvatarPlaceholder,
    path: EmptyAvatarPlaceholderPath,
  },
  'card-to-choose-placeholder-mobile': {
    component: CardToChoosePlaceholderMobile,
    path: CardToChoosePlaceholderMobilePath,
  },
  checkmark: {
    component: Checkmark,
    path: CheckmarkPath,
  },
  'checkmark-for-card': {
    component: CheckmarkForCard,
    path: CheckmarkForCardPath,
  },
  'cross-for-card': {
    component: CrossForCard,
    path: CrossForCardPath,
  },
}

export type IconNamesType = keyof typeof iconsMap

export type IconProps = {
  name: IconNamesType
  className?: string
}

const Icon: FC<IconProps> = ({ name, className }) => {
  const IconComponent = iconsMap[name].component || 'span'

  const blockName = 'svg-icon'

  return (
    <i role="img" className={cn(styles[`${blockName}`], className)}>
      <IconComponent />
    </i>
  )
}

export default Icon
