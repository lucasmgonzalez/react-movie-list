import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
  breakpoints: {
    mobile: 320,
    tablet: 768,
    desktop: 1200
  }
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
