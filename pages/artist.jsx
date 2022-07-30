import React from 'react'
import Head from 'next/head'
import Layout from '../client/components/Layout/Layout'
import ArtistContainer from '../client/containers/Profile/ArtistContainer'

const artist = () => {
    return (
        <>
            <Head>
                <title>Spotify - Web Player</title>
            </Head>
            <Layout>
                <ArtistContainer />
            </Layout>
        </>
    )
}

export default artist