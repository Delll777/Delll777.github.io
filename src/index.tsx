import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import LocaleContextProvider from './translationUtils'
import { Provider } from 'react-redux'
import configureStore from './store'

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <LocaleContextProvider>
        <App />
      </LocaleContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
