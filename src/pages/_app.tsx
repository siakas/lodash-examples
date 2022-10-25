import type { AppProps } from 'next/app'

import { Global } from '@emotion/react'

import 'sanitize.css'
import { global } from '@/styles/global'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      {/* アプリ全体に適用されるグローバルスタイルを定義 */}
      <Global styles={global} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
