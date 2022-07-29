import React from 'react'
import Head from 'next/dist/shared/lib/head'
import Layout from '../client/components/Layout/Layout'
import PlaylistContainer from '../client/containers/Playlist/PlaylistContainer'


const playlist = () => {
    return (
        <>
            <Head>
                <title>Spotify - Web Player</title>
            </Head>
            <Layout>
                <PlaylistContainer />
            </Layout>
        </>
    )
}

export default playlist