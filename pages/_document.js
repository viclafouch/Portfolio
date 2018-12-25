import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="fr">
        {/* prettier-ignore */}
        <Head>
          <meta charSet="utf-8" />
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
          <meta name="twitter:image" content="https://www.victor-de-la-fouchardiere.fr/static/victor-de-la-fouchardiere.jpg"
          />
          {/* Facebook/Linkedin */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Portfolio de ctor de la Fouchardière" />
          <meta property="og:description" content="Besoin d'un développeur web ? Découvrez le profil de cet étudiant en programmation web" />
          <meta property="og:url" content="https://www.victor-de-la-fouchardiere.fr" />
          <meta property="og:site_name" content="Victor de la Fouchardière | Portfolio" />
          <meta property="og:image" content="https://www.victor-de-la-fouchardiere.fr/victor-de-la-fouchardiere.png" />
          <meta property="fb:app_id" content="124333614845929" />
          <meta name="robots" content="noodp" />

          <meta key="charset" charSet="utf-8" />
        </Head>
        {/* prettier-ignore-end */}
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
