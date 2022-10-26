import { css } from '@emotion/react'

export const global = css`
  body {
    background: #fff;
    color: #222;
    font-size: 1rem;
    position: relative;
    font-family: 'Open Sans', sans-serif;
  }

  img,
  svg {
    max-width: 100%;
    vertical-align: bottom;
  }

  strong {
    font-weight: bold;
  }

  em {
    font-style: normal;
    font-weight: bold;
  }

  p {
    margin: 1.2em 0;
    max-height: 100%;
    line-height: 1.9;
  }

  hr {
    display: none;
  }

  main {
    display: block;
  }

  button {
    margin: 0;
    padding: 0;
    background: transparent;
    border: none;
    cursor: pointer;
  }

  [hidden] {
    display: none;
  }
`
