import { FC } from 'react'

import * as styles from './Header.styles'

const Header: FC = () => {
  return (
    <header css={styles.header}>
      <div css={styles.inner}>
        <h1 css={styles.title}>Lodash Examples</h1>
      </div>
    </header>
  )
}

export default Header
