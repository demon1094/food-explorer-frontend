import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Poppins', sans-serif;

  > main {
    min-height: 70vh;
    padding: 6rem 3.5rem;
    background: ${ ({ theme }) => theme.COLORS.BODY_BG };

    h1 {
      font-size: 3.2rem;
      font-weight: 500;
      margin-bottom: 4rem;
      color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT };
    }

    .favorite-dishes-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 3rem;
    }
  }
`

export const Dish = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  > img {
    width: 7rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .6rem;

    h3 {
      font-size: 2rem;
      font-weight: 500;
      color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT };
    }

    button {
      border: none;
      outline: none;
      background: none;
      font-family: 'Roboto', sans-serif;
      font-size: 1.35rem;
      font-weight: 400;
      color: ${ ({ theme }) => theme.COLORS.TOMATO_400 };

      &:hover {
        cursor: pointer;
        filter: brightness(1.6);
      }
    }
  }
`