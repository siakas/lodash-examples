import type { NextPage } from 'next'

import _ from 'lodash'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import SheetData from '@/data/recruits.json'
import DefaultLayout from '@/layout/DefaultLayout'

import BackHomeButton from '@/components/BackHomeButton'

import * as styles from '@/styles/mods.styles'

const RecruitGroupBy: NextPage = () => {
  const data = _.groupBy(SheetData.recruits, (item) => {
    return item.career
  })

  console.log(data)

  return (
    <DefaultLayout>
      <h2>指定したプロパティによるグループ化（groupBy）</h2>

      <p>
        <code css={styles.inlineCode}>_.groupBy</code>
        は第一引数に指定した配列に対して、第二引数の関数の処理内容、あるいはその返り値をキーとしてあらたな連想配列を作成し、同じキーを持つ要素をグループ化して格納した配列を生成する。
      </p>

      <p>
        以下の例では<code css={styles.inlineCode}>career</code>
        をキーとした連想配列を生成することで、採用形態によるグルーピングをおこなっている。
      </p>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneLight}
        css={styles.preCode}
      >
        {`import SheetData from '@/data/recruits.json'

const data = _.groupBy(SheetData.recruits, (item) => {
  return item.career
})`}
      </SyntaxHighlighter>

      <p>
        これにより、シンプルなオブジェクトを格納した配列を連想配列の形に整形できる。
      </p>

      <SyntaxHighlighter
        language="json"
        style={atomOneLight}
        css={styles.preCode}
      >
        {`[
  {
    "title": "本社",
    "jobName": "オンラインショップ運営・受注事務スタッフ",
    "overview": "",
    "permalink": "https://www.giontsujiri.co.jp/recruit/2db7d93446cebfafda1713f56a9bd42b4d6ed801.html",
    "url": "",
    "linkText": "",
    "area": "京都",
    "career": "中途採用",
    "shop": "祇園辻利 本社"
  },
  {
    "title": "東京スカイツリータウン・ソラマチ店",
    "jobName": "販売スタッフ",
    "overview": "",
    "permalink": "https://www.giontsujiri.co.jp/recruit/8762a10737f6df3cc63efa452b830b34641760ba.html",
    "url": "",
    "linkText": "",
    "area": "東京",
    "career": "アルバイト採用",
    "shop": "宇治茶祇園辻利"
  },
  {
    "title": "大丸東京店",
    "jobName": "ホールスタッフ、キッチンスタッフ",
    "overview": "",
    "permalink": "https://www.giontsujiri.co.jp/recruit/recruit_daimarutokyo.html",
    "url": "",
    "linkText": "",
    "area": "東京",
    "career": "アルバイト採用",
    "shop": "茶寮都路里"
  },
  ...（中略）...
]

↓↓↓

{
  "中途採用": [
    {
      "title": "本社",
      "jobName": "オンラインショップ運営・受注事務スタッフ",
      "overview": "",
      "permalink": "https://www.giontsujiri.co.jp/recruit/2db7d93446cebfafda1713f56a9bd42b4d6ed801.html",
      "url": "",
      "linkText": "",
      "area": "京都",
      "career": "中途採用",
      "shop": "祇園辻利 本社"
    }
  ],
  "アルバイト採用": [
    {
      "title": "東京スカイツリータウン・ソラマチ店",
      "jobName": "販売スタッフ",
      "overview": "",
      "permalink": "https://www.giontsujiri.co.jp/recruit/8762a10737f6df3cc63efa452b830b34641760ba.html",
      "url": "",
      "linkText": "",
      "area": "東京",
      "career": "アルバイト採用",
      "shop": "宇治茶祇園辻利"
    },
    {
      "title": "大丸東京店",
      "jobName": "ホールスタッフ、キッチンスタッフ",
      "overview": "",
      "permalink": "https://www.giontsujiri.co.jp/recruit/recruit_daimarutokyo.html",
      "url": "",
      "linkText": "",
      "area": "東京",
      "career": "アルバイト採用",
      "shop": "茶寮都路里"
    },
    {
      "title": "京都伊勢丹店",
      "jobName": "ホールスタッフ、キッチンスタッフ",
      "overview": "",
      "permalink": "https://www.giontsujiri.co.jp/recruit/recruit_kyotoisetan.html",
      "url": "",
      "linkText": "",
      "area": "京都",
      "career": "アルバイト採用",
      "shop": "茶寮都路里"
    },
    {
      "title": "祇園本店",
      "jobName": "ホールスタッフ、キッチンスタッフ",
      "overview": "",
      "permalink": "https://www.giontsujiri.co.jp/recruit/recruit_saryohonten.html",
      "url": "",
      "linkText": "",
      "area": "京都",
      "career": "アルバイト採用",
      "shop": "茶寮都路里"
    },
    {
      "title": "祇園本店",
      "jobName": "販売スタッフ",
      "overview": "",
      "permalink": "https://www.giontsujiri.co.jp/recruit/recruit_gionhonten.html",
      "url": "",
      "linkText": "",
      "area": "京都",
      "career": "アルバイト採用",
      "shop": "宇治茶祇園辻利"
    }
  ]
}
`}
      </SyntaxHighlighter>

      <p>
        以下ではこのグルーピングされたオブジェクトを使い、グループ化のキーを見出しに、バリューの配列をテーブルで出力している。
        <br />
        連想配列のループには<code css={styles.inlineCode}>Object.keys()</code>
        を使用している。
      </p>

      <SyntaxHighlighter
        language="htmlbars"
        style={atomOneLight}
        css={styles.preCode}
      >
        {`{Object.keys(data).map((value, index) => (
  <div key={index}>
    <h3>{value}</h3>
    <p>全 {data[value].length} 件</p>
    <table>
      <thead>
      ...（中略）...
      </thead>
      <tbody>
        {data[value].map((item, index) => (
          <tr key={index}>
            <th>{item.title}</th>
            <td>{item.area}</td>
            ...（中略）...
          </tr>
        ))}
      </tbody>
    </table>
  </div>
))}`}
      </SyntaxHighlighter>

      {Object.keys(data).map((value, index) => (
        <div key={index}>
          <h3>{value}</h3>
          <p css={styles.textRight}>全 {data[value].length} 件</p>
          <table css={styles.table}>
            <thead>
              <tr>
                <th>店舗名</th>
                <th>
                  募集
                  <br />
                  エリア
                </th>
                <th>募集職種</th>
                <th>分類</th>
                <th>問い合わせ先</th>
              </tr>
            </thead>
            <tbody>
              {data[value].map((item, index) => (
                <tr key={index}>
                  <th>{item.title}</th>
                  <td css={styles.nowrap}>{item.area}</td>
                  <td>
                    <a
                      href={item.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.jobName}
                    </a>
                  </td>
                  <td css={styles.nowrap}>{item.career}</td>
                  <td css={styles.nowrap}>{item.shop}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      {/* <p css={styles.textRight}>全 {data.length} 件</p>
      <table css={styles.table}>
        <thead>
          <tr>
            <th>店舗名</th>
            <th>
              募集
              <br />
              エリア
            </th>
            <th>募集職種</th>
            <th>分類</th>
            <th>問い合わせ先</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th>{item.title}</th>
              <td css={styles.nowrap}>{item.area}</td>
              <td>
                <a
                  href={item.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.jobName}
                </a>
              </td>
              <td css={styles.nowrap}>{item.career}</td>
              <td css={styles.nowrap}>{item.shop}</td>
            </tr>
          ))}
        </tbody>
      </table> */}

      <BackHomeButton />
    </DefaultLayout>
  )
}

export default RecruitGroupBy
