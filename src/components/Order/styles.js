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