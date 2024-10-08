import React from 'react'
import Head from 'next/head'

const CommonHead = (props) => {
    return (
        <Head>
            <title>Florian GIRARD - Portfolio</title>
            <meta name="description" content="Portfolio" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        </Head>
    )
}

export default CommonHead;
