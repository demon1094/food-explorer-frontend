import { Container, PaymentWrapper } from "./styles"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

import { MdPix } from "react-icons/md"
import { BsFillCreditCardFill, BsQrCode } from "react-icons/bs"

import { useState } from "react"

export function Payment() {
  const [ pixPayment, setPixPayment ] = useState(true)

  return (
    <Container>
      <Header />
    
      <main>
        <h1>Pagamento</h1>
      
        <PaymentWrapper pixPayment={pixPayment}>
          <div
            className="pix"
            onClick={() => setPixPayment(true)}
          >
            <MdPix />
            PIX
          </div>

          <div
            className="credit-card"
            onClick={() => setPixPayment(false)}
          >
            <BsFillCreditCardFill />
            Crédito
          </div>

          <div className="content">
            <div className={`pix-payment ${pixPayment ? '' : 'hide'}`}>
              <BsQrCode />
              <button>
                Copiar código
              </button>
            </div>

            <div className={`credit-payment ${pixPayment ? 'hide': ''}`}>
              <form>
                <label htmlFor="card-number">Número do Cartão</label>
                <input
                  id="card-number"
                  type="number"
                  placeholder="0000 0000 0000 0000"
                />

                <div className="valid-cvc">
                  <div>
                    <label htmlFor="valid">Validade</label>
                    <input
                      id="valid"
                      type="number"
                      placeholder="04/25"
                    />
                  </div>

                  <div>
                    <label htmlFor="cvc">CVC</label>
                    <input
                      id="cvc"
                      type="number"
                      placeholder="000"
                    />
                  </div>
                </div>

                <button>
                  Finalizar pagamento
                </button>
              </form>
            </div>
          </div>
        </PaymentWrapper>
      </main>

      <Footer />
    </Container>
  )
}