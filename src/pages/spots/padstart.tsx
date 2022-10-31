import type { NextPage } from 'next'

import _ from 'lodash'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import SheetData from '@/data/spots.json'
import DefaultLayout from '@/layout/DefaultLayout'

import BackHomeButton from '@/components/BackHomeButton'

import * as styles from '@/styles/mods.styles'

const SpotsPadStart: NextPage = () => {
  const spots = _.map(SheetData.spots, (item) => {
    item.id = _.padStart(item.id, 3, '0')

    return {
      ...item,
    }
  })

  return (
    <DefaultLayout>
      <h2>ゼロパディング、ゼロサプレス（padStart, trimStart）</h2>

      <p>
        ゼロパディングとは、数値を文字として表現・表示する際に、指定された桁数に足りないぶんだけ左右に
        <code css={styles.inlineCode}>0</code>
        を追加する処理のこと。決まった長さ（固定長）の文字列に変換したいときに行われる。
      </p>

      <p>
        その逆に、先頭あるいは末尾の余分な<code css={styles.inlineCode}>0</code>
        を削除し、数値としての本来の表記に戻すをゼロサプレスと言う。
      </p>

      <p>
        Lodash ではゼロパディングは
        <code css={styles.inlineCode}>_.padStart</code>、ゼロサプレスは
        <code css={styles.inlineCode}>_.trimStart</code>
        を使うことで実現できる（いずれも文字列の頭から連続している文字に対して処理を実行する。文字列の末尾からの処理は
        <code css={styles.inlineCode}>_.padEnd</code>、
        <code css={styles.inlineCode}>_.trimEnd</code>を使用する）
      </p>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneLight}
        css={styles.preCode}
      >
        {`// ゼロパディング

const str = _.padStart('123', 5, '0') // 第一引数に対象の文字列、第二引数に桁数、第三引数に埋める文字を指定する
console.log(str) // 00123

// ゼロサプレス
const str = _.trimStart('00123', '0')
console.log(str) // 123`}
      </SyntaxHighlighter>

      <p>
        以下の例では配列に格納された各スポットオブジェクトの
        <code css={styles.inlineCode}>id</code>
        に対してゼロパディング処理をおこない、3 桁の文字列に変換する。
        <code css={styles.inlineCode}>_.padStart</code>
        は配列ではなく<strong>文字列に対して実行するメソッド</strong>
        なので、ここでは
        <code css={styles.inlineCode}>_.map</code>
        を使ってループ処理をおこなっている。
      </p>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneLight}
        css={styles.preCode}
      >
        {`import SheetData from '@/data/spots.json'

const spots = _.map(SheetData.spots, (item) => {
  item.id = _.padStart(item.id, 3, '0')

  return {
    ...item,
  }
})`}
      </SyntaxHighlighter>

      <p css={styles.textRight}>全 {spots.length} 件</p>
      <table css={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>スポット名</th>
            <th>概要</th>
            <th>地図</th>
          </tr>
        </thead>
        <tbody>
          {spots.map((spot, index) => (
            <tr key={index}>
              <th css={styles.nowrap}>{spot.id}</th>
              <td css={styles.nowrap}>{spot.name}</td>
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

export default SpotsPadStart
