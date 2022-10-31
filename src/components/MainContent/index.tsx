import { FC, ReactNode } from 'react'

import * as styles from './MainContent.styles'

type Props = {
  children: ReactNode
}

const MainContent: FC<Props> = ({ children }) => {
  return (
    <main css={styles.container}>
      <div css={styles.inner}>{children}</div>
    </main>
  )
}

export default MainContent
