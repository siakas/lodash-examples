import type { NextPage } from 'next'

import _ from 'lodash'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import SheetData from '@/data/news.json'
import DefaultLayout from '@/layout/DefaultLayout'

import BackHomeButton from '@/components/BackHomeButton'

import * as styles from '@/styles/mods.styles'

const NewsMapUniqBy: NextPage = () => {
  const shops = _.map(SheetData.data, (item) => {
    const name = item.shop.name
    const basename = item.shop.basename

    return {
      name,
      basename,
    }
  })

  const uniqShops = _.uniqBy(shops, 'basename')

  return (
    <DefaultLayout>
      <h2>map で生成した配列から重複した内容を削除（map, uniqBy）</h2>

      <p>
        <code css={styles.inlineCode}>_.map</code>
        を使って配列内の要素の持つプロパティのみを抽出した配列をあらたに生成する際、重複した内容は削除したいケースがある。たとえばエントリ一覧からカテゴリのみを取得して、エントリを持ったアクティブなカテゴリのみを出力したいケースなどが該当する。
      </p>

      <p>
        以下の例では各記事を発行している店舗名（
        <code css={styles.inlineCode}>shop.name</code>）と
        <code css={styles.inlineCode}>shop.basename</code>
        のみを取り出し、あらたな配列として生成している。
        <br />
        この時点では記事ごとの店舗情報を取得しているので、記事の件数ぶんのオブジェクトが格納されている。
      </p>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneLight}
        css={styles.preCode}
      >
        {`import SheetData from '@/data/news.json'

const shops = _.map(SheetData.data, (item) => {
  const name = item.shop.name
  const basename = item.shop.basename

  return {
    name,
    basename,
  }
})`}
      </SyntaxHighlighter>

      <p css={styles.textRight}>全 {shops.length} 件</p>
      <table css={styles.table}>
        <thead>
          <tr>
            <th>Basename</th>
            <th>店舗名</th>
          </tr>
        </thead>
        <tbody>
          {shops.map((item, index) => (
            <tr key={index}>
              <th css={styles.nowrap}>{item.basename}</th>
              <td css={styles.nowrap}>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>
        実際には記事を発信している店舗がわかればよく、重複しているデータはノイズとなるため、
        <code css={styles.inlineCode}>_.uniqBy</code>
        を使って<code css={styles.inlineCode}>basename</code>
        が重複しているデータを削除している。
      </p>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneLight}
        css={styles.preCode}
      >
        {`const uniqShops = _.uniqBy(shops, 'basename')`}
      </SyntaxHighlighter>

      <p css={styles.textRight}>全 {uniqShops.length} 件</p>
      <table css={styles.table}>
        <thead>
          <tr>
            <th>Basename</th>
            <th>店舗名</th>
          </tr>
        </thead>
        <tbody>
          {uniqShops.map((item, index) => (
            <tr key={index}>
              <th css={styles.nowrap}>{item.basename}</th>
              <td css={styles.nowrap}>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>
        また、配列内の要素がオブジェクトではなく、文字列や数値などがシンプルに格納されている場合は
        <code css={styles.inlineCode}>_.uniq</code>で処理できる。
      </p>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneLight}
        css={styles.preCode}
      >
        {`const arr = _.uniq([2, 1, 2])

console.log(arr) // [2, 1]`}
      </SyntaxHighlighter>

      <BackHomeButton />
    </DefaultLayout>
  )
}

export default NewsMapUniqBy
