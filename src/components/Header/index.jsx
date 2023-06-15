/* eslint-disable react/prop-types */
import { Container, MenuMobile, MenuDesktop, Logo, MobileCart, DesktopCart } from "./styles"

import { FiSearch, FiLogOut } from "react-icons/fi"
import Polygon from "../../assets/Polygon.svg"
import { TfiReceipt } from "react-icons/tfi"

import { Button } from "../Button"
import { Input } from "../Input"

import { useCart } from "../../hooks/cart"
import { useAuth } from "../../hooks/auth"
import { useState } from "react"

import { Link } from "react-router-dom"

export function Header({ onChange }) {
  const [ open, setOpen ] = useState(false)

  const { dishesOnCartCounter, clearCart } = useCart()
  const { user, signOut } = useAuth()

  function openMobileMenu() {
    if (!open) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }

  async function handleSignOut() {
    clearCart()
    signOut()
  }

  return (
    <Container>
      <MenuMobile>
        <div 
          className={`menu-btn ${open ? 'active' : ''}`}
          onClick={openMobileMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        <nav className={`${open ? 'active' : ''}`}>
          <Input
            type="text"
            icon={FiSearch}
            onChange={onChange}
            placeholder="Busque por pratos ou ingredientes"              
          />

          <ul>
            {
              user.isAdmin ?
              <li><a href="/new">Novo prato</a></li>
              :
              <></>
            }

            <li><a href="/favorites">Meus favoritos</a></li>

            {
              !user.isAdmin &&
              <li><a href="/orders">Meus pedidos</a></li>
            }
            <li><a href="/" onClick={handleSignOut}>Sair</a></li>
          </ul>
        </nav>
      </MenuMobile>

      <Logo to="/">
        <img src={Polygon} />
        <span>food explorer</span>
        {
          user.isAdmin ?
          <span className="admin">admin</span>
          :
          <></>
        }
      </Logo>

      <MenuDesktop>
        <nav>
          <Input
            type="text"
            icon={FiSearch}
            onChange={onChange}
            placeholder="Busque por pratos ou ingredientes"              
          />

          <ul>
            {
              user.isAdmin ?
              <li><a href="/new">Novo prato</a></li>
              :
              <></>
            }

            <li><Link to="/favorites">Meus favoritos</Link></li>

            {
              !user.isAdmin &&
              <li><Link to="/orders">Meus pedidos</Link></li>
            }
          </ul>
        </nav>
      </MenuDesktop>
      
      {
        !user.isAdmin ?
        <MobileCart href="/cart">
          <TfiReceipt />
          <span>{dishesOnCartCounter}</span>
        </MobileCart>

        :

        <MobileCart href="/orders">
          <TfiReceipt />
        </MobileCart>
      }

      <DesktopCart>
        <Button
          icon={TfiReceipt}
          title={`Carrinho (${dishesOnCartCounter})`}
          to="/cart"
        />
      </DesktopCart>

      <FiLogOut
        className="desktop-logout"
        onClick={handleSignOut}
      />
    </Container>
  )
}