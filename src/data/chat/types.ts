export type NotificationType = 'like' | 'match'

export type UserDataType = {
  name: string
  avatarUrl: string
  isOnline?: boolean
  status?: string
}

export type DialogPreviewType = {
  userData: UserDataType
  lastMessage: {
    isUserMessage: boolean
    message: string
  }
}

export type NotificationItemType = {
  userData: UserDataType
  notificationType: NotificationType
}

export type MessageOwnerType = 'user' | 'another-user'
export type MessageType = {
  id: number | string
  text: string
  owner: MessageOwnerType
}
