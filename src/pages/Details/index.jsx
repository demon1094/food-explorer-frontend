import { Container } from "./styles"

import { ButtonText } from "../../components/ButtonText"
import { Ingredient } from "../../components/Ingredient"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

import { toastConfig } from "../../configs/toastConfig"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { SlArrowLeft } from "react-icons/sl"
import { TfiReceipt } from "react-icons/tfi"

import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

import { useCart } from "../../hooks/Cart"
import { useAuth } from "../../hooks/auth"

import { api } from "../../services/api"

import { Rotate, Slide } from "react-awesome-reveal"

export function Details() {
  const [ amount, setAmount ] = useState(1)
  const [ dish, setDish ] = useState({})
  const [ ingredients, setIngredients ] = useState([])

  const { addDishToCart } = useCart()

  const navigate = useNavigate()
  const params = useParams()
  const { user } = useAuth()

  const decraseAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1)
    }
  }

  async function handleAddDish() {
    await addDishToCart({
      id: dish.id,
      img: dish.image,
      name: dish.name,
      totalPrice: dish.price * amount,
      amount
    })

    toast.success('Prato adicionado ao carrinho.', toastConfig)

    setAmount(1)
  }

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)

      setDish(response.data)
      setIngredients(response.data.ingredients)
    }

    fetchDish()
  }, [params.id])
  
  return (
    <Container>
      <ToastContainer
        pauseOnFocusLoss={false}
        limit={5}
        autoClose={700}
        closeButton={false}
      />

      <Header />

      <main>
        <ButtonText
          onClick={() => handleBack()}
          icon={SlArrowLeft}
          title="voltar"
        />
        
        <div className="dish">
          <Rotate>
            <img src={`${api.defaults.baseURL}/files/${dish.image}`} alt="Imagem do Prato" />
          </Rotate>

          <Slide direction="right">
            <div className="details">
              <h2>{dish.name}</h2>

              <p>{dish.description}</p>

              <div className="ingredients">
                {
                  ingredients.map((ingredient) => (
                    <Ingredient
                      key={ingredient.id}
                      name={ingredient.name}
                    />
                  ))
                }
              </div>
              
              {
                !user.isAdmin &&
                <>
                  <div className="qtd-payment">
                    <div>
                      <button onClick={decraseAmount}>-</button>
                      <span>{String(amount).padStart(2, '0')}</span>
                      <button onClick={() => setAmount(amount + 1)}>+</button>
                    </div>

                    <Button
                      icon={TfiReceipt}
                      title={`pedir ∙ ${ new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(dish.price) }`}
                      onClick={handleAddDish}
                    />
                  </div>
                </>
              }
              
              {
                user.isAdmin ?
                <Button
                  title="Editar prato"
                  to={`/edit/${params.id}`}
                />

                :

                <></>
              }
            </div>
          </Slide>
        </div>
      </main>

      <Footer />
    </Container>
  )
}