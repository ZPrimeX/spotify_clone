import { Button } from '@mui/material'
import Head from 'next/head'
import HomeContainer from '../client/containers/Home/HomeContainer'
import Layout from '../client/components/Layout/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Spotify - Web Player</title>
      </Head>
      <Layout>
        <HomeContainer />
      </Layout>
    </>
  )
}
