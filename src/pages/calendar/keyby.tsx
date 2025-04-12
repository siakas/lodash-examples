import type { NextPage } from 'next'

import _ from 'lodash'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import SheetData from '@/data/calendars.json'
import DefaultLayout from '@/layout/DefaultLayout'

import BackHomeButton from '@/components/BackHomeButton'

import * as styles from '@/styles/mods.styles'

const CalendarKeyBy: NextPage = () => {
  const data = _.keyBy(SheetData.calendars, 'title')

  const pickup = ['大寒', '立冬', '処暑', '夏至']

  const post = data['立冬']
  console.log(post)

  return (
    <DefaultLayout>
      <h2>配列のオブジェクト化（keyBy）</h2>

      <p>
        <code css={styles.inlineCode}>_.keyBy</code>
        は第一引数に指定した配列を、第二引数に指定した値、あるいは関数の返り値をキーとしたオブジェクトに変換する。
      </p>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneLight}
        css={styles.preCode}
      >
        {`const data = _.keyBy(SheetData.calendars, 'title')`}
      </SyntaxHighlighter>

      <p>
        これによって配列は次のようなオブジェクトに変換される。この際、キーに指定する値が配列内で
        <strong>重複していないことに注意する</strong>
        。キーの値が重複している要素は、配列の最後のものだけが抽出されてオブジェクト化され、他のものは削除されてしまう。
      </p>

      <p>
        なお、配列を渡すと暗黙的にオブジェクトに変換する
        <code css={styles.inlineCode}>_.mapKeys</code>
        でもほぼ同様の結果を得ることができる。
      </p>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneLight}
        css={styles.preCode}
      >
        {`{
  "雨水": {
    "title": "雨水",
    "subtitle": "USUI",
    "period": "02/18-03/05",
    "heading": "氷解け水となる",
    "body": "雪や氷が溶け、雨が降り始める季節。大地に潤いが戻り、春の準備が始まります。冬の名残と春の訪れが交錯する微妙な季節変化を、静かに感じ取りましょう。"
  },
  "立春": {
    "title": "立春",
    "subtitle": "RISSHUN",
    "period": "02/03-02/18",
    "heading": "春の始まり",
    "body": "暦の上で春が立つ日。まだ寒さは厳しいですが、自然界では春への準備が始まります。草木は芽吹く力を蓄え、生命の息吹が静かに目覚める瞬間です。"
  },
  "大寒": {
    "title": "大寒",
    "subtitle": "TAIKAN",
    "period": "01/20-02/03",
    "heading": "一年で最も寒い時期",
    "body": "寒さが極まるこの時期は、静寂と凛とした空気に包まれます。厳しい寒さの中にも、やがて来る春を待つ自然の静かな忍耐を感じることができるでしょう。"
  },
  ...(中略)...
}`}
      </SyntaxHighlighter>

      <p>
        以下の例では変数<code css={styles.inlineCode}>pickup</code>
        の配列に指定した節気と一致するものを表示している。
      </p>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneLight}
        css={styles.preCode}
      >
        {`const pickup = ['大寒', '立冬', '処暑', '夏至']

<tbody>
  {pickup.map((item, index) => (
    <tr key={index}>
      <th>{data[item].title}</th>
      <td>{data[item].period}</td>
      <td>{data[item].heading}</td>
      <td dangerouslySetInnerHTML={{ __html: data[item].body }}></td>
    </tr>
  ))}
</tbody>`}
      </SyntaxHighlighter>

      <p css={styles.textRight}>全 {pickup.length} 件</p>
      <table css={styles.table}>
        <thead>
          <tr>
            <th>タイトル</th>
            <th>期間</th>
            <th>見出し</th>
            <th>概要</th>
          </tr>
        </thead>
        <tbody>
          {pickup.map((item, index) => (
            <tr key={index}>
              <th css={styles.nowrap}>{data[item].title}</th>
              <td css={styles.nowrap}>{data[item].period}</td>
              <td css={styles.nowrap}>{data[item].heading}</td>
              <td dangerouslySetInnerHTML={{ __html: data[item].body }}></td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>
        また、ある節気をひとつ取得したいと考えた時、元の配列のままでも
        <code css={styles.inlineCode}>_.find</code>
        を使って取得することはできる。
      </p>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneLight}
        css={styles.preCode}
      >
        {`const post = _.find(SheetData.calendars, { title: '立冬' })

// ->
{
  "title": "立冬",
  "subtitle": "RITTO",
  "period": "11/07-11/21",
  "heading": "冬の始まり",
  "body": "暦の上で冬の始まりを告げる日。木々は葉を落とし、自然界は冬支度を整えます。澄んだ空気と早く訪れる夕暮れが、季節の転換を静かに伝えます。"
}`}
      </SyntaxHighlighter>

      <p>
        だが、これは取得のたびに<code css={styles.inlineCode}>_.find</code>
        による検索を実行することになってしまう。それよりも
        <code css={styles.inlineCode}>_.keyBy</code>
        で節気名をキーとしたオブジェクトを作成して State
        に保存しておけば、より取得は楽になる。
      </p>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneLight}
        css={styles.preCode}
      >
        {`const data = _.keyBy(SheetData.calendars, 'title')
const post = data['立冬']

// ->
{
  "title": "立冬",
  "subtitle": "RITTO",
  "period": "11/07-11/21",
  "heading": "冬の始まり",
  "body": "暦の上で冬の始まりを告げる日。木々は葉を落とし、自然界は冬支度を整えます。澄んだ空気と早く訪れる夕暮れが、季節の転換を静かに伝えます。"
}`}
      </SyntaxHighlighter>

      <BackHomeButton />
    </DefaultLayout>
  )
}

export default CalendarKeyBy
