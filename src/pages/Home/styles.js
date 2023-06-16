import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  
  > main {
    height: 100%;
    padding: 6rem 3rem;
    font-family: 'Poppins', sans-serif;
    background: ${ ({ theme }) => theme.COLORS.BODY_BG };

    @media screen and (min-width: 1120px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  > .footer {
    grid-area: footer;
  }
`

export const Introduction = styled.div`
  position: relative;
  width: 100%;
  max-width: 112rem;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 2rem;
  margin-bottom: 6rem;
  border-radius: .5rem;
  background: ${ ({ theme }) => theme.COLORS.GRADIENT_200 };

  > img {
    position: absolute;
    bottom: 0;
    z-index: 1;
    left: -3rem;

    &:nth-child(2) {
      display: none;
    }
  }

  > div {
    position: relative;
    z-index: 2;

    color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT_300 };

    h3 {
      font-size: 1.8rem;
      font-weight: 500;
      margin-bottom: .5rem;
    }

    p {
      max-width: 20rem;
      font-size: 1.2rem;
    }
  }

  @media (max-width: 425px) {
    justify-content: center;
    padding-right: 0;

    img {
      opacity: 0.35;
    }

    h3, p {
      filter: drop-shadow(0 0 5px #000);
    }
  }

  @media screen and (min-width: 600px) {
    justify-content: center;

    > img {
      position: relative;
      bottom: 1.5rem;
    }
  }

  @media screen and (min-width: 768px) {
    justify-content: flex-end;
    padding-right: 10rem;
    height: 20rem;

    > img {
      width: 25rem;
      height: 25rem;
      position: absolute;
      bottom: 0;
      z-index: 1;
      left: -1rem;

      &:nth-child(1) {
        display: none;
      }

      &:nth-child(2) {
        display: block;
      }
    }

    > div {
      h3 {
        font-size: 3.3rem;
      }

      p {
        font-size: 1.5rem;
        max-width: 35rem;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    height: 26rem;
    margin-top: 5rem;
    padding-right: 3rem;

    > img {
      width: unset;
      height: 35rem;
      left: -4.5rem;
    }

    > div {
      h3 {
        font-size: 3.8rem;
      }

      p {
        font-size: 1.35rem;
        max-width: unset;
      }
    }
  }

  @media screen and (min-width: 1296px) {
    padding-right: 12rem;
    margin-top: 12rem;
    padding-right: 10rem;

    > img {
      height: unset;
      left: -5rem;
    }

    > div {
      h3 {
        font-size: 4rem;
      }

      p {
        font-size: 1.4rem;
      }
    }
  }
`

export const Dishes = styled.div`
  width: 100%;
  max-width: 112rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  
  > .dish-category {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    h3 {
      font-size: 1.8rem;
      font-weight: 400;
      color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT_300 };
    }

    .dishes-wrapper {
      display: flex;
      align-items: center;
      gap: 1.6rem;
      overflow-x: auto;

      &::-webkit-scrollbar {
        width: 0;
      }
    }
  }

  @media screen and (min-width: 1296px) {
    gap: 10rem;
    
    > .dish-category {
      h3 {
        font-size: 2.5rem;
      }

      .dishes-wrapper {
        overflow-x: scroll;

        &::-webkit-scrollbar-track {
          border-radius: 1rem;
          background: ${({ theme }) => theme.COLORS.GRADIENT_200 };
        }

        &::-webkit-scrollbar-thumb {
          background-color: ${({ theme }) => theme.COLORS.TOMATO_300 };
          border-radius: 1rem;
          border: 5px solid ${({ theme }) => theme.COLORS.TOMATO_300 };
        }
      }
    }
  }
`