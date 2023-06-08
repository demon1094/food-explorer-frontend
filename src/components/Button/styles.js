import styled from "styled-components"

export const Container = styled.button`
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
`