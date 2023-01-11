export type UserData = {
  id: number
  name: string
  avatarURL: string
}

export type LeagueData = {
  id: number
  leagueName: string
  leagueImage: string
  userPlace: number
  tasksLeft: number
}

export type AppState = {
  userAuthKey: string | null
  userData: UserData | null
  userLeagues: LeagueData[]
}
