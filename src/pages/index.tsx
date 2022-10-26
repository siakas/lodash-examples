import type { NextPage } from 'next'
import Link from 'next/link'

import DefaultLayout from '@/layout/DefaultLayout'

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <h2>JSON データ</h2>
      <ul>
        <li>
          <a href="/data/spots.json" target="_blank" rel="noopener noreferrer">
            紅葉スポット情報
          </a>
        </li>
        <li>
          <a href="/data/news.json" target="_blank" rel="noopener noreferrer">
            ニュース一覧
          </a>
        </li>
        <li>
          <a
            href="/data/recruits.json"
            target="_blank"
            rel="noopener noreferrer"
          >
            採用情報
          </a>
        </li>
        <li>
          <a
            href="/data/calendars.json"
            target="_blank"
            rel="noopener noreferrer"
          >
            二十四節気
          </a>
        </li>
      </ul>
      <h2>配列操作サンプル</h2>
      <ul>
        <li>
          <Link href="/spots/">
            <a>紅葉スポット全表示</a>
          </Link>
        </li>
        <li>
          <Link href="/spots/filter/">
            <a>条件に一致するもので絞り込む（filter）</a>
          </Link>
        </li>
        <li>
          <Link href="/spots/filter-includes/">
            <a>配列の条件に一致するもので絞り込む（filter, includes）</a>
          </Link>
        </li>
      </ul>
    </DefaultLayout>
  )
}

export default Home
