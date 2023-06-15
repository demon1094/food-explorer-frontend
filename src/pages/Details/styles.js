import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 80vh;

  > main {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
    padding: 4rem;
    font-family: 'Poppins', sans-serif;
    background: ${ ({ theme }) => theme.COLORS.BODY_BG };

    > a {
      align-self: flex-start;
    }

    .dish {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3rem;

      img {
        width: 26rem;
        height: 26rem;
        border-radius: 50%;
        margin-top: 6rem;
      }
  
      .details {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
  
        h2 {
          font-size: 2.6rem;
          font-weight: 500;
          color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT };
        }
    
        p {
          max-width: 30rem;
          text-align: center;
          font-size: 1.5rem;
          color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT_300 };
        }
    
        .ingredients {
          width: 30rem;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin: 2rem 0 3rem;
        }
    
        .qtd-payment {
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
    }

    @media screen and (min-width: 1024px) {
      > a {
        margin-left: 15rem;
      }

      .dish {
        flex-direction: row;
        justify-content: center;
        gap: 10rem;
        margin-top: 20rem;

        img {
          margin-top: 0;
        }
  
        .details {
          align-items: flex-start;
  
          p {
            text-align: start;
            max-width: 50rem;
          }
  
          .ingredients {
            width: 60rem;
            justify-content: flex-start;
          }
        }
      }
    }

    @media screen and (min-width: 1296px) {
      padding: 10rem 15rem;

      > a {
        align-self: safe;
        font-size: 3rem;
      }

      .dish {
        margin-top: 5rem;

        img {
          width: 45rem;
          height: 45rem;
        }

        .details {
          h2 {
            font-size: 5rem;
          }

          p {
            max-width: 60rem;
            font-size: 2rem;
          }
        }
      }
    }

    @media screen and (min-width: 1666px) {
      > a {
        margin-left: 27rem;
      }
    }
  }
`