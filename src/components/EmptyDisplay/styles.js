import styled from "styled-components"

export const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  padding-top: 5rem;

  svg {
    font-size: 15rem;
    color: ${ ({ theme }) => theme.COLORS.GRAY_TEXT };
  }

  h2 {
    font-size: 2.2rem;
    font-weight: 500;
    color: ${ ({ theme }) => theme.COLORS.GRAY_TEXT };
  }
`