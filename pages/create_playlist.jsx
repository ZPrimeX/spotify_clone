import React from 'react'
import Head from 'next/dist/shared/lib/head'
import Layout from '../client/components/Layout/Layout'
import CreatePlaylistContainer from '../client/containers/Playlist/CreatePlaylistContainer'

const create_playlist = () => {
    return (
        <>
            <Head>
                <title>Spotify - Web Player</title>
            </Head>
            <Layout>
                <CreatePlaylistContainer />
            </Layout>
        </>
    )
}

export default create_playlist