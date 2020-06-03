import Document, { Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '../private'

const isProd = process.env.NODE_ENV === 'production'

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="fr">
        <Head>
          <meta key="charset" charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
          <meta name="theme-color" content="#f6f6f6" />
          <meta name="msapplication-navbutton-color" content="#f6f6f6" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          {/* Twitter */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="@TrustedSheriff" />
          <meta name="twitter:title" content="Portfolio de Victor de la Fouchardière" />
          <meta name="twitter:description" content="Besoin d'un développeur web ?" />
          <meta name="twitter:image" content="https://www.victor-de-la-fouchardiere.fr/static/victor-de-la-fouchardiere.jpg" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Portfolio de Victor de la Fouchardière" />
          <meta
            property="og:description"
            content="Besoin d'un développeur web ? Découvrez le profil de Victor de la Fouchardiere"
          />
          <meta property="og:url" content="https://www.victor-de-la-fouchardiere.fr" />
          <meta property="og:site_name" content="Victor de la Fouchardière | Portfolio" />
          <meta property="og:image" content="https://www.victor-de-la-fouchardiere.fr/static/victor-de-la-fouchardiere.png" />
          <meta property="fb:app_id" content="124333614845929" />
          <meta name="robots" content="noodp" />
          <link rel="icon" type="image/png" href="/static/favicon.png" />
          <link rel="shortcut icon" type="image/x-icon" href="/static/favicon-16x16.png" />
          <link rel="apple-touch-icon" href="/static/icon-iphone.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/static/icon-ipad.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/static/icon-retina.png" />
          <meta name="google-site-verification" content="7_XZ1bK94NNQLjHFdKXCa9FjsNaOZGx76uQgQzDPIIw" />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('config', '${GA_TRACKING_ID}', { 'send_page_view': ${isProd} });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
