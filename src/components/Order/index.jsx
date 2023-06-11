/* eslint-disable react/prop-types */
import { Container, StatusContainer } from "./styles"

import { BsCircleFill } from "react-icons/bs"

export function Order({ order_id, status, datetime, description }) {
  return (
    <Container>
      <div className="infos">
        <span>{String(order_id).padStart(4, '0000')}</span>
        <Status status={status} />
        <span>{datetime}</span>
      </div>

      <p>{description}</p>
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