import _ from 'lodash';
import React from 'react'
import Meta from '../../pages-config'
import Helmet from 'react-helmet';

const titleMe = "|| Victor de la Fouchardiere"

const SEO = (props) => {
    let content = _.find(Meta, { url: props.url })

    return (
        <Helmet>
            <meta charSet="utf-8" />
            <html lang="fr"/>
            <meta name="description" content={content.metas.description} />
            <title>{content.metas.title+" "+titleMe}</title>
        </Helmet>
    )
}

export default SEO;