import { Container } from "./styles"

import { ButtonText } from "../../components/ButtonText"
import { Ingredient } from "../../components/Ingredient"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

import { SlArrowLeft } from "react-icons/sl"
import { TfiReceipt } from "react-icons/tfi"
import SaladaBigIMG from "../../assets/saladaBig.png"

import { useState } from "react"

export function Details() {
  const [ amount, setAmount ] = useState(1)

  const decraseAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1)
    }
  }
  
  return (
    <Container>
      <Header />

      <main>
        <ButtonText
          href="/"
          icon={SlArrowLeft}
          title="voltar"
        />

        <img src={SaladaBigIMG} alt="Imagem do Prato" />

        <h2>Salada Ravanello</h2>

        <p>
          Rabanetes, folhas verdes e molho agridoce 
          salpicados com gergelim.
        </p>

        <div className="ingredients">
          <Ingredient
            name="alface"
          />
          <Ingredient
            name="cebola"
          />
          <Ingredient
            name="pão naan"
          />
          <Ingredient
            name="pepino"
          />
          <Ingredient
            name="rabanete"
          />
          <Ingredient
            name="tomate"
          />
        </div>

        <div className="qtd-payment">
          <div>
            <button onClick={decraseAmount}>-</button>
            <span>{String(amount).padStart(2, '0')}</span>
            <button onClick={() => setAmount(amount + 1)}>+</button>
          </div>

          <button className="add-btn">
            <TfiReceipt />
            pedir ∙ R$ 25,00
          </button>
        </div>
      </main>

      <Footer />
    </Container>
  )
}