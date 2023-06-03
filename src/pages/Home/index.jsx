import { Container, Introduction, Dishes } from "./styles"

import MarketingIMG from "../../assets/saboresinigualaveis.png"
import SaladaIMG from "../../assets/saladaRavanello.png"

import { Header } from "../../components/Header"
import { Dish } from "../../components/Dish"

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <Introduction>
          <img src={MarketingIMG} />

          <div>
            <h3>Sabores inigualáveis</h3>
            <p>
              Sinta o cuidado do preparo com
              ingredientes selecionados.
            </p>
          </div>
        </Introduction>

        <Dishes>
          <div className="dish-category meals">
            <h3>Refeições</h3>

            <div className="dishes-wrapper">
              <Dish
                img={SaladaIMG}
                name="Salada Ravanello"
                price="49,90"
              />
            </div>
          </div>
        </Dishes>
      </main>
    </Container>
  )
}