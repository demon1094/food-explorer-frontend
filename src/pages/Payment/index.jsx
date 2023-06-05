/* eslint-disable no-unused-vars */
import { Container, PaymentWrapper, LoadingPayment } from "./styles"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

import { BsFillCreditCardFill, BsQrCode } from "react-icons/bs"
import { MdPix } from "react-icons/md"
import { FaRegClock } from "react-icons/fa"
import { FiCheckCircle } from "react-icons/fi"

import { useState, useEffect } from "react"

export function Payment() {
  const [ paymentMethod, setPaymentMethod ] = useState('pix')
  const [ onPayment, setOnPayment] = useState(false)
  const [ waitingPayment, setWaitingPayment ] = useState(false) 
  const [ paymentAproved, setPaymentAproved ] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setWaitingPayment(false)
      setPaymentAproved(true)
    }, 5000)

    return () => clearInterval(timer)
  }, [waitingPayment])

  return (
    <Container>
      <Header />
    
      <main>
        <h1>Pagamento</h1>
      
        <PaymentWrapper paymentMethod={paymentMethod}>
          <div
            className="pix"
            onClick={() => setPaymentMethod('pix')}
          >
            <MdPix />
            PIX
          </div>

          <div
            className="credit-card"
            onClick={() => setPaymentMethod('credit')}
          >
            <BsFillCreditCardFill />
            Crédito
          </div>

          <div className="content">
            <div className={`pix-payment ${paymentMethod === 'pix' ? '' : 'hide'}`}>
              <BsQrCode />
              <button
                onClick={() => {
                  setPaymentMethod('')
                  setOnPayment(true)
                  setWaitingPayment(true)
                }}
              >
                Copiar código
              </button>
            </div>

            <div className={`credit-payment ${paymentMethod === 'credit' ? '': 'hide'}`}>
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

                <button
                  type="button"
                  onClick={() => { 
                    setPaymentMethod('')
                    setOnPayment(true)
                    setWaitingPayment(true)
                  }}
                >
                  Finalizar pagamento
                </button>
              </form>
            </div>

            <div className={`loading-payment ${onPayment ? '' : 'hide'}`}>
              <LoadingPayment>
                <div className={`waiting ${waitingPayment ? '' : 'hide'}`}>
                  <FaRegClock />
                  <p>Aguardando pagamento no caixa</p>
                </div>

                <div className={`aproved ${paymentAproved ? '' : 'hide'}`}>
                  <FiCheckCircle />
                  <p>Pagamento aprovado!</p>
                </div>
              </LoadingPayment>
            </div>
          </div>
        </PaymentWrapper>
      </main>

      <Footer />
    </Container>
  )
}