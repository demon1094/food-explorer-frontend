/* eslint-disable no-unused-vars */
import { Container, PaymentWrapper, LoadingPayment } from "./styles"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"

import { BsFillCreditCardFill, BsQrCode } from "react-icons/bs"
import { FiCheckCircle } from "react-icons/fi"
import { FaRegClock } from "react-icons/fa"
import { MdPix } from "react-icons/md"

import { toastConfig } from "../../configs/toastConfig"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { useCart } from "../../hooks/cart"
import { useAuth } from "../../hooks/auth"

import { api } from "../../services/api"

export function Payment() {
  const [ paymentMethod, setPaymentMethod ] = useState('pix')
  const [ onPayment, setOnPayment] = useState(false)
  const [ waitingPayment, setWaitingPayment ] = useState(false) 
  const [ paymentAproved, setPaymentAproved ] = useState(false)

  const { cart, clearCart } = useCart()
  const { user } = useAuth()

  const navigate = useNavigate()

  async function handlePayment() {
    setPaymentMethod('')
    setOnPayment(true)
    setWaitingPayment(true)

    const description = cart.map(dish => {
      return `${dish.amount}x ${dish.name}`
    })

    await api.post('/orders', {
      user_id: user.id,
      description: description.join(', ')
    })
    .then(() => {
      setTimeout(async () => {
        toast.success('Pagamento aprovado! Redirecionando...', toastConfig)

        await clearCart()

        setTimeout(() => {
          navigate('/orders')
        }, 2000)
      }, 5000)
    })
    .catch((error) => {
      if (error.response) {
        toast.error(error.response.data.message, toastConfig)
      } else {
        toast.error('Erro ao efetuar pagamento.', toastConfig)
      }
    })
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setWaitingPayment(false)
      setPaymentAproved(true)
    }, 5000)

    return () => clearInterval(timer)
  }, [waitingPayment])

  return (
    <Container>
      <ToastContainer
        pauseOnFocusLoss={false}
        limit={5}
        autoClose={700}
        closeButton={false}
      />

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
              <Button
                title="Copiar código"
                onClick={handlePayment}
              />
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

                <Button
                  title="Finalizar pagamento"
                  onClick={handlePayment}
                />
              </form>
            </div>

            <div className={`loading-payment ${onPayment ? '' : 'hide'}`}>
              <LoadingPayment>
                <div className={`waiting ${waitingPayment ? '' : 'hide'}`}>
                  <FaRegClock />
                  <p>Aguardando pagamento no caixa</p>
                </div>

                <div className={`aproved ${paymentAproved ? 'visible' : ''}`}>
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