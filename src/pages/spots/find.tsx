import type { NextPage } from 'next'

import _ from 'lodash'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import SheetData from '@/data/spots.json'
import DefaultLayout from '@/layout/DefaultLayout'

import BackHomeButton from '@/components/BackHomeButton'

import * as styles from '@/styles/mods.styles'

const SpotsFind: NextPage = () => {
  const spot: any = _.find(SheetData.spots, (item) => {
    return item.kanaHead === 'た'
  })

  return (
    <DefaultLayout>
      <h2>条件に一致する最初の要素を取得する（find）</h2>

      <p>
        <code css={styles.inlineCode}>_.find</code>
        は条件に一致した最初の要素のみを返す。この時、返ってくる値は
        <strong>配列ではない</strong>ことに注意する。
      </p>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneLight}
        css={styles.preCode}
      >
        {`import SheetData from '@/data/spots.json'

const spot = _.find(SheetData.spots, (item) => {
  return item.kanaHead === 'た'
})`}
      </SyntaxHighlighter>

      {/* <p css={styles.textRight}>全 {spots.length} 件</p> */}
      <table css={styles.table}>
        <thead>
          <tr>
            <th>スポット名</th>
            <th>所在地</th>
            <th>概要</th>
            <th>地図</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th css={styles.nowrap}>{spot.name}</th>
            <td css={styles.nowrap}>{spot.city}</td>
            <td>{spot.description}</td>
            <td css={styles.nowrap}>
              <a href={spot.mapUrl} target="_blank" rel="noopener noreferrer">
                Google Map
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <BackHomeButton />
    </DefaultLayout>
  )
}

export default SpotsFind
