/* eslint-disable react/prop-types */
import { Container } from "./styles"

import { FiHeart } from "react-icons/fi"

import { useState } from "react"

import { useCart } from "../../hooks/Cart"

export function Dish({ img, name, price }) {
  const [ favorited, setFavorited ] = useState(false)
  const [ amount, setAmount ] = useState(1)

  const { addDishToCart } = useCart()

  function handleFavorited() {
    if (!favorited) {
      setFavorited(true)
    } else {
      setFavorited(false)
    }
  }

  const decreseAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1)
    }
  }

  async function handleAddDish() {
    await addDishToCart({ img, name, price, amount })
  }

  return (
    <Container favorited={favorited}>
      <button className="favorite-btn" onClick={handleFavorited}>
        <FiHeart />
      </button>

      <a className="dish-img" href="/details/1">
        <img src={img} alt="Imagem do prato" />
      </a>

      <h4>{name}</h4>

      <h6>R$ <span>{price}</span></h6>

      <div className="add-sub">
        <button onClick={decreseAmount}>-</button>
        <span>{String(amount).padStart(2, '0')}</span>
        <button onClick={() => setAmount(amount + 1)}>+</button>
      </div>

      <button onClick={handleAddDish} className="add-btn">Incluir</button>
    </Container>
  )
}