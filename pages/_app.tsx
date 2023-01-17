import '../styles/globals.css'
import "animate.css/animate.min.css";

import { appWithTranslation } from 'next-i18next';

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)
