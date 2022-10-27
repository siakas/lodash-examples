import type { AppProps } from 'next/app'

import { Global } from '@emotion/react'
import { AnimatePresence } from 'framer-motion'

import 'sanitize.css'
import { global } from '@/styles/global'

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  return (
    <AnimatePresence
    // exitBeforeEnter
    // onExitComplete={() => window.scrollTo(0, 0)}
    >
      {/* アプリ全体に適用されるグローバルスタイルを定義 */}
      <Global styles={global} />
      <Component key={router.asPath} {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
