import type { NextPage } from 'next'
import Link from 'next/link'

import DefaultLayout from '@/layout/DefaultLayout'

import * as styles from '@/styles/mods.styles'

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <p css={styles.version}>v0.2.5</p>
      <h2>JSON データ</h2>
      <ul css={styles.index}>
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
      <h3>紅葉スポット</h3>
      <ul css={styles.index}>
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
        <li>
          <Link href="/spots/find/">
            <a>条件に一致する最初の要素を取得する（find）</a>
          </Link>
        </li>
        <li>
          <Link href="/spots/padstart/">
            <a>ゼロパディング、ゼロサプレス（padStart, trimStart）</a>
          </Link>
        </li>
      </ul>
      <h3>ニュース一覧</h3>
      <ul css={styles.index}>
        <li>
          <Link href="/news/">
            <a>ニュース一覧全表示</a>
          </Link>
        </li>
        <li>
          <Link href="/news/take/">
            <a>配列の最初から指定した件数の値を取得（take）</a>
          </Link>
        </li>
        <li>
          <Link href="/news/chunk/">
            <a>指定した件数で配列を分割する（chunk）</a>
          </Link>
        </li>
        <li>
          <Link href="/news/orderby/">
            <a>指定したプロパティの値（あるいは関数）でソートする（orderBy）</a>
          </Link>
        </li>
        <li>
          <Link href="/news/clonedeep/">
            <a>配列やオブジェクトを深い階層までまるごと複製する（cloneDeep）</a>
          </Link>
        </li>
        <li>
          <Link href="/news/map/">
            <a>配列をループして整形し、あらたな配列を生成（map）</a>
          </Link>
        </li>
        <li>
          <Link href="/news/map-uniqueby/">
            <a>map で生成した配列から重複した内容を削除（map, uniqBy）</a>
          </Link>
        </li>
      </ul>
      <h3>採用情報</h3>
      <ul css={styles.index}>
        <li>
          <Link href="/recruit/">
            <a>採用情報全表示</a>
          </Link>
        </li>
        <li>
          <Link href="/recruit/groupby/">
            <a>指定したプロパティによるグループ化（groupBy）</a>
          </Link>
        </li>
        <li>
          <Link href="/recruit/mapvalues-groupby/">
            <a>
              グループ化されたオブジェクトの配列をさらにグループ化（groupBy,
              mapValues）
            </a>
          </Link>
        </li>
        {/* <li>
          <Link href="/recruit/reduce/">
            <a>（reduce）</a>
          </Link>
        </li> */}
      </ul>
      <h3>二十四節気</h3>
      <ul css={styles.index}>
        <li>
          <Link href="/calendar/">
            <a>二十四節気全表示</a>
          </Link>
        </li>
        <li>
          <Link href="/calendar/map/">
            <a>
              Lodash
              のメソッドチェーンを使った、プロパティの追加やソート等による配列の整形（Wrapper
              記法, map, sortBy）
            </a>
          </Link>
        </li>
        <li>
          <Link href="/calendar/keyby/">
            <a>配列のオブジェクト化（keyBy）</a>
          </Link>
        </li>
      </ul>
    </DefaultLayout>
  )
}

export default Home
