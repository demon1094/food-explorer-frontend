import styled from "styled-components"

export const Container = styled.span`
  padding: .6rem 1rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
  border-radius: .5rem;
  background: ${ ({ theme }) => theme.COLORS.GRAY_200 };
  color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT };
`