/* eslint-disable react/prop-types */
import { Container, Menu, Logo, Cart } from "./styles"
import Polygon from "../../assets/Polygon.svg"
import { TfiReceipt } from "react-icons/tfi"
import { FiSearch } from "react-icons/fi"

import { Input } from "../Input"

import { useState } from "react"
import { useCart } from "../../hooks/cart"
import { useAuth } from "../../hooks/auth"

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
              onChange={onChange}
              placeholder="Busque por pratos ou ingredientes"              
            />

            <ul>
              {
                user.isAdmin &&
                <li><a href="/">Novo prato</a></li>
              }

              <li><a href="/favorites">Meus favoritos</a></li>

              {
                !user.isAdmin &&
                <>
                  <li><a href="/orders">Meus pedidos</a></li>
                </>
              }
              <li><a href="/" onClick={handleSignOut}>Sair</a></li>
            </ul>
          </nav>
        </div>
      </Menu>

      <Logo href="/">
        <img src={Polygon} />
        <span>food explorer</span>
        {
          user.isAdmin &&
          <span className="admin">admin</span>
        }
      </Logo>
      
      {
        !user.isAdmin &&
        <Cart href="/cart">
          <TfiReceipt />
          <span>{dishesOnCartCounter}</span>
        </Cart>
      }
      {
        user.isAdmin &&
        <Cart href="/orders">
          <TfiReceipt />
        </Cart>
      }
    </Container>
  )
}