import type { NextPage } from 'next'

import _ from 'lodash'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import SheetData from '@/data/recruits.json'
import DefaultLayout from '@/layout/DefaultLayout'

import BackHomeButton from '@/components/BackHomeButton'

import * as styles from '@/styles/mods.styles'

const RecruitReduce: NextPage = () => {
  // const data = _.groupBy(SheetData.recruits, (item) => {
  //   return item.career
  // })
  const data = _.reduce(
    SheetData.recruits,
    (result, item) => {
      if (item.area === '京都') {
        ;(result[item.area] || (result[item.area] = [])).push(item)
      }
      return result
    },
    {}
  )
  // console.log(data)

  return (
    <DefaultLayout>
      <h2>（reduce）</h2>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneLight}
        css={styles.preCode}
      >
        {`{
  "京都": [
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
}`}
      </SyntaxHighlighter>

      <p>
        以下ではこのグルーピングされたオブジェクトを使い、グループ化のキーを見出し、値の配列をテーブルで出力している。
        <br />
        オブジェクトのループには
        <code css={styles.inlineCode}>Object.keys()</code>
        を使用している。
      </p>

      {/* {Object.keys(data).map((value, index) => (
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
                <th>業態</th>
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
      ))} */}

      <BackHomeButton />
    </DefaultLayout>
  )
}

export default RecruitReduce
