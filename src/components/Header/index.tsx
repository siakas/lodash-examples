import Link from 'next/link'
import { FC } from 'react'

import * as styles from './Header.styles'

const Header: FC = () => {
  return (
    <header css={styles.header}>
      <div css={styles.inner}>
        <h1 css={styles.title}>
          <Link href="/">
            <a>Lodash Examples</a>
          </Link>
        </h1>
      </div>
    </header>
  )
}

export default Header
