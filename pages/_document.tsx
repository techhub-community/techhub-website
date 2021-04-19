import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from 'lib/gtag'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* Meta Tags */}
        <meta name="title" content="TechHub :: Community" key="title"/>
        <meta name="description" key="description" content="At TechHub, we've developed a huge community around building programming challenges, exciting real-world projects in every stack, and daily discussions. There are over 250 people who love solving these problems and helping others do."/>

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" key="ogtype" content="website"/>
        <meta property="og:url" key="ogurl" content="https://tech-hub.org/"/>
        <meta property="og:title" key="ogtitle" content="TechHub :: Community"/>
        <meta property="og:description" key="ogdescription" content="At TechHub, we've developed a huge community around building programming challenges, exciting real-world projects in every stack, and daily discussions. There are over 250 people who love solving these problems and helping others do."/>
        <meta property="og:image" key="ogimage" content="https://tech-hub.org/assets/logo/logo-square.png"/>

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" key="twittercard" content="summary_large_image"/>
        <meta property="twitter:url" key="twitterurl" content="https://tech-hub.org/"/>
        <meta property="twitter:title" key="twittertitle" content="TechHub :: Community"/>
        <meta property="twitter:description" key="twitterdesc" content="At TechHub, we've developed a huge community around building programming challenges, exciting real-world projects in every stack, and daily discussions. There are over 250 people who love solving these problems and helping others do."/>
        <meta property="twitter:image" key="twitterimage" content="https://tech-hub.org/assets/logo/logo-square.png"/>

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
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