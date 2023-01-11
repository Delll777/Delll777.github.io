import { UserData, LeagueData } from '../types'

//типы экшенов
export type SetAuthKeyActionType = 'SET-AUTH-KEY'
export type SetUserDataActionType = 'SET-USER-DATA'
export type SetUserLeaguesActionType = 'SET-USER-LEAGUES'

export type ActionsTypes =
  | SetAuthKeyActionType
  | SetUserDataActionType
  | SetUserLeaguesActionType

//типы возвращаемых объектов
export type SetAuthKeyActionDataType = {
  type: SetAuthKeyActionType
  payload: {
    key: string
  }
}

export type SetUserDataActionDataType = {
  type: SetUserDataActionType
  payload: {
    userData: UserData
  }
}

export type SetUserLeaguesActionDataType = {
  type: SetUserLeaguesActionType
  payload: {
    leagues: LeagueData[]
  }
}

export type ActionsDataTypes =
  | SetAuthKeyActionDataType
  | SetUserDataActionDataType
  | SetUserLeaguesActionDataType
