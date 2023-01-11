import React, { FC } from 'react'
import UserAvatarNameStatus from '../../UserAvatarNameStatus'
import LastMessageStatus from '../LastMessageStatus'
import NotificationStatus from '../NotificationStatus'
import IconButton from '../../../ui/IconButton'
import {
  dialogsTitle,
  notificationsTitle,
  likeNotificationLabel,
  matchNotificationLabel,
  userMessageLabel,
  newMessageLabel,
} from '../../../../data/chat'
import {
  DialogPreviewType,
  NotificationItemType,
} from '../../../../data/chat/types'
import cn from 'classnames'

import styles from './style.module.scss'
import { FormattedMessage } from 'react-intl'

type DialogsAndNotificationsProps = {
  dialogs: DialogPreviewType[]
  notifications: NotificationItemType[]
  onDialogClick: (dialogId: string | number) => void
  onNotificationRemoveClick: (notificationId: string | number) => void
  className?: string
}

const DialogsAndNotifications: FC<DialogsAndNotificationsProps> = ({
  dialogs,
  notifications,
  className,
}) => {
  const blockName = 'dialogs-and-notifications-wrap'

  const renderDialogs = dialogs.map(({ userData, lastMessage }) => (
    <li
      className={cn(
        styles[`${blockName}__dialog-item`],
        styles[`${blockName}__list-item`]
      )}
      key={`${userData.name}__${lastMessage.message}`}
    >
      <UserAvatarNameStatus
        name={userData.name}
        avatarUrl={userData.avatarUrl}
        isOnline={userData.isOnline}
        nameMod="secondary"
        avatarMod="low-size"
      >
        <LastMessageStatus
          isUserMessage={lastMessage.isUserMessage}
          message={lastMessage.message}
          userMessageLabel={userMessageLabel}
          newMessageLabel={newMessageLabel}
        />
      </UserAvatarNameStatus>
    </li>
  ))

  const renderNotifications = notifications.map(
    ({ userData, notificationType }) => (
      <li
        className={cn(
          styles[`${blockName}__notification-item`],
          styles[`${blockName}__list-item`]
        )}
        key={`${userData.name}__${notificationType}`}
      >
        <UserAvatarNameStatus
          name={userData.name}
          avatarUrl={userData.avatarUrl}
          isOnline={userData.isOnline}
          nameMod="secondary"
          avatarMod="low-size"
        >
          <NotificationStatus
            statusType={notificationType}
            labels={{
              like: likeNotificationLabel,
              match: matchNotificationLabel,
            }}
          />
        </UserAvatarNameStatus>
        <IconButton
          iconName="cross"
          mod="gray-color"
          onClick={() => alert('remove notification')}
        />
      </li>
    )
  )

  return (
    <div className={cn(styles[`${blockName}`], className)}>
      <div
        className={cn(
          styles[`${blockName}__dialogs-wrap`],
          styles[`${blockName}__items-wrap`],
          {
            [styles[`${blockName}__items-wrap--equal`]]:
              notifications.length === dialogs.length && dialogs.length === 0,
          }
        )}
      >
        <h3 className={styles[`${blockName}__title`]}>
          <FormattedMessage id={dialogsTitle} />
        </h3>
        <ul
          className={cn(
            styles[`${blockName}__dialogs`],
            styles[`${blockName}__list`]
          )}
        >
          {renderDialogs}
        </ul>
      </div>
      <div
        className={cn(
          styles[`${blockName}__notifications-wrap`],
          styles[`${blockName}__items-wrap`],
          {
            [styles[`${blockName}__items-wrap--equal`]]:
              notifications.length === dialogs.length && dialogs.length === 0,
          }
        )}
      >
        <h3 className={styles[`${blockName}__title`]}>
          <FormattedMessage id={notificationsTitle} />
        </h3>
        <ul
          className={cn(
            styles[`${blockName}__notifications`],
            styles[`${blockName}__list`]
          )}
        >
          {renderNotifications}
        </ul>
      </div>
    </div>
  )
}

export default DialogsAndNotifications
