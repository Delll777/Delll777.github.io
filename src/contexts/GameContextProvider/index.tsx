import React, { FC, useState, useEffect } from 'react'
import {
  GameContextType,
  GameStages,
  OpponentData,
  GameCard,
  MoverType,
  WinnerType,
  contextDefaultData,
} from './types'
import { apiRoot } from '../../api/constants'
import { AppState } from '../../store/types'
import { useSelector } from 'react-redux'
import { sendSelectedCards } from '../../api/gameCardsSelecting'

export const GameContext = React.createContext<GameContextType>(
  contextDefaultData
)

type GameContextProviderProps = {
  children: React.ReactNode
}

const GameContextProvider: FC<GameContextProviderProps> = ({ children }) => {
  const [gameId, setGameId] = useState<number>()
  const [gameSocket, setGameSocket] = useState<WebSocket>()
  const [gameStage, setGameStage] = useState<GameStages>('start-task')
  const [opponentData, setOponentData] = useState<OpponentData | null>(null)
  const [opponentCards, setOpponentCards] = useState<GameCard[]>([])
  const [userCards, setUserCards] = useState<GameCard[]>([])
  const [currentMove, setCurrentMove] = useState<MoverType | null>(null)
  const [winner, setWinner] = useState<WinnerType>('not-yet')
  const [selectedCardsCount, setSelectedCardsCount] = useState<number>(0)
  const [maxSelectedCardsCount, setMaxSelectedCardsCount] = useState<number>(3)
  const [
    opponentGuessedCardsCount,
    setOpponentGuessedCardsCount,
  ] = useState<number>(0)

  const [selectedCardsArray, setSelectedCardsArray] = useState<number[]>([])

  const userAuthData = useSelector((state: AppState) => ({
    chat_id: state.userData?.id,
    token: state.userAuthKey,
  }))

  const userToken = useSelector((state: AppState) => state.userAuthKey)

  const openGameSocket = () => {}

  useEffect(() => {
    if (gameSocket !== undefined) {
      gameSocket.onopen = ev => {
        const openData = {
          ...userAuthData,
          text: '|open|',
        }
        gameSocket?.send(JSON.stringify(openData))
      }
      gameSocket.onmessage = ev => {
        const data = JSON.parse(ev.data)
        switch (data.event) {
          case 'AUTHORIZATION': {
            const startSearchingEvData = {
              event: 'join_to_lobby',
              league_id: 1,
            }
            gameSocket?.send(JSON.stringify(startSearchingEvData))
            break
          }
          case 'GAME-CREATED': {
            setGameId(data.data.id)
            const opponent = {
              id: data.data.opponent.id,
              name: `${data.data.opponent.userprofile.first_name} ${data.data.opponent.userprofile.last_name}`,
              avatarUrl: '',
            }
            setOponentData(opponent)
            const userCards: GameCard[] = data.data.creator_cards.map(card => ({
              id: card.id,
              imageUrl: card.image,
              status: 'closed',
              selected: false,
            }))
            setUserCards(userCards)
            const opponentCards: GameCard[] = data.data.opponent_cards.map(
              card => ({
                id: card.id,
                imageUrl: card.image,
                status: 'closed',
              })
            )
            setOpponentCards(opponentCards)
            setGameStage('choose-cards')
            break
          }
          case 'NEW-STATUS': {
            const data = JSON.parse(ev.data)
            if (data.status === 2) {
              //начало игры
              setGameStage('finish-preparations')
              if (data.step === 'USER') {
                setCurrentMove('user')
              } else if (data.step === 'OPPONENT') {
                setCurrentMove('opponent')
              }
            } else if (data.status === 3) {
              //результат игры
              if (data.winner === 'USER') {
                setWinner('user')
              } else if (data.winner === 'OPPONENT') {
                setWinner('opponent')
              }
              gameSocket.close()
            }
            break
          }
          case 'CHECK-CARD': {
            const data = JSON.parse(ev.data)
            const opCards: GameCard[] = opponentCards.map(card => {
              if (card.id === +data.data.data.card) {
                if (data.data.data.guessed) {
                  return {
                    ...card,
                    status: 'opened-true',
                  }
                } else {
                  return {
                    ...card,
                    status: 'opened-false',
                  }
                }
              }
              return card
            })
            setOpponentCards(opCards)
            setCurrentMove('opponent')
            break
          }
          case 'CHECK-YOUR-CARD': {
            const data = JSON.parse(ev.data)
            const uCards: GameCard[] = userCards.map(card => {
              if (card.id === +data.data.data.card) {
                if (data.data.data.guessed) {
                  setOpponentGuessedCardsCount(opponentGuessedCardsCount + 1)
                  return {
                    ...card,
                    status: 'opened-true',
                  }
                } else {
                  return {
                    ...card,
                    status: 'opened-false',
                  }
                }
              }
              return card
            })
            setUserCards(uCards)
            setCurrentMove('user')
            break
          }
        }
      }
    }
  }, [
    gameSocket,
    opponentCards,
    userCards,
    userAuthData,
    opponentGuessedCardsCount,
    setOpponentGuessedCardsCount,
  ])

  const clearState = () => {
    setOpponentCards([])
    setUserCards([])
    setOpponentGuessedCardsCount(0)
    setWinner('not-yet')
    setGameStage('start-task')
    setSelectedCardsCount(0)
    setSelectedCardsArray([])
    setGameId(undefined)
  }

  const startSearchingOpponent = () => {
    setGameSocket(new WebSocket(`ws://${apiRoot}/async_logic/game`))
    setGameStage('waiting-opponent')
  }

  const selectingCardOnClick = (id: number) => {
    if (selectedCardsArray.includes(id)) {
      //отменяем выбор
      console.log('отменяем выбор ' + id)
      /*
      const selCards = selectedCardsArray.filter(cardId => id !== cardId)
      const uCards: GameCard[] = userCards.map(card => {
        if (card.id === id) {
          return {
            ...card,
            selected: false,
          }
        }
        return { ...card }
      })
      setSelectedCardsArray(selCards)
      setSelectedCardsCount(selectedCardsCount - 1)
      setUserCards(uCards)
      */
    } else {
      if (selectedCardsCount >= maxSelectedCardsCount) {
        return
      }
      const selCards = [...selectedCardsArray, id]
      const uCards: GameCard[] = userCards.map(card => {
        if (card.id === id) {
          return ({
            ...card,
            selected: true,
          })
        }
        return ({ ...card })
      })
      setSelectedCardsArray(selCards)
      setSelectedCardsCount(selectedCardsCount + 1)
      setUserCards(uCards)
    }
  }

  const sendSelectedCardsOnClick = async () => {
    sendSelectedCards(selectedCardsArray, gameId!, userToken!)
    setGameStage('opponent-choosing')
  }

  const cancelSelectedCardsOnClick = () => {}

  const onOpponentCardClick = (cardId: number) => {
    if (winner !== 'not-yet') {
      return
    }
    const isCardClicked = opponentCards.some(({ id, status }) => {
      if (cardId === id && status !== 'closed') {
        return true
      }
      return false
    })
    if (isCardClicked) {
      return
    }
    const data = {
      event: 'CHECK-CARD',
      card: cardId,
      game_id: gameId,
    }
    gameSocket?.send(JSON.stringify(data))
  }

  const contextValue: GameContextType = {
    taskName: 'Топ 10',
    gameStage: gameStage,
    opponentData: opponentData,
    opponentCards: opponentCards,
    userCards: userCards,
    roundTime: 100,
    sessionTime: 100,
    currentMove: currentMove,
    winner: winner,
    startSearchingOpponent: startSearchingOpponent,
    openGameSocket: openGameSocket,
    selectingCardOnClick: selectingCardOnClick,
    selectedCardsCount: selectedCardsCount,
    maxSelectedCardsCount: maxSelectedCardsCount,
    sendSelectedCardsOnClick: sendSelectedCardsOnClick,
    cancelSelectedCardsOnClick: cancelSelectedCardsOnClick,
    onOpponentCardClick: onOpponentCardClick,
    opponentGuessedCardsCount: opponentGuessedCardsCount,
    clearState: clearState,
  }

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  )
}

export default GameContextProvider
