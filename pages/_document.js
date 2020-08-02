import Document, { Head, Main, NextScript } from 'next/document'

const isProd = process.env.NODE_ENV === 'production'

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="fr">
        <Head>
          <meta key="charset" charSet="utf-8" />
          <meta name="theme-color" content="#f6f6f6" />
          <meta name="msapplication-navbutton-color" content="#f6f6f6" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          {/* Twitter */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="@TrustedSheriff" />
          <meta name="twitter:title" content="Portfolio de Victor de la Fouchardiere" />
          <meta name="twitter:description" content="Besoin d'un développeur web ?" />
          <meta name="twitter:image" content="https://www.victor-de-la-fouchardiere.fr/victordelafouchardiere.jpg" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Portfolio de Victor de la Fouchardiere" />
          <meta
            property="og:description"
            content="Besoin d'un développeur web ? Découvrez le profil de Victor de la Fouchardiere"
          />
          <meta property="og:url" content="https://www.victor-de-la-fouchardiere.fr" />
          <meta property="og:site_name" content="Victor de la Fouchardière | Portfolio" />
          <meta property="og:image" content="https://www.victor-de-la-fouchardiere.fr/victordelafouchardiere.png" />
          <meta property="fb:app_id" content="124333614845929" />
          <link rel="icon" type="image/png" href="/favicon.png" />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon-16x16.png" />
          <link rel="apple-touch-icon" href="/icon-iphone.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/icon-ipad.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/icon-retina.png" />
          <meta name="google-site-verification" content="7_XZ1bK94NNQLjHFdKXCa9FjsNaOZGx76uQgQzDPIIw" />
          <style jsx>{`
            html,
            body,
            div,
            span,
            applet,
            object,
            iframe,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            p,
            blockquote,
            pre,
            a,
            abbr,
            acronym,
            address,
            big,
            cite,
            code,
            del,
            dfn,
            em,
            img,
            ins,
            kbd,
            q,
            s,
            samp,
            small,
            strike,
            strong,
            sub,
            sup,
            tt,
            var,
            b,
            u,
            i,
            center,
            dl,
            dt,
            dd,
            ol,
            ul,
            li,
            fieldset,
            form,
            label,
            legend,
            table,
            caption,
            tbody,
            tfoot,
            thead,
            tr,
            th,
            td,
            article,
            aside,
            canvas,
            details,
            embed,
            figure,
            figcaption,
            footer,
            header,
            hgroup,
            menu,
            nav,
            output,
            ruby,
            section,
            summary,
            time,
            mark,
            audio,
            video {
              margin: 0;
              padding: 0;
              border: 0;
              font-size: 100%;
              font: inherit;
              vertical-align: baseline;
            }
            /* HTML5 display-role reset for older browsers */
            article,
            aside,
            details,
            figcaption,
            figure,
            footer,
            header,
            hgroup,
            menu,
            nav,
            section {
              display: block;
            }
            body {
              line-height: 1;
            }
            ol,
            ul {
              list-style: none;
            }
            blockquote,
            q {
              quotes: none;
            }
            blockquote:before,
            blockquote:after,
            q:before,
            q:after {
              content: '';
              content: none;
            }
            table {
              border-collapse: collapse;
              border-spacing: 0;
            }
          `}</style>

          <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`} />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('config', '${process.env.GA_TRACKING_ID}', { 'send_page_view': ${isProd} });
          `
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
