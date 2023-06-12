import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-height: 4rem;
  display: flex;
  align-items: center;
  padding-right: 1.2rem;
  border-radius: 1rem;
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${ theme.COLORS.GRAY_TEXT }` : "none" };
  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.GRAY_BG };
  color: ${({ theme }) => theme.COLORS.WHITE_TEXT };

  > button {
    border: none;
    background: none;
    font-size: 1.8rem;
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
    padding-left: 1.2rem;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.COLORS.WHITE_TEXT };
    background: transparent;

    &::placeholder {
      ${({ theme }) => theme.COLORS.GRAY_TEXT };
    }
  }
`