import type { NextPage } from 'next'

import _ from 'lodash'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import SheetData from '@/data/recruits.json'
import DefaultLayout from '@/layout/DefaultLayout'

import BackHomeButton from '@/components/BackHomeButton'

import * as styles from '@/styles/mods.styles'

const RecruitMapValuesGroupBy: NextPage = () => {
  // 採用形態ごとにグループ化
  const groupedByCareer = _.groupBy(SheetData.recruits, (item) => {
    return item.career
  })

  // 採用形態ごとの配列を業態ごとにグループ化
  const groupedByShop = _.mapValues(groupedByCareer, (value) => {
    return _.groupBy(value, (item) => {
      return item.shop
    })
  })

  return (
    <DefaultLayout>
      <h2>
        配列のオブジェクト化とオブジェクトプロパティの値の変更（groupBy,
        mapValues）
      </h2>

      <p>
        <code css={styles.inlineCode}>_.mapValues</code>は
        第一引数に指定したオブジェクトに対して、第二引数の関数の処理に応じてオブジェクトの値を変更したオブジェクトを返す。この時、第二引数の関数は引数にオブジェクトの
        <code css={styles.inlineCode}>value</code>をとる。
      </p>

      <p>
        似たメソッドに<code css={styles.inlineCode}>_.map</code>や
        <code css={styles.inlineCode}>_.mapKeys</code>
        があるが、それぞれ以下の違いがあるので注意する。
      </p>

      <table css={styles.table}>
        <thead>
          <tr>
            <th>メソッド</th>
            <th>
              第一引数で
              <br />
              指定するオブジェクト
            </th>
            <th>処理内容</th>
            <th>返すオブジェクト</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th css={styles.nowrap}>_.map</th>
            <td css={styles.nowrap}>配列</td>
            <td>
              受け取った配列を第二引数の関数でループ処理し、
              <code css={styles.inlineCode}>return</code>
              された内容からあらたな配列を生成する
            </td>
            <td css={styles.nowrap}>配列</td>
          </tr>
          <tr>
            <th css={styles.nowrap}>_.mapValues</th>
            <td>
              オブジェクト
              <br />
              ※配列を渡すと暗黙的にオブジェクトに変換される
            </td>
            <td>
              受け取ったオブジェクトを第二引数の関数でループ処理し、
              <code css={styles.inlineCode}>return</code>
              された内容でオブジェクトの<strong>値（value）</strong>
              を変更したオブジェクトを生成する。
            </td>
            <td css={styles.nowrap}>オブジェクト</td>
          </tr>
          <tr>
            <th css={styles.nowrap}>_.mapKeys</th>
            <td>
              オブジェクト
              <br />
              ※配列を渡すと暗黙的にオブジェクトに変換される
            </td>
            <td>
              受け取ったオブジェクトを第二引数の関数でループ処理し、
              <code css={styles.inlineCode}>return</code>
              された内容でオブジェクトの<strong>キー（key）</strong>
              を変更したオブジェクトを生成する。
            </td>
            <td css={styles.nowrap}>オブジェクト</td>
          </tr>
        </tbody>
      </table>

      <p>
        以下の例では採用情報の配列を
        <code css={styles.inlineCode}>_.groupBy</code>と
        <code css={styles.inlineCode}>_.mapValues</code>
        を使って採用形態（<code css={styles.inlineCode}>career</code>
        ）でグルーピング後に業態（<code css={styles.inlineCode}>shop</code>
        ）でさらに分類している。
      </p>

      <ol css={styles.ol}>
        <li>
          <code css={styles.inlineCode}>_.groupBy</code>で採用情報の
          <strong>配列</strong>
          を採用形態ごとにグループ化し、あらたなオブジェクト（
          <code css={styles.inlineCode}>groupedByCareer</code>）として生成
        </li>
        <li>
          上記で生成したオブジェクトを、プロパティの値を変更する
          <code css={styles.inlineCode}>_.mapValues</code>
          で整形。関数の引数にはプロパティごとの値（
          <code css={styles.inlineCode}>value</code>
          ）を受け取り、ここでは配列が渡されることになる
        </li>
        <li>
          <code css={styles.inlineCode}>_.mapValues</code>
          の関数の引数には配列が渡されているため、これをさらに
          <code css={styles.inlineCode}>_.groupBy</code>
          で業態ごとにグループ化し、オブジェクト化する
        </li>
        <li>
          上記でオブジェクト化されたものを
          <code css={styles.inlineCode}>_.mapValues</code>
          の返り値として受け取るため、
          <code css={styles.inlineCode}>groupedByCareer</code>
          の配列だった値がオブジェクトへ変更される
        </li>
      </ol>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneLight}
        css={styles.preCode}
      >
        {`import SheetData from '@/data/recruits.json'

// 採用形態ごとにグループ化
const groupedByCareer = _.groupBy(SheetData.recruits, (item) => {
  return item.career
})

// 採用形態ごとの配列を業態ごとにグループ化
const groupedByShop = _.mapValues(groupedByCareer, (value) => {
  return _.groupBy(value, (item) => {
    return item.shop
  })
})`}
      </SyntaxHighlighter>

      <p>
        変数<code css={styles.inlineCode}>groupedByShop</code>
        には以下のように整形されたオブジェクトが格納されている。
      </p>

      <SyntaxHighlighter
        language="json"
        style={atomOneLight}
        css={styles.preCode}
      >
        {`{
  "中途採用": {
    "祇園辻利 本社": [
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
    ]
  },
  "アルバイト採用": {
    "宇治茶祇園辻利": [
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
    ],
    "茶寮都路里": [
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
      }
    ]
  }
}`}
      </SyntaxHighlighter>

      <p>
        上記のオブジェクトをループ処理することで、以下のように採用形態を
        <strong>見出し3</strong>、業態を<strong>見出し4</strong>
        とした出力ができる。
      </p>

      <SyntaxHighlighter
        language="htmlbars"
        style={atomOneLight}
        css={styles.preCode}
      >
        {`{Object.keys(groupedByShop).map((career, index) => (
  <div key={index}>
    <h3>{career}</h3>
    {Object.keys(groupedByShop[career]).map((shop, index) => (
      <div key={index}>
        <h4>{shop}</h4>
        <p>
          全 {groupedByShop[career][shop].length} 件
        </p>
        <table css={styles.table}>
          <thead>
          ...（中略）...
          </thead>
          <tbody>
            {groupedByShop[career][shop].map((item, index) => (
              <tr key={index}>
                <th>{item.title}</th>
                <td>{item.area}</td>
                ...（中略）...
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ))}
  </div>
))}`}
      </SyntaxHighlighter>

      {Object.keys(groupedByShop).map((career, index) => (
        <div key={index}>
          <h3>{career}</h3>
          {Object.keys(groupedByShop[career]).map((shop, index) => (
            <div key={index}>
              <h4>{shop}</h4>
              <p css={styles.textRight}>
                全 {groupedByShop[career][shop].length} 件
              </p>
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
                  {groupedByShop[career][shop].map((item, index) => (
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
        </div>
      ))}

      <BackHomeButton />
    </DefaultLayout>
  )
}

export default RecruitMapValuesGroupBy
