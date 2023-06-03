import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100%;

  > main {
    width: 100%;
    min-height: 70vh;
    padding: 6rem 2.5rem;
    font-family: 'Poppins', sans-serif;
    background: ${ ({ theme }) => theme.COLORS.BODY_BG };

    h1 {
      font-size: 2.5rem;
      font-weight: 500;
      margin-bottom: 5rem;
      color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT };
    }

    .cart-dishes-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 3rem;
      margin-bottom: 3rem;
    }

    .value {
      display: flex;
      align-items: center;
      gap: .7rem;
      margin-bottom: 5rem;
      color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT };
      
      h5, span {
        font-size: 1.8rem;
        font-weight: 400;
      }
    }

    .pay-btn {
      width: 100%;
      height: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      font-family: 'Poppins', sans-serif;
      font-size: 1.5rem;
      border: none;
      border-radius: .5rem;
      transition: all 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT };
      background: ${ ({ theme }) => theme.COLORS.TOMATO_100 };

      svg {
        font-size: 2rem;
      }

      &:hover {
        cursor: pointer;
        filter: brightness(1.6);
      }
    }
  }
`

export const Dish = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > img {
    width: 7rem;
  }

  > .dish-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .6rem;
    
    .dish-info {
      display: flex;
      align-items: center;
      gap: 1rem;

      h3 {
        font-size: 1.6rem;
        white-space: nowrap;
        font-weight: 500;
        color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT };
      }

      span {
        font-size: 1.3rem;
        font-weight: 600;
        color: ${({ theme }) => theme.COLORS.GRAY_TEXT };
      }
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