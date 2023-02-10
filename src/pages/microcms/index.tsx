import type { NextPage } from 'next'

import SheetData from '@/data/microcms.json'
import DefaultLayout from '@/layout/DefaultLayout'

import BackHomeButton from '@/components/BackHomeButton'

import * as styles from '@/styles/mods.styles'

const CalendarIndex: NextPage = () => {
  const { blogs, categories, tags } = SheetData

  return (
    <DefaultLayout>
      <h2>microCMS 全表示</h2>

      <h3>ブログ</h3>

      <p css={styles.textRight}>全 {blogs.contents.length} 件</p>
      <table css={styles.table}>
        <thead>
          <th>ID</th>
          <th>タイトル</th>
          <th>カテゴリ</th>
          <th>タグ</th>
          <th>著者</th>
        </thead>
        <tbody css={styles.fontSmall}>
          {blogs.contents.map((blog) => (
            <tr key={blog.id}>
              <th>{blog.id}</th>
              <td>{blog.title}</td>
              <td css={styles.nowrap}>{blog.category.name}</td>
              <td>
                <ul>
                  {blog.tag.map((tag) => (
                    <li key={tag.id}>{tag.name}</li>
                  ))}
                </ul>
              </td>
              <td>{blog.writer.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>カテゴリ</h3>

      <p css={styles.textRight}>全 {categories.contents.length} 件</p>
      <table css={[styles.table, styles.tableNarrow]}>
        <thead>
          <tr>
            <th>ID</th>
            <th>カテゴリ名</th>
          </tr>
        </thead>
        <tbody>
          {categories.contents.map((category) => (
            <tr key={category.id}>
              <th>{category.id}</th>
              <td>{category.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>タグ</h3>

      <p css={styles.textRight}>全 {tags.contents.length} 件</p>
      <table css={[styles.table, styles.tableNarrow]}>
        <thead>
          <tr>
            <th>ID</th>
            <th>カテゴリ名</th>
          </tr>
        </thead>
        <tbody>
          {tags.contents.map((tag) => (
            <tr key={tag.id}>
              <th>{tag.id}</th>
              <td>{tag.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <BackHomeButton />
    </DefaultLayout>
  )
}

export default CalendarIndex
