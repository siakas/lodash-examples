import type { NextPage } from 'next'

import DefaultLayout from '@/layout/DefaultLayout'

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <ul>
        <li>
          <a href="null">filter</a>
        </li>
        <li>
          <a href="null">groupBy</a>
        </li>
      </ul>
    </DefaultLayout>
  )
}

export default Home
