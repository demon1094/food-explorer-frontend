/* eslint-disable react/prop-types */
import { Container } from "./styles"

import { FiHeart } from "react-icons/fi"

import { useState } from "react"

import { useCart } from "../../hooks/Cart"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export function Dish({ img, name, price }) {
  const [ favorited, setFavorited ] = useState(false)
  const [ amount, setAmount ] = useState(1)

  const { addDishToCart } = useCart()

  const toastConfig = {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    draggablePercent: 60,
    progress: undefined,
    theme: "dark",
    pauseOnFocusLoss: false
  }

  async function handleFavorited() {
    if (!favorited) {
      setFavorited(true)
      toast.success('Prato adicionado aos favoritos.', toastConfig)
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
    await addDishToCart({ img, name, totalPrice: price * amount, amount })

    setAmount(1)

    toast.success('Prato adicionado ao carrinho.', toastConfig)
  }

  return (
    <Container favorited={favorited}>
      <ToastContainer
        pauseOnFocusLoss={false}
        autoClose={1000}
        limit={5}
        closeButton={false}
      />

      <button className="favorite-btn" onClick={handleFavorited}>
        <FiHeart />
      </button>

      <a className="dish-img" href="/details/1">
        <img src={img} alt="Imagem do prato" />
      </a>

      <h4>{name}</h4>

      <h6>{ new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(price) }</h6>

      <div className="add-sub">
        <button onClick={decreseAmount}>-</button>
        <span>{String(amount).padStart(2, '0')}</span>
        <button onClick={() => setAmount(amount + 1)}>+</button>
      </div>

      <button onClick={handleAddDish} className="add-btn">Incluir</button>
    </Container>
  )
}