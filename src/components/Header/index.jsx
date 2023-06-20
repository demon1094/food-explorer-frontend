/* eslint-disable react/prop-types */
import { Container, MenuMobile, MenuDesktop, Logo, MobileCart, DesktopCart } from "./styles"

import { FiSearch, FiLogOut } from "react-icons/fi"
import Polygon from "../../assets/Polygon.svg"
import { TfiReceipt } from "react-icons/tfi"

import { Button } from "../Button"
import { Input } from "../Input"

import { useState, useEffect } from "react"
import { useCart } from "../../hooks/Cart"
import { useAuth } from "../../hooks/auth"

import { api } from "../../services/api"

import { Link, useNavigate } from "react-router-dom"

export function Header({ onChange }) {
  const [ open, setOpen ] = useState(false)
  const [ orders, setOrders ] = useState([])

  const { dishesOnCartCounter, clearCart } = useCart()
  const { user, signOut } = useAuth()
  
  const navigate = useNavigate()

  function openMobileMenu() {
    if (!open) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }

  async function handleSignOut() {
    clearCart()
    navigate('/')
    signOut()
  }

  useEffect(() => {
    async function fetchOrders() {
      await api.get('/orders')
      .then((response) => {
        setOrders(response.data)
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data.message)
        } else {
          console.log('Erro ao consultar os pedidos pela API')
        }
      })
    }

    fetchOrders()
  }, [])

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
              <li><Link to="/new">Novo prato</Link></li>
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
        {
          !user.isAdmin ?
          <Button
            icon={TfiReceipt}
            title={`Carrinho (${dishesOnCartCounter})`}
            to="/cart"
          />

          :

          <Button
            icon={TfiReceipt}
            title={`Pedidos (${orders.length})`}
            to="/orders"
          />
        }
      </DesktopCart>

      <FiLogOut
        className="desktop-logout"
        onClick={handleSignOut}
      />
    </Container>
  )
}