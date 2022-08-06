import React from 'react'
import Layout from '../client/components/Layout/Layout'
import Head from 'next/dist/shared/lib/head'
import AccountContainer from '../client/containers/Account/AccountContainer'

const account = () => {
    return (
        <>
            <Head>
                <title>Spotify - Web Player</title>
            </Head>
            <Layout>
                <AccountContainer />
            </Layout>
        </>
    )
}

export default account