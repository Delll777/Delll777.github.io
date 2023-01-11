import React, { FC } from 'react'
import Layout from '../../layouts/default'
import PageMainMenu from '../../components/containers/PageMainMenu'

type MainMenuPageProps = {}

const MainMenuPage: FC<MainMenuPageProps> = () => {
  return (
    <Layout>
      <PageMainMenu />
    </Layout>
  )
}

export default MainMenuPage
