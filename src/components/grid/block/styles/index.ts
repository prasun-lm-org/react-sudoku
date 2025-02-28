import styled, { css } from 'styled-components'

interface IProps {
  active?: string
  puzzle?: string
}

export const Container = styled.div<IProps>`
  ${({ active, puzzle, theme }) => css`
    align-items: center;
    background-color: ${active === 'true'
      ? theme.colors.blue
      : theme.colors.white};
    border: solid 1px ${theme.colors.black};
    cursor: pointer;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    font-size: 20px;
    font-weight: ${puzzle === 'true' ? 'bold' : 'normal'};
    height: auto;
    justify-content: center;
    transition: ${theme.transition};
    user-select: none;

    &:before {
      padding-top: 100%;
      content: '';
      float: left;
    }

    &:hover {
      background-color: ${theme.colors.lightBlue};
    }
  `}
`
