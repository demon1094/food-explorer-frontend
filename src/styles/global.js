import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    font-size: 1.6rem;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 0;
    }
  }
`