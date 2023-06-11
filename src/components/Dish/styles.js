import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  min-width: 21rem;
  height: 29rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  padding: 2.4rem;
  border-radius: 1rem;
  outline: 2px solid ${ ({ theme }) => theme.COLORS.BLACK_300 };
  font-weight: 400;
  background: ${ ({ theme }) => theme.COLORS.BLACK_200 };

  .favorite-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    border: none;
    outline: none;
    background: none;

    &:hover {
      cursor: pointer;
    }

    svg {
      font-size: 3rem;
      fill: ${({ theme, favorited }) => favorited ? theme.COLORS.WHITE_TEXT : 'none'};
      color: ${({ theme }) => theme.COLORS.WHITE_TEXT };
    }
  }


  > .dish-img img {
    max-width: 8.8rem;
    max-height: 8.8rem;
  }

  > h4 {
    font-size: 1.4rem;
    font-weight: 500;
    color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT_300 };
  }

  > h6 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${ ({ theme }) => theme.COLORS.CAKE_200 };
  }

  > .add-sub {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-size: 1.6rem;
    color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT_300 };
    
    button {
      border: none;
      outline: none;
      background: none;
      font-size: 3rem;
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

  .add-btn {
    min-height: 3.2rem;
  }
`