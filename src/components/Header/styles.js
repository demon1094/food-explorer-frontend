import styled from "styled-components"

export const Container = styled.header`
  height: 11.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  background: ${ ({ theme }) => theme.COLORS.HEADER_BG };

  > .desktop-logout {
    display: none;
    cursor: pointer;
  }

  @media screen and (min-width: 1024px) {
    justify-content: center;
    gap: 4rem;

    > .desktop-logout {
      display: block;
      font-size: 2.5rem;
      color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT };
    }
  }
`

export const MenuMobile = styled.div`
  > .menu-btn {
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

  > nav {
    display: none;
    position: absolute;
    z-index: 999;
    width: 100%;
    height: 100%;
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

  > nav.active {
    display: block;
  }

  > .menu-btn.active {
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

  @media screen and (min-width: 1024px) {
    display: none;
  }
`

export const MenuDesktop = styled.div`
  font-family: 'Poppins', sans-serif;

  > nav {
    display: flex;
    align-items: center;
    gap: 2rem;

    div {
      width: 31rem;
    }

    ul {
      display: flex;
      align-items: center;
      gap: 2rem;
      list-style: none;

      li a {
        font-size: 1.6rem;
        text-decoration: none;
        white-space: nowrap;
        color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT };
      }
    }
  }

  @media screen and (max-width: 1023px) {
    display: none;
  }
`

export const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: .8rem;
  font-family: 'Roboto', sans-serif;
  font-size: 2.1rem;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT };

  > .admin {
    font-size: 1.3rem;
    font-weight: 400;
    color: ${ ({ theme }) => theme.COLORS.CAKE_200 };
  }
`

export const MobileCart = styled.a`
  position: relative;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  > svg {
    font-size: 2.3rem;
    color: ${ ({ theme }) => theme.COLORS.WHITE_TEXT };
  }

  > span {
    font-family: 'Poppins', sans-serif;
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

  @media screen and (min-width: 1296px) {
    display: none;
  }
`

export const DesktopCart = styled.div`
  a {
    width: 17rem;
  }

  @media screen and (max-width: 1295px) {
    display: none;
  }
`