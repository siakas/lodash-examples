import type { NextPage } from 'next'

import SheetData from '@/data/news.json'
import DefaultLayout from '@/layout/DefaultLayout'

import BackHomeButton from '@/components/BackHomeButton'

import * as styles from '@/styles/mods.styles'

const NewsIndex: NextPage = () => {
  const data = SheetData.data

  return (
    <DefaultLayout>
      <h2>ニュース一覧全表示</h2>

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

export default NewsIndex
