import _ from 'lodash';
import React from 'react'
import Meta from '../../pages-config'
import Helmet from 'react-helmet';

const titleMe = "| Victor de la Fouchardiere"

const SEO = (props) => {
    let content = _.find(Meta, { url: props.url })

    return (
        <Helmet>
            <html lang="fr"/>
            <link rel="icon" type="image/png" href="/favicon.png" />
            <link rel="shortcut icon" type="image/x-icon" href="/favicon-16x16.png" />
            <link rel="apple-touch-icon" href="/icon-iphone.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/icon-ipad.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/icon-retina.png" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <link rel="alternate" href="http://www.victor-de-la-fouchardiere.fr" hreflang="fr" />
            <meta name="description" content={content.metas.description} />
            <meta name="robots" content="noodp" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Portfolio de Victor de la Fouchardière" />
            <meta property="og:description" content="Besoin d'un développeur web ? Découvrez le profil de cet étudiant en programmation web" />
            <meta property="og:url" content="https://www.victor-de-la-fouchardiere.fr" />
            <meta property="og:site_name" content="Victor de la Fouchardière | Portfolio" />
            <meta property="og:image" content="https://www.victor-de-la-fouchardiere.fr/victor-de-la-fouchardiere.png" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@VicAndTips" />
            <meta name="twitter:title" content="Portfolio de Victor de la Fouchardière" />
            <meta name="twitter:description" content="Besoin d'un développeur web ?" />
            <meta name="twitter:image" content="https://www.victor-de-la-fouchardiere.fr/victor-de-la-fouchardiere.jpg" />
            <meta name="theme-color" content="#f6f6f6" />
            <meta name="msapplication-navbutton-color" content="#f6f6f6" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta property="fb:app_id" content="124333614845929" />
            <title>{content.metas.title+" "+titleMe}</title>
        </Helmet>
    )
}

export default SEO;