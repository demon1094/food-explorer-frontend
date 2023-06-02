import { Container, Introduction } from "./styles"

import MarketingIMG from "../../assets/saboresinigualaveis.png"

import { Header } from "../../components/Header"

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
      </main>
    </Container>
  )
}