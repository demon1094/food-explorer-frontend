import { Container, OrdersWrapper } from "./styles"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Order } from "../../components/Order"

import { TfiFaceSad } from "react-icons/tfi"

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

          {
            orders.length > 0 &&
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
          }
          {
            orders.length <= 0 &&
            <div className="empty-orders">
              <TfiFaceSad />
              <h2>Você ainda não fez nenhum pedido</h2>
            </div>
          }
        </OrdersWrapper>
      </main>

      <Footer />
    </Container>
  )
}