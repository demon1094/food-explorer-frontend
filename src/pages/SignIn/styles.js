import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5rem;
  padding: 0 4rem;
  background: ${ ({ theme }) => theme.COLORS.BODY_BG };

  > form {
    width: 100%;
    max-width: 76.8rem;
    margin: 0 auto;

    .input-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 2.4rem;

      label {
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT_300 };
      }
    }

    > a:nth-child(4) {
      justify-content: center;
      font-size: 1.8rem;
      margin-top: 4rem;
    }
  }


  @media screen and (min-width: 768px) {
    padding: 4rem;
    align-items: center;

    > form {
      padding: 10rem 7rem;
      border-radius: 1rem;
      background: ${ ({ theme }) => theme.COLORS.HEADER_BG };
    }
  }
`