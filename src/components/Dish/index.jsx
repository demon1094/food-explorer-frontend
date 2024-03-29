/* eslint-disable react/prop-types */
import { Container } from "./styles"

import { Button } from "../Button"

import { FiHeart } from "react-icons/fi"

import { useState, useEffect } from "react"
import { useCart } from "../../hooks/Cart"
import { useAuth } from "../../hooks/auth"

import { toastConfig } from "../../configs/toastConfig"
import "react-toastify/dist/ReactToastify.css"
import { toast } from "react-toastify"

import { api } from "../../services/api"

import { Link } from "react-router-dom"

export function Dish({ id, img, name, price, description }) {
  const [ favorited, setFavorited ] = useState(false)
  const [ amount, setAmount ] = useState(1)
  
  const image = `${api.defaults.baseURL}/files/${img}`

  const { user } = useAuth()
  
  const { addDishToCart } = useCart()
  
  async function handleFavorited() {
    if (!favorited) {
      setFavorited(true)

      await api.post(`/favorites?dish_id=${id}`)
      .then(() => {
        toast.success('Prato adicionado aos favoritos.', toastConfig)
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message, toastConfig)
        } else {
          toast.error('Não foi possível favoritar esse prato.', toastConfig)
        }
      })
    } else {
      setFavorited(false)
      
      await api.delete(`/favorites/${id}`)
    }
  }

  const decreseAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1)
    }
  }

  async function handleAddDish() {
    await addDishToCart({ id, img, name, totalPrice: price * amount, amount })

    setAmount(1)

    toast.success('Prato adicionado ao carrinho.', toastConfig)
  }

  useEffect(() => {
    async function fetchFavorite() {
      const response = await api.get(`/favorites/${id}`)

      const dishFavorited = response.data.find(item => item.dish_id === id)

      if (dishFavorited) {
        setFavorited(true)
      }
    }

    fetchFavorite()
  }, [id])

  return (
    <Container favorited={favorited}>
      <button className="favorite-btn" onClick={handleFavorited}>
        <FiHeart />
      </button>

      <Link className="dish-img" to={`/details/${id}`}>
        <img src={image} alt="Imagem do prato" />
      </Link>

      <h4>{name}</h4>

      <p>{description}</p>

      <h6>{ new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(price) }</h6>

      <footer>
        {
          !user.isAdmin &&
          <>
            <div className="add-sub">
              <button onClick={decreseAmount}>-</button>
              <span>{String(amount).padStart(2, '0')}</span>
              <button onClick={() => setAmount(amount + 1)}>+</button>
            </div>

            <Button
              title="incluir"
              className="add-btn"
              onClick={handleAddDish}
            />
          </>
        }

        {
          user.isAdmin ?
          <Button
            title="Editar"
            className="edit-btn"
            to={`/edit/${id}`}
          />

          :

          <></>
        }
      </footer>
    </Container>
  )
}