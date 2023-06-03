import { Container, Introduction, Dishes } from "./styles"

import MarketingIMG from "../../assets/saboresinigualaveis.png"
import SaladaIMG from "../../assets/saladaRavanello.png"
import PrugnaPieIMG from "../../assets/prugnaPie.png"
import SucoIMG from "../../assets/suco.png"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
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
          <section className="dish-category meals">
            <h3>Refeições</h3>

            <div className="dishes-wrapper">
              <Dish
                img={SaladaIMG}
                name="Salada Ravanello"
                price="49,90"
              />
              <Dish
                img={SaladaIMG}
                name="Salada Ravanello"
                price="49,90"
              />
              <Dish
                img={SaladaIMG}
                name="Salada Ravanello"
                price="49,90"
              />
            </div>
          </section>

          <section className="dish-category main-dishes">
            <h3>Pratos principais</h3>

            <div className="dishes-wrapper">
              <Dish
                img={PrugnaPieIMG}
                name="Prugna Pie"
                price="79,90"
              />
              <Dish
                img={PrugnaPieIMG}
                name="Prugna Pie"
                price="79,90"
              />
              <Dish
                img={PrugnaPieIMG}
                name="Prugna Pie"
                price="79,90"
              />
            </div>
          </section>

          <section className="dish-category main-dishes">
            <h3>Bebidas</h3>

            <div className="dishes-wrapper">
              <Dish
                img={SucoIMG}
                name="Suco de Maracujá"
                price="13,90"
              />
              <Dish
                img={SucoIMG}
                name="Suco de Maracujá"
                price="13,90"
              />
              <Dish
                img={SucoIMG}
                name="Suco de Maracujá"
                price="13,90"
              />
            </div>
          </section>
        </Dishes>
      </main>
      
      <Footer />
    </Container>
  )
}