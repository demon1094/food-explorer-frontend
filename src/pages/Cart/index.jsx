import { Container, Dish } from "./styles"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

import SaladaIMG from "../../assets/saladaRavanello.png"

export function Cart() {
  return (
    <Container>
      <Header />

      <main>
        <h1>Carrinho de compras</h1>
        
        <section className="cart-dishes-wrapper">
          <Dish>
            <img src={SaladaIMG} alt="Imagem do prato" />

            <div className="dish-wrapper">
              <div className="dish-info">
                <h3>1x Salada Ravanello</h3>
                <span>R$29,90</span>
              </div>

              <button>Remover</button>
            </div>
          </Dish>

          <Dish>
            <img src={SaladaIMG} alt="Imagem do prato" />

            <div className="dish-wrapper">
              <div className="dish-info">
                <h3>1x Salada Ravanello</h3>
                <span>R$29,90</span>
              </div>

              <button>Remover</button>
            </div>
          </Dish>

          <Dish>
            <img src={SaladaIMG} alt="Imagem do prato" />

            <div className="dish-wrapper">
              <div className="dish-info">
                <h3>1x Salada Ravanello</h3>
                <span>R$29,90</span>
              </div>

              <button>Remover</button>
            </div>
          </Dish>
        </section>

        <div className="value">
          <h5>Total:</h5>
          <span>R$ 103,88</span>
        </div>

        <button className="pay-btn">
          Avançar
        </button>
      </main>

      <Footer />
    </Container>
  )
}