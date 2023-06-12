/* eslint-disable react/prop-types */
import { Container, StatusContainer } from "./styles"

import { BsCircleFill } from "react-icons/bs"

import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"

export function Order({ order_id, status, datetime, description }) {
  const { user } = useAuth()

  async function handleUpdateStatus(newStatus) {
    await api.patch(`/orders?id=${order_id}&status=${newStatus}`)
  }

  return (
    <Container>
      <div className="infos">
        <span>{String(order_id).padStart(4, '0000')}</span>
        {
          !user.isAdmin &&
          <Status status={status} />
        }
        <span>{datetime}</span>
      </div>

      <p>{description}</p>

      {
        user.isAdmin &&
        <select
          name="status"
          id="status"
          onChange={(e) => handleUpdateStatus(e.target.value)}
        >
          <option value="pending">Pendente</option>
          <option value="preparing">Preparando</option>
          <option value="delivered">Entregue</option>
        </select>
      }
    </Container>
  )
}

export function Status({ status }) {
  return (
    <StatusContainer>
      {
        status == 'pending' &&
        <>
          <div className={`icon ${status}`}>
            <BsCircleFill />
          </div>

          <span>Pendente</span>
        </>
      }
      {
        status == 'preparing' &&
        <>
          <div className={`icon ${status}`}>
            <BsCircleFill />
          </div>

          <span>Preparando</span>
        </>
      }
      {
        status == 'delivered' &&
        <>
          <div className={`icon ${status}`}>
            <BsCircleFill />
          </div>

          <span>Entregue</span>
        </>
      }
    </StatusContainer>
  )
}