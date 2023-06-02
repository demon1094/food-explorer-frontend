import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 11.5rem 1fr 8rem;
  grid-template-areas: 
  "header"
  "main"
  "footer";

  > header {
    grid-area: header;
  }

  > main {
    grid-area: main;
    padding: 6rem 3rem 0;
    font-family: 'Poppins', sans-serif;
    background: ${ ({ theme }) => theme.COLORS.BODY_BG };
  }

  > .footer {
    grid-area: footer;
  }
`

export const Introduction = styled.div`
  position: relative;
  width: 100%;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 3rem;
  border-radius: .5rem;
  background: ${ ({ theme }) => theme.COLORS.GRADIENT_200 };

  > img {
    position: absolute;
    bottom: 0;
    left: -3rem;
  }

  > div {
    color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT_300 };

    h3 {
      font-size: 1.8rem;
      margin-bottom: .5rem;
    }

    p {
      max-width: 20rem;
      font-size: 1.2rem;
    }
  }
`