import styled from "styled-components"

export const Container = styled.footer`
  width: 100%;
  min-height: 12rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  background: ${ ({ theme }) => theme.COLORS.FOOTER_BG };

  > div {
    display: flex;
    align-items: center;
    gap: .6rem;

    svg {
      font-size: 2rem;
    }

    h3 {
      font-family: 'Roboto', sans-serif;
      font-size: 1.6rem;
      color: ${ ({ theme }) => theme.COLORS.GRAY_TEXT };
    }
  }

  > p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.3rem;
    color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT_300 };
  }
`