import type { NextPage } from 'next'

import SheetData from '@/data/recruits.json'
import DefaultLayout from '@/layout/DefaultLayout'

import BackHomeButton from '@/components/BackHomeButton'

import * as styles from '@/styles/mods.styles'

const RecruitIndex: NextPage = () => {
  const data = SheetData.recruits

  return (
    <DefaultLayout>
      <h2>ニュース一覧全表示</h2>

      <p css={styles.textRight}>全 {data.length} 件</p>
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
            <th>採用形態</th>
            <th>業態</th>
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
      </table>

      <BackHomeButton />
    </DefaultLayout>
  )
}

export default RecruitIndex
