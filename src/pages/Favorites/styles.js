import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  font-family: 'Poppins', sans-serif;

  > main {
    min-height: 100%;
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
      max-width: 112rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 3rem;
    }
  }

  @media screen and (min-width: 768px) {
    > main {
      display: flex;
      align-items: center;
      flex-direction: column;

      h1 {
        margin-bottom: 10rem;
      }

      .favorite-dishes-wrapper {
        display: grid;
        justify-items: center;
        gap: 5rem;
        grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));
      }
    }
  }
`

export const Dish = styled.div`
  min-width: 30rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  > img {
    width: 7rem;
    height: 7rem;
    border-radius: 50%;

    &:hover {
      cursor: pointer;
      outline: 3px solid ${ ({ theme }) => theme.COLORS.TOMATO_100 };
    }
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