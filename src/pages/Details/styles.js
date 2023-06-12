import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
    padding: 4rem 4rem;
    font-family: 'Poppins', sans-serif;
    background: ${ ({ theme }) => theme.COLORS.BODY_BG };

    > a {
      align-self: flex-start;
    }

    > img {
      width: 26rem;
      height: 26rem;
      border-radius: 50%;
    }

    > h2 {
      font-size: 2.6rem;
      font-weight: 500;
      color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT };
    }

    > p {
      max-width: 30rem;
      text-align: center;
      font-size: 1.5rem;
      color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT_300 };
    }

    > .ingredients {
      width: 30rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin: 2rem 0 3rem;
    }

    > .qtd-payment {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 2rem;

      div {
        width: 18rem;
        display: flex;
        align-items: center;
        gap: 1.6rem;
        font-size: 1.8rem;
        color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT_300 };
        
        button {
          border: none;
          outline: none;
          background: none;
          font-size: 4rem;
          padding: 0 .5rem;
          color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT_300 };

          &:hover {
            cursor: pointer;
            filter: brightness(1.6);
          }
        }

        span {
          width: 1.2rem;
        }
      }
    }
  }
`