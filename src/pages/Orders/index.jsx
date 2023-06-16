import { Container, OrdersWrapperMobile, OrdersWrapperDesktop } from "./styles"

import { EmptyDisplay } from "../../components/EmptyDisplay"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Order, Status } from "../../components/Order"

import { TfiFaceSad } from "react-icons/tfi"

import { ToastContainer, toast } from "react-toastify"
import { toastConfig } from "../../configs/toastConfig"
import "react-toastify/dist/ReactToastify.css"

import { useState, useEffect } from "react"
import { useAuth } from "../../hooks/auth"

import { api } from "../../services/api"

export function Orders() {
  const [ orders, setOrders ] = useState([])

  const { user } = useAuth()

  async function handleUpdateStatus(order_id, newStatus) {
    await api.patch(`/orders?id=${order_id}&status=${newStatus}`)
    .then(() => {
      toast.success('Status do pedido atualizado.', toastConfig)
    })
    .catch((error) => {
      if (error.response) {
        toast.error(error.response.data.message, toastConfig)
      } else {
        toast.error('Erro ao atualizar o pedido.', toastConfig)
      }
    })
  }

  useEffect(() => {
    async function fetchOrders() {
      const response = await api.get('/orders')

      setOrders(response.data)
    }

    fetchOrders()
  }, [])

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
        <h1>Pedidos</h1>

        <OrdersWrapperMobile>

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
            <EmptyDisplay
              icon={TfiFaceSad}
              message="Nenhum pedido encontrado"
            />
          }
        </OrdersWrapperMobile>

        <OrdersWrapperDesktop>
          <header>
            <div>Status</div>
            <div>Código</div>
            <div>Detalhamento</div>
            <div>Data e Hora</div>
          </header>

          <div className="body">
            {
              orders.length > 0 &&
              orders.map((order) => (
                <>
                  <div className="order-row">
                    {
                      !user.isAdmin ?
                      <Status status={order.status} />
                      :
                      <select
                        name="status"
                        id="status"
                        onChange={(e) => handleUpdateStatus(order.id, e.target.value)}
                      >
                        <option value="pending" selected={order.status === 'peding'}>Pendente</option>
                        <option value="preparing" selected={order.status === 'preparing'}>Preparando</option>
                        <option value="delivered" selected={order.status === 'delivered'}>Entregue</option>
                      </select>
                    }
                  </div>
                  <div className="order-row">{String(order.id).padStart(5, '00000')}</div>
                  <div className="order-row">{order.description}</div>
                  <div className="order-row">{order.created_at}</div>
                </>
              ))
            }
          </div>
        </OrdersWrapperDesktop>
      </main>

      <Footer />
    </Container>
  )
}