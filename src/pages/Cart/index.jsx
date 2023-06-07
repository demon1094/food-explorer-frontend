import { Container, Dish } from "./styles"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

import { useCart } from "../../hooks/Cart"

export function Cart() {
  const { cart, removeDishFromCart } = useCart()

  const totalValue = cart.reduce((ac, current) => ac + current.totalPrice, 0 )
 
  async function handleRemoveDish(dish) {
    removeDishFromCart(dish)
  }

  return (
    <Container>
      <Header />

      <main>
        <h1>Carrinho de compras</h1>
        
        <section className="cart-dishes-wrapper">
          {
            cart.map((dish, index) => (
              <Dish key={index}>
                <img src={dish.img} alt="Imagem do prato" />
  
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

        <button className="pay-btn">
          Avançar
        </button>
      </main>

      <Footer />
    </Container>
  )
}