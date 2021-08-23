// Copyright (c) 2021 All Rights Reserved
// Divercity 
// Author: Bernard Ojengwa
// Date Created: August 09, 2021
// Date Updated: August 09, 2021
// Description: Main component for the website title/website SEO.

import Head from 'next/head'
import { useRouter } from 'next/router'

type HeadElements = { 
    title: string, 
    description: string, 
    keywords?: string, 
    children?: any 
}

const HTMLHead = ({ title, description, keywords, children, ...props }: HeadElements) => {

    const router = useRouter()
    return (
        <Head {...props}>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name='keywords' content={keywords} />
            <meta property='og:title' content={title} />
            <meta property='og:locale' content='en_US' />
            <meta property='og:url' content={`${process.env.NEXT_PUBLIC_APP_URL}/${router.asPath}`} />
            <meta property='og:type' content='website' />
            <meta property='og:description' content={description} />
            <meta property='og:image' content={`${process.env.NEXT_PUBLIC_APP_URL}/`} />
            <meta name="google-site-verification" content="" />
            <link rel="icon" href="/black.png" />
            <link rel='canonical' href={`${process.env.BASE_URL}${router.asPath}`} />
            <link rel='preconnect' href='https://fonts.gstatic.com' />
            <link rel='preconnect' href='https://js.hsforms.net' />
            {children}
        </Head>
    )
}

export default HTMLHead