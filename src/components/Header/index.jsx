import { Container, Menu, Logo, Cart } from "./styles"
import Polygon from "../../assets/Polygon.svg"
import { TfiReceipt } from "react-icons/tfi"
import { FiSearch } from "react-icons/fi"

import { Input } from "../Input"

import { useState } from "react"
import { useCart } from "../../hooks/Cart"
import { useAuth } from "../../hooks/auth"

export function Header() {
  const [ open, setOpen ] = useState(false)

  const { dishesOnCartCounter } = useCart()
  const { signOut } = useAuth()

  function openMobileMenu() {
    if (!open) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }

  async function handleSignOut() {
    signOut()
  }

  return (
    <Container>
      <Menu>
        <div className="menu-mobile">
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
              placeholder="Busque por pratos ou ingredientes"              
            />

            <ul>
              <li><a href="/favorites">Meus favoritos</a></li>
              <li><a href="/orders">Meus pedidos</a></li>
              <li><a href="/" onClick={handleSignOut}>Sair</a></li>
            </ul>
          </nav>
        </div>
      </Menu>

      <Logo href="/">
        <img src={Polygon} />
        <span>food explorer</span>
      </Logo>

      <Cart href="/cart">
        <TfiReceipt />
        <span>{dishesOnCartCounter}</span>
      </Cart>
    </Container>
  )
}