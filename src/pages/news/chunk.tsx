import type { NextPage } from 'next'

import _ from 'lodash'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import SheetData from '@/data/news.json'
import DefaultLayout from '@/layout/DefaultLayout'

import BackHomeButton from '@/components/BackHomeButton'

import * as styles from '@/styles/mods.styles'

const NewsChunk: NextPage = () => {
  const data = _.chunk(SheetData.data, 5)
  console.log(data)

  return (
    <DefaultLayout>
      <h2>指定した件数で配列を分割する（chunk）</h2>

      <p>
        <code css={styles.inlineCode}>_.chunk</code>
        は第一引数に指定した配列を、第二引数に指定した数ごとに分割する。
      </p>

      <p>
        以下の例では 5
        件ごとに配列の値を分割し、分割した内容ごとに出力するテーブルを分けている。
      </p>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneLight}
        css={styles.preCode}
      >
        {`import SheetData from '@/data/news.json'

const data = _.take(SheetData.data, 5)`}
      </SyntaxHighlighter>

      {data.map((arr, index) => (
        <>
          <p css={styles.textRight}>全 {arr.length} 件</p>
          <table key={index} css={styles.table}>
            <thead>
              <tr>
                <th style={{ width: '10%' }}>記事ID</th>
                <th>タイトル</th>
                <th style={{ width: '16%' }}>日付</th>
              </tr>
            </thead>
            <tbody>
              {arr.map((item, i) => (
                <tr key={i}>
                  <th css={styles.nowrap}>{item.id}</th>
                  <td>{item.title}</td>
                  <td css={styles.nowrap}>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ))}

      <BackHomeButton />
    </DefaultLayout>
  )
}

export default NewsChunk
