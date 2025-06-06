import type { AppProps } from 'next/app'

import { AnimatePresence } from 'framer-motion'

import '@/styles/globals.scss'
import 'sanitize.css'

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  return (
    <AnimatePresence
      exitBeforeEnter
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Component key={router.asPath} {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
