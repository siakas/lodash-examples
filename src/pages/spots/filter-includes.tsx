import type { NextPage } from 'next'

import _ from 'lodash'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import SheetData from '@/data/spots.json'
import DefaultLayout from '@/layout/DefaultLayout'

import BackHomeButton from '@/components/BackHomeButton'

import * as styles from '@/styles/mods.styles'

const SpotsIndex: NextPage = () => {
  const pickup = ['清水寺', '貴船神社', '醍醐寺', '比叡山延暦寺']

  const spots = _.filter(SheetData.spots, (item) => {
    return _.includes(pickup, item.name)
  })

  return (
    <DefaultLayout>
      <h2>配列の条件に一致するもので絞り込む（filter, includes）</h2>
      <p>
        <code css={styles.inlineCode}>_.includes</code>
        と併用することで、任意の配列の値の一致で絞り込むことができる。
        <br />
        <code css={styles.inlineCode}>_.includes</code>
        は第一引数の配列に対して、第二引数の値が含まれていれば
        <code css={styles.inlineCode}>true</code>を返す。
      </p>

      <p>
        この例では別に用意された配列<code css={styles.inlineCode}>pickup</code>
        に含まれるスポット名と一致するスポットで絞り込んでいる。
      </p>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneLight}
        css={styles.preCode}
      >
        {`const pickup = ['清水寺', '貴船神社', '醍醐寺', '比叡山延暦寺']

const spots = _.filter(SheetData.spots, (item) => {
  return _.includes(pickup, item.name)
})`}
      </SyntaxHighlighter>

      <p>
        指定する配列は自由に指定できるため、
        <code css={styles.inlineCode}>_.filter</code>
        で絞り込みの対象としている配列内のオブジェクトの持つ配列に特定の値が含まれているかのチェックもできる
      </p>

      <p>
        たとえば、
        <code css={styles.inlineCode}>
          around: [&apos;貴船神社&apos;, &apos;高台寺&apos;]
        </code>
        のようなプロパティをオブジェクトが持っている場合、下記のような形での絞り込みができる。
      </p>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneLight}
        css={styles.preCode}
      >
        {`// around の配列に '高台寺' を持つスポットを取得
const spots = _.filter(SheetData.spots, (item) => {
  return _.includes(item.around, '高台寺')
})`}
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

export default SpotsIndex
