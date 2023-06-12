import styled from 'styled-components'

export const Container = styled.div`
  min-width: 15rem;
  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 1.6rem;
  border-radius: 1rem;
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${ theme.COLORS.GRAY_TEXT }` : "none" };
  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.GRAY_BG };
  color: ${({ theme }) => theme.COLORS.WHITE_TEXT };

  > button {
    border: none;
    background: none;
    font-size: 1.6rem;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.TOMATO_100 };
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.MINT_100 };
  }

  > input {
    width: 100%;
    height: 5.6rem;
    padding: 1.2rem;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.COLORS.WHITE_TEXT };
    background: transparent;

    &::placeholder {
      ${({ theme }) => theme.COLORS.GRAY_TEXT };
    }
  }
`