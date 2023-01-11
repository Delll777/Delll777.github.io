import { apiRoot } from './constants'
import { getHeaderWithAuthToken } from './utils'
import axios from 'axios'

export const sendSelectedCards = async (
  cardsIds: number[],
  gameId: number,
  token: string
): Promise<void> => {
  const result = axios.post(
    `https://${apiRoot}/game/post_user_card/${gameId}`,
    {
      images: cardsIds,
    },
    {
      headers: { ...getHeaderWithAuthToken(token) },
    }
  )
}
