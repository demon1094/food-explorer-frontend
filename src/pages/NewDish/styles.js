import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100%;

  > main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 5rem 3rem;
    font-family: 'Poppins', sans-serif;
    background: ${ ({ theme }) => theme.COLORS.BODY_BG };

    h1 {
      font-size: 3.2rem;
      font-weight: 500;
      color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT_300 };
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 2.5rem;

      .input-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
  
        label {
          font-family: 'Roboto', sans-serif;
          font-size: 1.7rem;
          color: ${ ({ theme }) => theme.COLORS.GRAY_TEXT_100 };
        }
  
        input[type='file'] {
          color: rgba(0, 0, 0, 0);
  
          &::-webkit-file-upload-button {
            visibility: hidden;
          }
  
          &::before {
            content: 'Selecione imagem';
            color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT };
          }
        }

        input[type='number'] {
          -moz-appearance: textfield;

          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        }

        textarea {
          resize: none;
          outline: none;
          border: none;
          border-radius: .8rem;
          padding: 2rem;
          font-size: 1.5rem;
          font-family: 'Roboto', sans-serif;
          color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT };
          background: ${ ({ theme }) => theme.COLORS.INPUT_BG };
        }

        select {
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

        .ingredients {
          width: 100%;
          min-height: 5.5rem;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          padding: .8rem;
          border-radius: .8rem;
          background: ${ ({ theme }) => theme.COLORS.INPUT_BG };
        }
      }
    }
  }
`