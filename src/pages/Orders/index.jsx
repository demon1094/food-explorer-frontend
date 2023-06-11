import { Container, OrdersWrapper } from "./styles"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Order } from "../../components/Order"

import { useState, useEffect } from "react"

import { api } from "../../services/api"

export function Orders() {
  const [ orders, setOrders ] = useState([])

  console.log(orders)

  useEffect(() => {
    async function fetchOrders() {
      const response = await api.get('/orders')

      setOrders(response.data)
    }

    fetchOrders()
  }, [])

  return (
    <Container>
      <Header />

      <main>
        <OrdersWrapper>
          <h1>Pedidos</h1>

          <div>
            {
              orders.map((order) => (
                <Order
                  key={order.id}
                  order_id={order.id}
                  status={order.status}
                  description={order.description}
                  datetime={order.created_at}
                />
              ))
            }
          </div>
        </OrdersWrapper>
      </main>

      <Footer />
    </Container>
  )
}