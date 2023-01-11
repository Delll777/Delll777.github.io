import React, { FC } from 'react'
import Mobile from './mobile'

import { DialogPreviewType, MessageType } from '../../../data/chat/types'
import { NotificationItemType, UserDataType } from '../../../data/chat/types'

type ChatProps = {
  isOpen: boolean
  closeChat: () => void
}

//mock
const dialogs: DialogPreviewType[] = [
  {
    userData: {
      name: 'Иванов Иван',
      avatarUrl:
        'https://avatars.mds.yandex.net/get-zen_doc/174930/pub_5d7692c16f5f6f00aed820ed_5d7694793d008800ad99f6d4/scale_1200',
    },
    lastMessage: {
      isUserMessage: false,
      message: 'Как там с деньгами?',
    },
  },
]

const notifications: NotificationItemType[] = [
  {
    userData: {
      name: 'Евгения Солнцеедова',
      avatarUrl:
        'https://verdiclub.ru/wp-content/uploads/2020/08/portret-vzglyad-sharfik.jpg',
    },
    notificationType: 'like',
  },
]

const userData: UserDataType = {
  name: 'Евгения Солнцеедова',
  avatarUrl:
    'https://verdiclub.ru/wp-content/uploads/2020/08/portret-vzglyad-sharfik.jpg',
  status: 'Выполняет задание',
}

const messages: MessageType[] = [
  {
    id: 0,
    text: 'Hello',
    owner: 'user',
  },
  {
    id: 1,
    text: 'Привет',
    owner: 'another-user',
  },
  {
    id: 2,
    text: 'Hello',
    owner: 'user',
  },
  {
    id: 3,
    text: 'Привет',
    owner: 'another-user',
  },
  {
    id: 4,
    text: 'Hello',
    owner: 'user',
  },
  {
    id: 5,
    text: 'Привет',
    owner: 'another-user',
  },
  {
    id: 6,
    text: 'Hello',
    owner: 'user',
  },
  {
    id: 7,
    text: 'Привет',
    owner: 'another-user',
  },
  {
    id: 8,
    text: 'Hello HelloHel loHello HelloHe lloHelloHelloHe lloHello',
    owner: 'user',
  },
  {
    id: 9,
    text: 'Привет',
    owner: 'another-user',
  },
  {
    id: 10,
    text: 'Привет',
    owner: 'another-user',
  },
  {
    id: 11,
    text: 'Hello',
    owner: 'user',
  },
  {
    id: 12,
    text: 'Привет',
    owner: 'another-user',
  },
  {
    id: 13,
    text: 'Hello HelloHel loHello HelloHe lloHelloHelloHe lloHello',
    owner: 'user',
  },
  {
    id: 14,
    text: 'Привет',
    owner: 'another-user',
  },
  {
    id: 15,
    text: 'Привет',
    owner: 'another-user',
  },
  {
    id: 16,
    text: 'Hello',
    owner: 'user',
  },
  {
    id: 17,
    text: 'Привет',
    owner: 'another-user',
  },
  {
    id: 18,
    text: 'Hello HelloHel loHello HelloHe lloHelloHelloHe lloHello',
    owner: 'user',
  },
  {
    id: 19,
    text: 'Привет',
    owner: 'another-user',
  },
]

const Chat: FC<ChatProps> = ({ isOpen, closeChat }) => {
  return (
    <>
      <Mobile
        isOpen={isOpen}
        closeChat={closeChat}
        dialogs={dialogs}
        notifications={notifications}
        userData={userData}
        messages={messages}
      />
    </>
  )
}

export default Chat
