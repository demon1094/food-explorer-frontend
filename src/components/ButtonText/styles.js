import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  gap: .5rem;
  font-family: 'Poppins', sans-serif;
  font-size: 2.4rem;
  font-weight: 500;
  text-decoration: none;
  color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT_300 };

  &:hover {
    cursor: pointer;
    filter: brightness(1.6);
  }
`