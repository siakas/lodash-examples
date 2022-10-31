import type { NextPage } from 'next'

import _ from 'lodash'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import SheetData from '@/data/news.json'
import DefaultLayout from '@/layout/DefaultLayout'

import BackHomeButton from '@/components/BackHomeButton'

import * as styles from '@/styles/mods.styles'

const NewsTake: NextPage = () => {
  const data = _.take(SheetData.data, 5)

  return (
    <DefaultLayout>
      <h2>配列の最初から指定した件数の値を取得（take）</h2>

      <p>
        <code css={styles.inlineCode}>_.take</code>
        は第一引数に指定した配列の頭から、第二引数に指定した数だけ値を取得する。
      </p>

      <p>以下の例では最初の 5 件を取得している。</p>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneLight}
        css={styles.preCode}
      >
        {`import SheetData from '@/data/news.json'

const data = _.take(SheetData.data, 5)`}
      </SyntaxHighlighter>

      <p>
        配列の最後から指定した件数を取得するメソッドもあり、そちらは
        <code css={styles.inlineCode}>_.takeRight</code>を使う。
      </p>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneLight}
        css={styles.preCode}
      >
        {`import SheetData from '@/data/news.json'

const data = _.takeRight(SheetData.data, 5) // 配列の最後から 5 件を取得`}
      </SyntaxHighlighter>

      <p css={styles.textRight}>全 {data.length} 件</p>
      <table css={styles.table}>
        <thead>
          <tr>
            <th>記事ID</th>
            <th>タイトル</th>
            <th>日付</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th css={styles.nowrap}>{item.id}</th>
              <td>{item.title}</td>
              <td css={styles.nowrap}>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <BackHomeButton />
    </DefaultLayout>
  )
}

export default NewsTake
