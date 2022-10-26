import type { NextPage } from 'next'

import _ from 'lodash'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import SheetData from '@/data/spots.json'
import DefaultLayout from '@/layout/DefaultLayout'

import BackHomeButton from '@/components/BackHomeButton'

import * as styles from '@/styles/mods.styles'

const SpotsFilter: NextPage = () => {
  const spots = _.filter(SheetData.spots, (item) => {
    return item.city === '滋賀'
  })

  return (
    <DefaultLayout>
      <h2>条件に一致するもので絞り込む（filter）</h2>
      <p>
        この例では<code css={styles.inlineCode}>city</code>が
        <code css={styles.inlineCode}>滋賀</code>
        と一致するスポットで絞り込んでいる。
      </p>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneLight}
        css={styles.preCode}
      >
        {`import SheetData from '@/data/spots.json'

const spots = _.filter(SheetData.spots, (item) => {
  return item.city === '滋賀'
})`}
      </SyntaxHighlighter>

      <p>第二引数に関数ではなく、オブジェクトを渡して判定することもできる</p>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneLight}
        css={styles.preCode}
      >
        {`const spots = _.filter(SheetData.spots, { city: '滋賀' })`}
      </SyntaxHighlighter>

      <p css={styles.textRight}>全 {spots.length} 件</p>
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
          {spots.map((spot, index) => (
            <tr key={index}>
              <th css={styles.nowrap}>{spot.name}</th>
              <td css={styles.nowrap}>{spot.city}</td>
              <td>{spot.description}</td>
              <td css={styles.nowrap}>
                <a href={spot.mapUrl} target="_blank" rel="noopener noreferrer">
                  Google Map
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <BackHomeButton />
    </DefaultLayout>
  )
}

export default SpotsFilter
