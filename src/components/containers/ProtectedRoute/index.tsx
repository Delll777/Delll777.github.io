import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../../store/types'
import { Redirect } from 'react-router-dom'

type ProtectedRouteProps = {
  redirectTo: string
  children: React.ReactNode
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ redirectTo, children }) => {
  const userAuthKey = useSelector((state: AppState) => state.userAuthKey)

  if (userAuthKey) {
    return <>{children}</>
  } else {
    return <Redirect to={`${redirectTo}`} />
  }
}

export default ProtectedRoute
