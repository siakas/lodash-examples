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

  return (
    <DefaultLayout>
      <h2>指定したプロパティによるグループ化（groupBy）</h2>

      <p>
        <code css={styles.inlineCode}>_.groupBy</code>
        は第一引数に指定した配列に対して、第二引数の関数の返り値をキーとしてあらたなオブジェクトを作成し、同じキーを持つ要素をグループ化して格納した配列をキーの値として生成する。
      </p>

      <p>
        以下の例では<code css={styles.inlineCode}>career</code>
        の値をキーとしたオブジェクトを生成することで、採用形態によるグルーピングをおこなっている。
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

      <p>これにより、シンプルな配列をオブジェクトの形に整形できる。</p>

      <SyntaxHighlighter
        language="json"
        style={atomOneLight}
        css={styles.preCode}
      >
        {`[
  {
    "title": "本社",
    "jobName": "経理・総務スタッフ",
    "overview": "",
    "permalink": "https://www.sunrisecare.co.jp/recruit/2db7d93446cebfafda1713f56a9bd42b4d6ed801.html",
    "url": "",
    "linkText": "",
    "area": "東京",
    "career": "正社員",
    "shop": "サンライズケア 本社"
  },
  {
    "title": "東京新宿施設",
    "jobName": "看護スタッフ、介護アシスタント",
    "overview": "",
    "permalink": "https://www.sunrisecare.co.jp/recruit/recruit_shinjuku.html",
    "url": "",
    "linkText": "",
    "area": "東京",
    "career": "アルバイト",
    "shop": "グリーンライフ介護センター"
  },
  {
    "title": "千葉中央施設",
    "jobName": "リハビリスタッフ、介護スタッフ",
    "overview": "",
    "permalink": "https://www.sunrisecare.co.jp/recruit/recruit_chibachuou.html",
    "url": "",
    "linkText": "",
    "area": "千葉",
    "career": "アルバイト",
    "shop": "グリーンライフ介護センター"
  },
  ...（中略）...
]

↓↓↓

{
  "正社員": [
    {
      "title": "本社",
      "jobName": "経理・総務スタッフ",
      "overview": "",
      "permalink": "https://www.sunrisecare.co.jp/recruit/2db7d93446cebfafda1713f56a9bd42b4d6ed801.html",
      "url": "",
      "linkText": "",
      "area": "東京",
      "career": "正社員",
      "shop": "サンライズケア 本社"
    },
    {
      "title": "東京立川施設",
      "jobName": "施設管理スタッフ",
      "overview": "",
      "permalink": "https://www.sunrisecare.co.jp/recruit/recruit_tachikawa.html",
      "url": "",
      "linkText": "",
      "area": "東京",
      "career": "正社員",
      "shop": "あさひ福祉会"
    }
  ],
  "アルバイト": [
    {
      "title": "東京新宿施設",
      "jobName": "看護スタッフ、介護アシスタント",
      "overview": "",
      "permalink": "https://www.sunrisecare.co.jp/recruit/recruit_shinjuku.html",
      "url": "",
      "linkText": "",
      "area": "東京",
      "career": "アルバイト",
      "shop": "グリーンライフ介護センター"
    },
    {
      "title": "千葉中央施設",
      "jobName": "リハビリスタッフ、介護スタッフ",
      "overview": "",
      "permalink": "https://www.sunrisecare.co.jp/recruit/recruit_chibachuou.html",
      "url": "",
      "linkText": "",
      "area": "千葉",
      "career": "アルバイト",
      "shop": "グリーンライフ介護センター"
    },
    {
      "title": "横浜本部",
      "jobName": "送迎ドライバー、介護スタッフ",
      "overview": "",
      "permalink": "https://www.sunrisecare.co.jp/recruit/recruit_yokohama.html",
      "url": "",
      "linkText": "",
      "area": "神奈川",
      "career": "アルバイト",
      "shop": "あさひ福祉会"
    },
    {
      "title": "横浜青葉センター",
      "jobName": "介護スタッフ",
      "overview": "",
      "permalink": "https://www.sunrisecare.co.jp/recruit/8762a10737f6df3cc63efa452b830b34641760ba.html",
      "url": "",
      "linkText": "",
      "area": "神奈川",
      "career": "アルバイト",
      "shop": "サンライズケア"
    }
  ]
}
`}
      </SyntaxHighlighter>

      <p>
        以下ではこのグルーピングされたオブジェクトを使い、グループ化のキーを見出し、値の配列をテーブルで出力している。
        <br />
        オブジェクトのループには
        <code css={styles.inlineCode}>Object.keys()</code>
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
                <th>施設名</th>
                <th>
                  募集
                  <br />
                  エリア
                </th>
                <th>募集職種</th>
                <th>分類</th>
                <th>グループ</th>
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

      <BackHomeButton />
    </DefaultLayout>
  )
}

export default RecruitGroupBy
