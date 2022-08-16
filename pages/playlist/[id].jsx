import React from 'react'
import Head from 'next/dist/shared/lib/head'
import Layout from '../../client/components/Layout/Layout'
import PlaylistContainer from '../../client/containers/Playlist/PlaylistContainer'
import axios from 'axios'


const SinglePlaylist = ({ playlist }) => {
    return (
        <>
            <Head>
                <title>Spotify - Web Player</title>
            </Head>
            <Layout>
                <PlaylistContainer playlist={playlist} />
            </Layout>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const { id } = context.params

    const { data } = await axios.get(`http://localhost:3000/api/playlist/${id}`)

    return { props: { playlist: data.body } }
}

export default SinglePlaylist