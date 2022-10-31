import type { NextPage } from 'next'

import SheetData from '@/data/calendars.json'
import DefaultLayout from '@/layout/DefaultLayout'

import BackHomeButton from '@/components/BackHomeButton'

import * as styles from '@/styles/mods.styles'

const CalendarIndex: NextPage = () => {
  const data = SheetData.calendars

  return (
    <DefaultLayout>
      <h2>二十四節気全表示</h2>

      <p css={styles.textRight}>全 {data.length} 件</p>
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
          {data.map((item, index) => (
            <tr key={index}>
              <th css={styles.nowrap}>{item.title}</th>
              <td css={styles.nowrap}>{item.period}</td>
              <td css={styles.nowrap}>{item.heading}</td>
              <td dangerouslySetInnerHTML={{ __html: item.body }}></td>
            </tr>
          ))}
        </tbody>
      </table>

      <BackHomeButton />
    </DefaultLayout>
  )
}

export default CalendarIndex
