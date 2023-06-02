import styled from "styled-components"

export const Container = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 2rem;
  background: ${ ({ theme }) => theme.COLORS.HEADER_BG };
`

export const Menu = styled.div`
  > .menu-mobile {
    .menu-btn {
      display: flex;
      flex-direction: column;
      gap: .6rem;
      
    
      &:hover {
        cursor: pointer;
        filter: brightness(0.6);
      }
    
      div {
        width: 2.8rem;
        height: .3rem;
        border-radius: .5rem;
        transition: all 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        background: ${ ({ theme }) => theme.COLORS.WHITE_TEXT };
      }
    }

    nav {
      display: none;
      position: fixed;
      width: 100%;
      height: 80vh;
      top: 11.5rem;
      left: 0rem;
      padding: 4rem 2.5rem 0;
      transition: all 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      font-family: 'Poppins', sans-serif;
      background: ${ ({ theme }) => theme.COLORS.BODY_BG };

      ul {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        margin-top: 5rem;
        padding-left: 1rem;
        list-style: none;
  
        li a {
          padding-bottom: 1rem;
          font-size: 2rem;
          text-decoration: none;
          color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT };

          &:hover {
            filter: brightness(0.6);
          }
        }
      }
    }

    nav.active {
      display: block;
    }
  }

  > .menu-mobile .menu-btn.active {
    div:nth-child(1) {
      transform: translateY(.9rem) rotate(45deg);
    }

    div:nth-child(2) {
      opacity: 0;
    }

    div:nth-child(3) {
      transform: translateY(-.9rem) rotate(-45deg);
    }
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;
  font-family: 'Roboto', sans-serif;
  font-size: 2.1rem;
  font-weight: 600;
  color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT };
`

export const Cart = styled.div`
  position: relative;

  &:hover {
    cursor: pointer;
  }

  > svg {
    font-size: 2.3rem;
    color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT };
  }

  > span {
    position: absolute;
    left: 1.2rem;
    bottom: 1.8rem;
    padding: .3rem .6rem;
    border-radius: 10px;
    font-size: 1.3rem;
    font-weight: 500;
    color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT };
    background: ${ ({ theme }) => theme.COLORS.TOMATO_100 };
  }
`