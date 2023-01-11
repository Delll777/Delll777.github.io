import { createStore } from 'redux'
import { AppState } from './types'
import { ActionsDataTypes } from './actions/types'

const initialState: AppState = {
  userAuthKey: null,
  userData: null,
  userLeagues: [],
}

function rootReducer(state = initialState, action: ActionsDataTypes): AppState {
  switch (action.type) {
    case 'SET-AUTH-KEY': {
      return {
        ...state,
        userAuthKey: action.payload.key,
      }
    }
    case 'SET-USER-DATA': {
      return {
        ...state,
        userData: action.payload.userData,
      }
    }
    case 'SET-USER-LEAGUES': {
      return {
        ...state,
        userLeagues: action.payload.leagues,
      }
    }
    default: {
      return {
        ...state,
      }
    }
  }
}

export default function configureStore() {
  const store = createStore(rootReducer)
  return store
}
