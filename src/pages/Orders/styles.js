import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  > main {
    width: 100%;
    min-height: 100%;
    margin: 0 auto;
    padding: 5rem 3rem;
    background: ${ ({ theme }) => theme.COLORS.BODY_BG };

    h1 {
      font-family: 'Poppins', sans-serif;
      margin-bottom: 3rem;
      font-size: 3.2rem;
      font-weight: 500;
      color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT };
    }

    @media screen and (min-width: 1024px) {
      padding: 8rem 10rem;
    }
  }
`

export const OrdersWrapperMobile = styled.section`
  width: 100%;

  > div:nth-child(2) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`

export const OrdersWrapperDesktop = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 8rem 1fr;
  grid-template-areas:
  'header'
  'body';
  border-radius: 10px 10px 0 0;
  border: 1px solid ${ ({ theme }) => theme.COLORS.GRAY_200 };
  font-family: 'Poppins', sans-serif;
  color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT };

  > header {
    grid-area: header;
    display: grid;
    grid-template-columns: 1fr 1fr 3fr 1fr;

    div {
      padding: 2rem;
      display: flex;
      align-items: center;
      border: 1px solid ${ ({ theme }) => theme.COLORS.GRAY_200 };

      &:first-child {
        border-radius: 10px 0 0 0;
      }

      &:last-child {
        border-radius: 0 10px 0 0;
      }
    }
  }

  > .body {
    grid-area: body;
    display: grid;
    grid-template-columns: 1fr 1fr 3fr 1fr;

    .order-row {
      padding: 2rem;
      display: flex;
      align-items: center;
      border: 1px solid ${ ({ theme }) => theme.COLORS.GRAY_200 };

      select {
        appearance: none;
        width: 100%;
        height: 5rem;
        margin: 0;
        padding: 1rem 2rem;
        border: none;
        border-radius: .5rem;
        font-family: 'Poppins', sans-serif;
        font-size: 1.5rem;
        cursor: inherit;
        background: ${ ({ theme }) => theme.COLORS.INPUT_BG };
        color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT_300 };
      }
    }
  }
`