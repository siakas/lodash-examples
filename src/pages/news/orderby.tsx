import type { NextPage } from 'next'

import _ from 'lodash'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import SheetData from '@/data/news.json'
import DefaultLayout from '@/layout/DefaultLayout'

import BackHomeButton from '@/components/BackHomeButton'

import * as styles from '@/styles/mods.styles'

const NewsOrderBy: NextPage = () => {
  const data = _.orderBy(SheetData.data, 'id', 'asc')

  return (
    <DefaultLayout>
      <h2>指定したプロパティの値（あるいは関数）でソートする（orderBy）</h2>

      <p>
        関数あるいはプロパティ名で指定した配列の内容を並び替える。
        <code css={styles.inlineCode}>_.sortBy</code>と
        <code css={styles.inlineCode}>_.orderBy</code>はほぼ同じ機能だが、
        <code css={styles.inlineCode}>_.orderBy</code>
        の方が昇順・降順も選択できるので便利。
      </p>
      <p>
        逆に、単純にアルファベットや数字などを降順にするだけなら
        <code css={styles.inlineCode}>_.sortBy</code>の方がシンプル。
      </p>

      <p>
        以下の例では<code css={styles.inlineCode}>id</code>
        を昇順でソートしている。
      </p>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneLight}
        css={styles.preCode}
      >
        {`import SheetData from '@/data/news.json'

const data = _.orderBy(SheetData.data, 'id', 'asc')`}
      </SyntaxHighlighter>

      <p>
        <code css={styles.inlineCode}>_.sortBy</code>
        は昇順でしかソートできないが、
        <code css={styles.inlineCode}>_.reverse</code>
        と併用することで降順でのソートもできる。
      </p>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneLight}
        css={styles.preCode}
      >
        {`// sortBy() で昇順にソートした配列を reverse() で反転させている
const data = _.sortBy(SheetData.data, 'id').reverse()`}
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

export default NewsOrderBy
