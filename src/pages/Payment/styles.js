import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Poppins', sans-serif;

  > main {
    width: 100%;
    padding: 6rem 3rem;
    background: ${ ({ theme }) => theme.COLORS.BODY_BG };

    h1 {
      font-size: 3.2rem;
      font-weight: 500;
      margin-bottom: 3rem;
      color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT };
    }
  }
`

export const PaymentWrapper = styled.div`
  width: 100%;
  min-height: 44rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 8rem 1fr;
  grid-template-areas: 
  "pix creditcard"
  "content content";
  border-radius: .8rem;
  color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT_300 };
  border: 1px solid ${ ({ theme }) => theme.COLORS.GRAY_TEXT };
  
  svg {
    font-size: 2.4rem;
  }

  .pix {
    grid-area: pix;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .6rem;
    font-size: 1.6rem;
    border-radius: .8rem 0 0 0;
    background: ${ ({ paymentMethod, theme }) => paymentMethod === 'pix' ? theme.COLORS.CAKE_800 : 'none' };
    border-bottom: 1px solid ${ ({ theme }) => theme.COLORS.GRAY_TEXT };
    border-right: 1px solid ${ ({ theme }) => theme.COLORS.GRAY_TEXT };

    &:hover {
      cursor: pointer;
    }
  }

  .credit-card {
    grid-area: creditcard;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .6rem;
    font-size: 1.6rem;
    border-radius: 0 .8rem 0 0;
    background: ${ ({ paymentMethod, theme }) => paymentMethod === 'credit' ? theme.COLORS.CAKE_800 : 'none' };
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_TEXT };

    &:hover {
      cursor: pointer;
    }
  }

  .content {
    grid-area: content;

    .hide {
      display: none;
    }

    button {
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

      &:hover {
        cursor: pointer;
        filter: brightness(1.6);
      }
    }
    
    .pix-payment {
      width: 100%;
      padding: 3rem 2rem;
      margin: 0 auto;

      svg {
        width: 100%;
        font-size: 20rem;
        margin-bottom: 3rem;
        filter: brightness(0.7);
      }

      p {
        text-align: center;
      }
    }
    
    .credit-payment {
      width: 100%;
      padding: 4rem 2rem;
      align-self: start;

      form {
        display: flex;
        flex-direction: column;

        input {
          width: 100%;
          padding: 1.3rem 2rem;
          font-size: 1.5rem;
          border: none;
          border-radius: .3rem;
          margin: 1rem 0 3rem;
          outline: 1px solid ${({ theme }) => theme.COLORS.WHITE_TEXT_300 };
          color: ${({ theme }) => theme.COLORS.WHITE_TEXT_300 };
          background: none;

          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
          }
        }

        .valid-cvc {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-bottom: 1rem;
        }
      }
    }

    .loading-payment {
      width: 100%;
      height: 100%;
      padding: 0 2rem;
    }
  }
`

export const LoadingPayment = styled.div`
  height: 100%;

  > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    color: ${({ theme }) => theme.COLORS.GRAY_TEXT };

    > svg {
      font-size: 8rem;
    }

    > p {
      text-align: center;
      font-size: 2rem;
    }
  }
`