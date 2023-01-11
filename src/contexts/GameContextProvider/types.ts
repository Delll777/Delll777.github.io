export type GamePreparationStages =
  | 'start-task'
  | 'waiting-opponent'
  | 'choose-cards'
  | 'opponent-choosing'
  | 'finish-preparations'

export type GameStages = 'not-game' | GamePreparationStages
export type WinnerType = 'not-yet' | 'user' | 'opponent'
export type MoverType = 'user' | 'opponent'

export type GameContextType = {
  openGameSocket: () => void
  startSearchingOpponent: () => void
  selectingCardOnClick: (id: number) => void
  sendSelectedCardsOnClick: () => void
  cancelSelectedCardsOnClick: () => void
  onOpponentCardClick: (cardId: number) => void
  opponentGuessedCardsCount: number
  selectedCardsCount: number
  maxSelectedCardsCount: number
  taskName: string
  gameStage: GameStages
  opponentData: OpponentData | null
  opponentCards: GameCard[]
  userCards: GameCard[]
  roundTime: number
  sessionTime: number //время игры
  currentMove: MoverType | null
  winner: WinnerType
  clearState: () => void
}

export type GameCardStatus = 'closed' | 'opened-true' | 'opened-false'

export type GameCard = {
  id: number
  imageUrl: string
  status: GameCardStatus
  selected?: boolean
}

export type OpponentData = {
  id: number
  avatarUrl: string
  name: string
}

export const contextDefaultData: GameContextType = {
  taskName: 'Изучение английского',
  gameStage: 'start-task',
  opponentData: {
    id: 0,
    avatarUrl: '',
    name: 'Дмитрий Измайлов',
  },
  opponentCards: [],
  userCards: [],
  roundTime: 30,
  sessionTime: 201,
  currentMove: 'user',
  winner: 'opponent',
  startSearchingOpponent: () => console.log('hello'),
  openGameSocket: () => console.log('hello'),
  selectingCardOnClick: id => {
    console.log('select card')
  },
  selectedCardsCount: 0,
  maxSelectedCardsCount: 3,
  sendSelectedCardsOnClick: () => {
    console.log('hello')
  },
  cancelSelectedCardsOnClick: () => {
    console.log('hello')
  },
  onOpponentCardClick: cardId => {
    console.log('on opponent card click')
  },
  opponentGuessedCardsCount: 0,
  clearState: () => {
    console.log('clear state')
  },
}
