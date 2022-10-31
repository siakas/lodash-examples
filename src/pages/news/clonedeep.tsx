import type { NextPage } from 'next'

import _ from 'lodash'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import SheetData from '@/data/news.json'
import DefaultLayout from '@/layout/DefaultLayout'

import BackHomeButton from '@/components/BackHomeButton'

import * as styles from '@/styles/mods.styles'

const NewsCloneDeep: NextPage = () => {
  const copiedData = _.cloneDeep(SheetData.data)
  const data = _(copiedData).shuffle().take(10).value()

  return (
    <DefaultLayout>
      <h2>配列やオブジェクトを深い階層までまるごと複製する（cloneDeep）</h2>

      <p>
        配列やオブジェクトを Lodash
        のメソッドで操作、処理する場合、いくつかのメソッドは元の配列の順番を変えてしまうなど、破壊的な処理をともなうため、複雑な処理をする場合には
        <code css={styles.inlineCode}>_.cloneDeep</code>
        を使って配列やオブジェクトを複製しておくと安全。
      </p>

      <p>
        たとえば以下のような三階層になっているデータでも、
        <code css={styles.inlineCode}>_.cloneDeep</code>
        はシンプルに複製を作ることができる。
      </p>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneLight}
        css={styles.preCode}
      >
        {`const data = {
  first: {
    second: {
        third: [
            'value 1',
            'value 2',
            'value 3',
        ]
    }
  }
}`}
      </SyntaxHighlighter>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneLight}
        css={styles.preCode}
      >
        const copiedData = _.cloneDeep(data)
      </SyntaxHighlighter>

      <p>
        以下の例では<code css={styles.inlineCode}>_.cloneDeep</code>
        を使ってニュース記事一覧の配列データを複製し、そのデータを
        <code css={styles.inlineCode}>_.shuffle</code>
        でランダムに並び替えたうえで、最初の 10 件を取得している。
        <br />
        複数のメソッドをまとめて記述したい場合は、Lodash の{` `}
        <strong>Wrapper 記法を使ったメソッドチェーン</strong>
        を使って記述することができる。
      </p>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneLight}
        css={styles.preCode}
      >
        {`import SheetData from '@/data/news.json'

const copiedData = _.cloneDeep(SheetData.data)
const data = _(copiedData)
               .shuffle()
               .take(10)
               .value() // lodash のメソッドチェーンでは最後に value() が必要`}
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

export default NewsCloneDeep
