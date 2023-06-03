import { Container, Dish } from "./styles"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

import SaladaIMG from "../../assets/saladaRavanello.png"

export function Favorites() {
  return (
    <Container>
      <Header />

      <main>
        <h1>Meus favoritos</h1>
        
        <section className="favorite-dishes-wrapper">
          <Dish>
            <img src={SaladaIMG} alt="Imagem do prato" />
            <div>
              <h3>Salada Ravanello</h3>
              <button>Remover dos favoritos</button>
            </div>
          </Dish>

          <Dish>
            <img src={SaladaIMG} alt="Imagem do prato" />
            <div>
              <h3>Salada Ravanello</h3>
              <button>Remover dos favoritos</button>
            </div>
          </Dish>

          <Dish>
            <img src={SaladaIMG} alt="Imagem do prato" />
            <div>
              <h3>Salada Ravanello</h3>
              <button>Remover dos favoritos</button>
            </div>
          </Dish>
        </section>
      </main>

      <Footer />
    </Container>
  )
}