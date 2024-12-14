import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta key="charset" charSet="utf-8" />
          <meta name="theme-color" content="#f6f6f6" />
          <meta name="msapplication-navbutton-color" content="#f6f6f6" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          {/* Twitter */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="@TrustedSheriff" />
          <meta
            name="twitter:title"
            content="Portfolio of Victor de la Fouchardiere"
          />
          <meta name="twitter:description" content="Need a web developer?" />
          <meta
            name="twitter:image"
            content="https://www.victor-de-la-fouchardiere.fr/victordelafouchardiere.jpg"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Portfolio of Victor de la Fouchardiere"
          />
          <meta
            property="og:description"
            content="Need a web developer? Discover the profile of Victor de la Fouchardiere"
          />
          <meta
            property="og:url"
            content="https://www.victor-de-la-fouchardiere.fr"
          />
          <meta
            property="og:site_name"
            content="Victor de la Fouchardière | Portfolio"
          />
          <meta property="fb:app_id" content="124333614845929" />
          <link rel="icon" type="image/png" href="/favicon.png" />
          <link rel="icon" type="image/x-icon" href="/favicon-16x16.png" />
          <link rel="apple-touch-icon" href="/icon-iphone.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/icon-ipad.png" />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/icon-retina.png"
          />
          <meta
            name="google-site-verification"
            content="7_XZ1bK94NNQLjHFdKXCa9FjsNaOZGx76uQgQzDPIIw"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=ABeeZee:wght@400;700&family=Karma:wght@500&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
