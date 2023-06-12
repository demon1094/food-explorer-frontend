import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  min-height: 11.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.5rem;
  padding: 2rem;
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  border-radius: .8rem;
  border: 1px solid ${ ({ theme }) => theme.COLORS.GRAY_TEXT };
  color: ${ ({ theme }) => theme.COLORS.GRAY_TEXT_100 };

  > .infos {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > p {
    text-align: justify;
    line-height: 2rem;
  }

  > select {
    appearance: none;
    width: 100%;
    height: 5rem;
    margin: 0;
    padding: 1rem 2rem;
    border: none;
    border-radius: .5rem;
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    cursor: inherit;
    background: ${ ({ theme }) => theme.COLORS.INPUT_BG };
    color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT_300 };
  }
`

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  svg {
    font-size: 1rem;
  }

  .pending svg {
    color: ${ ({ theme }) => theme.COLORS.TOMATO_300 };
  }

  .preparing svg {
    color: ${ ({ theme }) => theme.COLORS.YELLOW_100 };
  }

  .delivered svg {
    color: ${ ({ theme }) => theme.COLORS.MINT_100 };
  }

  > span {
    font-size: 1.4rem;
    color: ${ ({ theme }) => theme.COLORS.GRAY_TEXT_100 };
  }
`