import { UserData, LeagueData } from '../types'
import {
  SetAuthKeyActionDataType,
  SetUserDataActionDataType,
  SetUserLeaguesActionDataType,
} from './types'

export const setAuthKey: (key: string) => SetAuthKeyActionDataType = key => ({
  type: 'SET-AUTH-KEY',
  payload: {
    key,
  },
})

export const setUserData: (
  userData: UserData
) => SetUserDataActionDataType = userData => ({
  type: 'SET-USER-DATA',
  payload: {
    userData,
  },
})

export const setUserLeagues: (
  leagues: LeagueData[]
) => SetUserLeaguesActionDataType = leagues => ({
  type: 'SET-USER-LEAGUES',
  payload: {
    leagues,
  },
})
