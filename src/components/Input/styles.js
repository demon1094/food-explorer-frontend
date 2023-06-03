import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  gap: .3rem;
  padding: 1rem;
  font-weight: 500;
  border-radius: .5rem;
  background: ${ ({ theme }) => theme.COLORS.INPUT_BG };
  
  > svg {
    font-size: 2.3rem;
    color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT };
  }
  
  > input {
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    border: none;
    outline: none;
    padding: 1rem;
    background: none;
    color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT };

    &:placeholder {
      color: ${ ({ theme }) => theme.COLORS.GRAY_TEXT };
    }
  }
`