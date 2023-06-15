import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  > main {
    height: 100%;
    padding: 6rem 3rem;
    font-family: 'Poppins', sans-serif;
    background: ${ ({ theme }) => theme.COLORS.BODY_BG };
  }

  > .footer {
    grid-area: footer;
  }
`

export const Introduction = styled.div`
  position: relative;
  width: 100%;
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
  }

  > div {
    position: relative;
    z-index: 2;

    color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT_300 };

    h3 {
      font-size: 1.8rem;
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
`

export const Dishes = styled.div`
  width: 100%;
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
`