import { FC } from 'react'

import * as styles from './Header.styles'

const Header: FC = () => {
  return (
    <header css={styles.header}>
      <nav css={styles.inner}>
        <ul css={styles.nav}>
          <li>
            <a>Shop List</a>
          </li>
          <li>
            <a>Campaign</a>
          </li>
          <li>
            <a>Web Store</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
