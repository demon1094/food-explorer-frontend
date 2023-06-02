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

  > .header {
    grid-area: header;
  }

  > main {
    grid-area: main;
    background: ${ ({ theme }) => theme.COLORS.BODY_BG };
  }

  > .footer {
    grid-area: footer;
  }
`