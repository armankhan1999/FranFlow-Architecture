import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="FranFlow Architecture Diagram - Comprehensive system architecture for franchise management platform" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="FranFlow Architecture Diagram" />
        <meta property="og:description" content="Interactive architecture diagrams for FranFlow franchise management platform" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#0ea5e9" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
