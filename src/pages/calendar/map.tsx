import type { NextPage } from 'next'

import _ from 'lodash'
import moment from 'moment'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import SheetData from '@/data/calendars.json'
import DefaultLayout from '@/layout/DefaultLayout'

import BackHomeButton from '@/components/BackHomeButton'

import * as styles from '@/styles/mods.styles'

const CalendarIndex: NextPage = () => {
  // 今日の日付を取得
  const today = moment(new Date(), 'YYYY-MM-DD').format('YYYY-MM-DD')

  const data = _(SheetData.calendars)
    .map((item) => {
      // 本日の日付から年を取得
      const thisYear = moment(today, 'YYYY-MM-DD').format('YYYY')

      const period = item.period.split('-')
      const startDate = moment(`${thisYear}-${period[0]}`, 'YYYY-MM-DD').format(
        'YYYY-MM-DD'
      )
      let endDate = ''

      // 冬至は年をまたぐため返す年を 1 年追加する
      if (item.title === '冬至') {
        endDate = moment(
          `${Number(thisYear) + 1}-${period[1]}`,
          'YYYY-MM-DD'
        ).format('YYYY-MM-DD')
      } else {
        endDate = moment(`${thisYear}-${period[1]}`, 'YYYY-MM-DD').format(
          'YYYY-MM-DD'
        )
      }

      return {
        ...item,
        startDate,
        endDate,
      }
    })
    .sortBy('startDate')
    .value()

  return (
    <DefaultLayout>
      <h2>
        Lodash
        のメソッドチェーンを使った、プロパティの追加やソート等による配列の整形（Wrapper
        記法, map, sortBy）
      </h2>

      <p>
        Lodash では Wrapper
        記法を使うことで複数のメソッドをチェーンでつなぐことができる（第一引数が配列／オブジェクトをとるもの）。
        <br />
        これを利用することで、複数のメソッドを重ねて使う複雑なデータ変更もスマートに書くことができる。
      </p>

      <ul css={styles.index}>
        <li>
          最初に<code css={styles.inlineCode}>_(配列またはオブジェクト)</code>
          の形で、処理対象となる配列かオブジェクトを指定する
        </li>
        <li>
          各種メソッドをチェーンでつなぎ、最後は必ず
          <code css={styles.inlineCode}>value()</code>
          を書く。これがないと中間オブジェクトが返ってしまうことがあるので注意
        </li>
      </ul>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneLight}
        css={styles.preCode}
      >
        {`const users = [
  { name: 'alex', age: 36 },
  { name: 'fred', age: 40 },
  { name: 'john', age: 28 },
]

// Wrapper 記法を使わないと
const result1 = _.map(_.filter(users, (user) => user.age > 35), 'name')

console.log(result1) // ['alex', 'fred']


// Wrapper 記法を使うと
const result2 = _(users)
  .filter((user) => user.age > 35)
  .map('name')
  .value()  // メソッドチェーンでは最後に value() をつける

console.log(result2) // ['alex', 'fred']`}
      </SyntaxHighlighter>

      <p>
        以下の例では二十四節気のオブジェクトを格納した配列に対し、
        <code css={styles.inlineCode}>startDate</code>と
        <code css={styles.inlineCode}>endDate</code>
        というプロパティを追加し、配列の並び順を
        <code css={styles.inlineCode}>startDate</code>
        で昇順ソートするのを、メソッドチェーンを使って記述している。
      </p>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneLight}
        css={styles.preCode}
      >
        {`import SheetData from '@/data/news.json'

const today = moment(new Date(), 'YYYY-MM-DD').format('YYYY-MM-DD')

const data = _(SheetData.calendars) // Lodash の Wrapper 記法では最初に対象の配列／オブジェクトを指定
  .map((item) => {
    const thisYear = moment(today, 'YYYY-MM-DD').format('YYYY')

    const period = item.period.split('-')
    const startDate = moment(\`\${thisYear}-\${period[0]}\`, 'YYYY-MM-DD').format('YYYY-MM-DD')
    let endDate = ''

    if (item.title === '冬至') {
      endDate = moment(\`\${Number(thisYear) + 1}-\${period[1]}\`, 'YYYY-MM-DD').format('YYYY-MM-DD')
    } else {
      endDate = moment(\`\${thisYear}-\${period[1]}\`, 'YYYY-MM-DD').format('YYYY-MM-DD')
    }

    return {
      ...item,
      startDate,
      endDate,
    }
  })
  .sortBy('startDate')
  .value()`}
      </SyntaxHighlighter>

      <p css={styles.textRight}>全 {data.length} 件</p>
      <table css={styles.table}>
        <thead>
          <tr>
            <th>タイトル</th>
            <th>期間</th>
            <th>概要</th>
            <th>開始日</th>
            <th>終了日</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th css={styles.nowrap}>{item.title}</th>
              <td css={styles.nowrap}>{item.period}</td>
              <td dangerouslySetInnerHTML={{ __html: item.body }}></td>
              <td css={styles.nowrap}>{item.startDate}</td>
              <td css={styles.nowrap}>{item.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <BackHomeButton />
    </DefaultLayout>
  )
}

export default CalendarIndex
