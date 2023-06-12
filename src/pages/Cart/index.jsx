import { Container, Dish } from "./styles"

import { EmptyDisplay } from "../../components/EmptyDisplay"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"

import { BsCartX } from "react-icons/bs"

import { toastConfig } from "../../services/toastConfig"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { useCart } from "../../hooks/Cart"
import { api } from "../../services/api"

export function Cart() {
  const { cart, removeDishFromCart } = useCart()

  const totalValue = cart.reduce((ac, current) => ac + current.totalPrice, 0 )
 
  async function handleRemoveDish(dish) {
    removeDishFromCart(dish)

    toastConfig.autoClose = 700
    toast.info('Prato removido do carrinho.', toastConfig)
  }

  return (
    <Container>
      <Header />

      <ToastContainer
        pauseOnFocusLoss={false}
        limit={5}
        autoClose={700}
        closeButton={false}
      />

      <main>
        <h1>Carrinho de compras</h1>
        
        {
          cart.length > 0 &&
          <>
            <section className="cart-dishes-wrapper">
            {
              cart.map((dish, index) => (
                <Dish key={index}>
                  <img src={`${api.defaults.baseURL}/files/${dish.img}`} alt="Imagem do prato" />
    
                  <div className="dish-wrapper">
                    <div className="dish-info">
                      <h3>{dish.amount}x {dish.name}</h3>
                      <span>{ new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(dish.totalPrice) }</span>
                    </div>
    
                    <button onClick={() => handleRemoveDish(dish)}>Remover</button>
                  </div>
                </Dish>
              ))
            }
            </section>

            <div className="value">
              <h5>Total:</h5>
              <span>{ new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(totalValue) }</span>
            </div>

            <Button
              title="Avançar"
              to="/payment"
            />
          </>
        }
        {
          cart.length <= 0 &&
          <EmptyDisplay
            icon={BsCartX}
            message="Seu carrinho está vazio"
          />
        }
      </main>

      <Footer />
    </Container>
  )
}