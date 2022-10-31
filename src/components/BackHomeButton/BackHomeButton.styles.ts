import { css } from '@emotion/react'

export const button = css`
  display: flex;
  justify-content: center;
  margin: 4rem 0 0;

  > a {
    display: block;
    text-decoration: none;
    background-color: #2980b9;
    color: #fff;
    padding: 1em 4em;
    border-radius: 0.5em;
    transition: opacity 0.2s ease;

    :hover {
      opacity: 0.8;
    }
  }
`
