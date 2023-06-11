import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100%;

  > main {
    width: 100%;
    min-height: 70vh;
    padding: 5rem 3rem;
    background: ${ ({ theme }) => theme.COLORS.BODY_BG };
  }
`

export const OrdersWrapper = styled.section`
  width: 100%;

  > h1 {
    font-family: 'Poppins', sans-serif;
    margin-bottom: 3rem;
    font-size: 3.2rem;
    font-weight: 500;
    color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT };
  }

  > div:nth-child(1) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`