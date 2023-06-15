import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    width: 100%;
    min-height: 100%;
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
      max-width: 112rem;
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
  }

  @media screen and (min-width: 800px) {
    > main {
      display: flex;
      align-items: center;
      flex-direction: column;

      h1 {
        margin-bottom: 10rem;
      }

      .cart-dishes-wrapper {
        display: grid;
        justify-items: center;
        gap: 4rem;
        grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
      }

      .value-payment {
        width: 100%;
        max-width: 90rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10rem;

        .value {
          margin-top: 5rem;
  
          h5, span {
            font-size: 2.5rem;
            align-self: flex-start;
          }
        }
      }
    }
  }
`

export const Dish = styled.div`
  min-width: 35rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  > img {
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
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