/* eslint-disable react/prop-types */
import { Container } from "./styles"

import { FiHeart } from "react-icons/fi"

import { useState } from "react"

export function Dish({ img, name, price }) {
  const [ favorited, setFavorited ] = useState(false)
  const [ amount, setAmount ] = useState(1)

  function handleFavorited() {
    if (!favorited) {
      setFavorited(true)
    } else {
      setFavorited(false)
    }
  }

  return (
    <Container favorited={favorited}>
      <button className="favorite-btn" onClick={handleFavorited}>
        <FiHeart />
      </button>

      <img src={img} alt="Imagem do prato" />

      <h4>{name}</h4>

      <h6>R$ <span>{price}</span></h6>

      <div className="add-sub">
        <button onClick={() => {
          if (amount > 1) {
            setAmount(amount - 1)
          }
        }}
        >
          -
        </button>
        <span>{amount}</span>
        <button onClick={() => setAmount(amount + 1)}>+</button>
      </div>

      <button className="add-btn">Incluir</button>
    </Container>
  )
}