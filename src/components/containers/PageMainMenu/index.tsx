import React, { FC } from 'react'
import Greeting from '../../common/Greeting'
import { greeting } from '../../../data/page-main-menu'
import StartTask from '../../common/StartTask'
import { startTask } from '../../../data/start-task'
import { LeagueItemType } from '../../../data/start-task/types'
import { useSelector } from 'react-redux'
import { AppState } from '../../../store/types'
import routes from '../../../routing/routes'
import { useHistory } from 'react-router-dom'

import styles from './style.module.scss'

type PageMainMenuProps = {}

const PageMainMenu: FC<PageMainMenuProps> = () => {
  const history = useHistory()
  const userAuthKey = useSelector((state: AppState) => state.userAuthKey)
  const userLeagues = useSelector((state: AppState) => state.userLeagues)

  const signUpButtonOnClick = () => {}

  const signInButtonOnClick = () => {
    history.push(routes.login)
  }

  const blockName = 'page-main-menu'

  return (
    <div className={styles[`${blockName}`]}>
      {userAuthKey ? (
        <StartTask heading={startTask.heading} leagues={userLeagues} />
      ) : (
        <Greeting
          heading={greeting.heading}
          image={greeting.image}
          subhead={greeting.subhead}
          subtext={greeting.subtext}
          signInButtonText={greeting.signinButtonText}
          signUpButtonText={greeting.signUpButtonText}
          signInOnClick={signInButtonOnClick}
          signUpOnClick={signUpButtonOnClick}
        />
      )}
    </div>
  )
}

export default PageMainMenu
