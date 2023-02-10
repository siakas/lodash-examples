import type { NextPage } from 'next'

import _ from 'lodash'

import SheetData from '@/data/microcms.json'
import DefaultLayout from '@/layout/DefaultLayout'

import BackHomeButton from '@/components/BackHomeButton'

const CalendarIndex: NextPage = () => {
  const { blogs, categories } = SheetData

  const groupedBlogs = _.groupBy(blogs.contents, (blog) =>
    blog.tag.map((tag) => tag.id)
  )
  console.log(groupedBlogs)

  return (
    <DefaultLayout>
      <h2>カテゴリ一覧の件数を取得（groupBy）</h2>

      <BackHomeButton />
    </DefaultLayout>
  )
}

export default CalendarIndex
