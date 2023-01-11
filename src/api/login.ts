import axios from 'axios'
import { apiRoot } from './constants'
import { getHeaderWithAuthToken } from './utils'
import { UserData, LeagueData } from '../store/types'

//возвращает authKey пользователя
export async function requestUserAuthKey(
  email: string,
  password: string
): Promise<string> {
  const result = await axios.post(`https://${apiRoot}/member/auth/login/`, {
    username: email,
    password: password,
  })
  return result.data.key
}

export async function requestUserData(token: string): Promise<UserData> {
  const dataRequestResult = await axios.get(`https://${apiRoot}/member/`, {
    headers: { ...getHeaderWithAuthToken(token) },
  })
  const userData: UserData = {
    id: dataRequestResult.data.data.id,
    name: `${dataRequestResult.data.data.userprofile.first_name} ${dataRequestResult.data.data.userprofile.last_name}`,
    avatarURL: '',
  }
  return userData
}

export async function requestUserLeagues(token: string): Promise<LeagueData[]> {
  const result = await axios.get(`https://${apiRoot}/member/your_leagues/`, {
    headers: { ...getHeaderWithAuthToken(token) },
  })
  const userLeagues: LeagueData[] = result.data.data.map(data => {
    const league: LeagueData = {
      id: data.id,
      leagueName: data.league.name,
      leagueImage: data.league.photo,
      userPlace: 0,
      tasksLeft: 0,
    }
    return league
  })
  return userLeagues
}
