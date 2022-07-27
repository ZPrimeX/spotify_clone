import React from 'react'
import Head from 'next/head'
import Layout from '../client/components/Layout/Layout'
import SearchContainer from '../client/containers/Search/SearchContainer'

const search = () => {
    return (
        <>
            <Head>
                <title>Spotify - Web Player</title>
            </Head>
            <Layout>
                <SearchContainer />
            </Layout>
        </>
    )
}

export default search