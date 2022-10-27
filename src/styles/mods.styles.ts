import { css } from '@emotion/react'

export const table = css`
  margin: 0 0 2rem;
  border: 1px solid #ddd;
  border-collapse: collapse;
  /* width: 100%; */

  th,
  td {
    border: 1px solid #ddd;
    padding: 0.6em 2em 0.6em 1em;
  }

  thead {
    th {
      text-align: center;
      font-weight: bold;
      white-space: nowrap;
      background-color: #eee;
    }
  }

  tbody {
    th {
      text-align: left;
      font-weight: normal;
    }
  }
`

export const nowrap = css`
  white-space: nowrap;
`

export const textRight = css`
  text-align: right;
  margin: 0.4em 0;
`

export const inlineCode = css`
  background-color: #e6edf5;
  padding: 0.24em 0.5em;
  font-size: 0.9em;
  border-radius: 4px;
  margin: 0 0.3em;
  vertical-align: middle;
  font-family: Menlo, Consolas, Liberation Mono, monospace;
`

export const preCode = css`
  margin: 2rem 0;
  display: block;
  font-family: Menlo, Consolas, Liberation Mono, monospace;
  font-size: 0.85rem !important;
  padding: 1.2rem !important;
  border-radius: 6px !important;
  background: #f4f4f4 !important;

  > code {
    font-size: inherit;
    display: block;
    font-family: inherit;
  }
`

export const outline = css`
  margin: 2rem 0;
`

export const index = css`
  > li {
    line-height: 1.7;

    + li {
      margin-top: 0.1em;
    }

    a {
      color: #2980b9;
      text-decoration: none;

      :hover {
        text-decoration: underline;
      }
    }
  }
`
