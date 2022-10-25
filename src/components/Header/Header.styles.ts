import { css } from '@emotion/react'

export const header = css`
  padding: 26px;
  width: 100%;
`

export const inner = css`
  max-width: 1325px;
  margin: 0 auto;
  width: 100%;
`

export const nav = css`
  margin: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  position: relative;

  > li {
    > a {
      display: block;
      /* color: #fff; */
      cursor: pointer;
      font-size: 1.2rem;
      font-weight: 300;
      padding: 1rem 1.5rem;
    }
  }
`
