import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: 'Roboto', sans-serif;
  
  h2 {
    font-size: 3.7rem;
    white-space: nowrap;
    color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT };
  }
`