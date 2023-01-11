import React from 'react'
import styles from './App.module.scss'
import { IntlProvider } from 'react-intl'
import { LocaleContext } from './translationUtils'
import { messages } from './translations'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './routing/routes'
import GameContextProvider from './contexts/GameContextProvider'
import ProtectedRoute from './components/containers/ProtectedRoute'

import MainMenu from './pages/MainMenu'
import Login from './pages/Login'
import GamePreparation from './pages/GamePreparation'
import GameResult from './pages/GameResult'
import Game from './pages/Game'

function App() {
  const [locale] = React.useContext(LocaleContext)

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <GameContextProvider>
        <div className={styles[`App`]}>
          <Router>
            <Switch>
              <Route path={`${routes.mainMenu}`}>
                <MainMenu />
              </Route>
              <Route path={`${routes.login}`}>
                <Login />
              </Route>
              <Route path={`${routes.gamePreparation}`}>
                <ProtectedRoute redirectTo={`${routes.mainMenu}`}>
                  <GamePreparation />
                </ProtectedRoute>
              </Route>
              <Route path={`${routes.game}`}>
                <ProtectedRoute redirectTo={`${routes.mainMenu}`}>
                  <Game />
                </ProtectedRoute>
              </Route>
              <Route path={`${routes.gameResult}`}>
                <ProtectedRoute redirectTo={`${routes.mainMenu}`}>
                  <GameResult />
                </ProtectedRoute>
              </Route>
              <Route path="/">
                <MainMenu />
              </Route>
            </Switch>
          </Router>
        </div>
      </GameContextProvider>
    </IntlProvider>
  )
}

export default App
