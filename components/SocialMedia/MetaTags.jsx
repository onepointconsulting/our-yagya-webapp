import React from 'react'

/**
 * Creates Meta Tags for socila platform sharing.
 * @constructor
 */
const MetaTags = ({title, description, image, path}) => {
    return (
        <>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={path} />
            {!!image && <>
                <meta property="og:image" content={image}/>
                <meta name="twitter:card" content={image}/>
            </>}

        </>
    )
}

export default MetaTags