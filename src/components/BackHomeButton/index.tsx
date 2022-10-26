import Link from 'next/link'
import { FC } from 'react'

import * as styles from './BackHomeButton.styles'

const BackHomeButton: FC = () => {
  return (
    <div css={styles.button}>
      <Link href="/">
        <a>トップへ戻る</a>
      </Link>
    </div>
  )
}

export default BackHomeButton
