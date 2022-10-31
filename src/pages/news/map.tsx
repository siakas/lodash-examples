import type { NextPage } from 'next'

import _ from 'lodash'
import moment from 'moment'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import SheetData from '@/data/news.json'
import DefaultLayout from '@/layout/DefaultLayout'

import BackHomeButton from '@/components/BackHomeButton'

import * as styles from '@/styles/mods.styles'

const NewsMap: NextPage = () => {
  const data = _.map(SheetData.data, (item) => {
    const entryYear = moment(item.date).format('YYYY')
    const entryMonth = moment(item.date).format('YYYY-MM')
    const entryDate = moment(item.date).format('YYYY-MM-DD')

    return {
      ...item,
      entryYear,
      entryMonth,
      entryDate,
    }
  })

  return (
    <DefaultLayout>
      <h2>配列をループして整形し、あらたな配列を生成（map）</h2>

      <p>
        <code css={styles.inlineCode}>_.map</code>
        は第一引数に与えられた配列の要素に対して、第二引数の関数を実行し、
        <code css={styles.inlineCode}>return</code>
        された内容からあらたな配列を生成する。
      </p>

      <p>
        <code css={styles.inlineCode}>_.map</code>は
        <strong>
          配列を渡して<code css={styles.inlineCode}>return</code>
          された内容から配列を作る
        </strong>
        メソッドであることに注意。
      </p>

      <p>
        以下の例では<code css={styles.inlineCode}>_.map</code>
        を使って配列内のオブジェクトの持つ
        <code css={styles.inlineCode}>date</code>プロパティを加工し、新たに
        <code css={styles.inlineCode}>entryYear</code>、
        <code css={styles.inlineCode}>entryMonth</code>、
        <code css={styles.inlineCode}>entryDate</code>
        というプロパティを持ったオブジェクトを配列として返している。
        <br />
        <code css={styles.inlineCode}>date</code>
        プロパティの日付の加工には日付操作のライブラリである{' '}
        <a
          href="https://momentjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Moment.js
        </a>
        を利用している。
      </p>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneLight}
        css={styles.preCode}
      >
        {`import SheetData from '@/data/news.json'

const data = _.map(SheetData.data, (item) => {
  const entryYear = moment(item.date).format('YYYY')
  const entryMonth = moment(item.date).format('YYYY-MM')
  const entryDate = moment(item.date).format('YYYY-MM-DD')

  return {
    ...item,
    entryYear,
    entryMonth,
    entryDate,
  }
})`}
      </SyntaxHighlighter>

      <p css={styles.textRight}>全 {data.length} 件</p>
      <table css={styles.table}>
        <thead>
          <tr>
            <th>記事ID</th>
            <th>タイトル</th>
            <th>年</th>
            <th>年月</th>
            <th>年月日</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th css={styles.nowrap}>{item.id}</th>
              <td>{item.title}</td>
              <td css={styles.nowrap}>{item.entryYear}</td>
              <td css={styles.nowrap}>{item.entryMonth}</td>
              <td css={styles.nowrap}>{item.entryDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <BackHomeButton />
    </DefaultLayout>
  )
}

export default NewsMap
