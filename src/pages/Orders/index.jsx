import { Container, OrdersWrapper } from "./styles"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Order } from "../../components/Order"

export function Orders() {
  return (
    <Container>
      <Header />

      <main>
        <OrdersWrapper>
          <h1>Pedidos</h1>

          <div>
            <Order
              order_id={'0004'}
              status='pending'
              datetime="05/06 às 11h10"
              description="1x Salada Ravanello, 1x Torradas de Parma, 
              1x Chá de Canela, 1x Suco de Maracujá"
            />
            <Order
              order_id={'0004'}
              status='preparing'
              datetime="05/06 às 11h10"
              description="1x Salada Ravanello, 1x Torradas de Parma, 
              1x Chá de Canela, 1x Suco de Maracujá"
            />
            <Order
              order_id={'0004'}
              status='delivered'
              datetime="05/06 às 11h10"
              description="1x Salada Ravanello, 1x Torradas de Parma, 
              1x Chá de Canela, 1x Suco de Maracujá"
            />
          </div>
        </OrdersWrapper>
      </main>

      <Footer />
    </Container>
  )
}