import { Container, Menu, Logo, Cart } from "./styles"
import Polygon from "../../assets/Polygon.svg"
import { TfiReceipt } from "react-icons/tfi"
import { FiSearch } from "react-icons/fi"

import { Input } from "../Input"

import { useState } from "react"

export function Header() {
  const [ open, setOpen ] = useState(false)

  function openMobileMenu() {
    if (!open) {
      setOpen(true)
    } else {
      setOpen(false)
    }
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
              <li><a href="#">Meus favoritos</a></li>
              <li><a href="#">Meus pedidos</a></li>
              <li><a href="#">Sair</a></li>
            </ul>
          </nav>
        </div>
      </Menu>

      <Logo>
        <img src={Polygon} />
        <span>food explorer</span>
      </Logo>

      <Cart>
        <TfiReceipt />
        <span>0</span>
      </Cart>
    </Container>
  )
}