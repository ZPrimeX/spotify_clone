import React from 'react'
import Layout from '../client/components/Layout/Layout'
import ProfileContainer from '../client/containers/Profile/ProfileContainer'
import Head from 'next/dist/shared/lib/head'

const profile = () => {
    return (
        <>
            <Head>
                <title>Spotify - Web Player</title>
            </Head>
            <Layout>
                <ProfileContainer />
            </Layout>
        </>
    )
}

export default profile