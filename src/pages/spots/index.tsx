import type { NextPage } from 'next'

import SheetData from '@/data/spots.json'
import DefaultLayout from '@/layout/DefaultLayout'

import BackHomeButton from '@/components/BackHomeButton'

import * as styles from '@/styles/mods.styles'

const SpotsIndex: NextPage = () => {
  const data = SheetData.spots

  return (
    <DefaultLayout>
      <h2>紅葉スポット全表示</h2>
      <p css={styles.textRight}>全 {data.length} 件</p>
      <table css={styles.table}>
        <thead>
          <tr>
            <th>スポット名</th>
            <th>所在地</th>
            <th>概要</th>
            <th>地図</th>
          </tr>
        </thead>
        <tbody>
          {data.map((spot, index) => (
            <tr key={index}>
              <th css={styles.nowrap}>{spot.name}</th>
              <td css={styles.nowrap}>{spot.city}</td>
              <td>{spot.description}</td>
              <td css={styles.nowrap}>
                <a href={spot.mapUrl} target="_blank" rel="noopener noreferrer">
                  Google Map
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <BackHomeButton />
    </DefaultLayout>
  )
}

export default SpotsIndex
