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
    "heading": "三寒四温",
    "body": "暖かい日が続いたかと思うと、また底冷えの冬に逆戻りするこの時期。少しずつ感じられる春の訪れを、茶葉が開くのを愛でながら待つ時間。贅沢なひとときです。"
  },
  "立春": {
    "title": "立春",
    "subtitle": "RISSHUN",
    "period": "02/03-02/18",
    "heading": "旧暦の正月節",
    "body": "八坂さんの節分祭で邪気を払えば、白梅ちらほらと立春。お茶の木たちも立春を迎えると、八十八夜の時をかけて新しい葉が芽吹くその日へと向かい始めます。"
  },
  "大寒": {
    "title": "大寒",
    "subtitle": "TAIKAN",
    "period": "01/20-02/03",
    "heading": "やわらかな「寒の水」",
    "body": "一年で最も寒いこの時期の「寒の水」。そのやわらかさは、お茶を美味しく淹れることにも適しています。水といえば、祇園・八坂神社の本殿東に沸く「祇園神水」。力水とも呼ばれ、パワースポットとして心を潤してくれます。"
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
  "heading": "山茶始開",
  "body": "二十四節気「立冬」のはじまりの七十二候「山茶始開（つばきはじめてひらく）」。<br>ツバキ科の茶の花が、その白く美しい姿を魅せる時期です。肌寒い日は熟成したまろやかな壷切茶で、心休まるひと時をお過ごしください。"
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
  "heading": "山茶始開",
  "body": "二十四節気「立冬」のはじまりの七十二候「山茶始開（つばきはじめてひらく）」。<br>ツバキ科の茶の花が、その白く美しい姿を魅せる時期です。肌寒い日は熟成したまろやかな壷切茶で、心休まるひと時をお過ごしください。"
}`}
      </SyntaxHighlighter>

      <BackHomeButton />
    </DefaultLayout>
  )
}

export default CalendarKeyBy
