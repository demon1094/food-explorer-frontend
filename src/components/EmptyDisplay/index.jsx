/* eslint-disable react/prop-types */
import { Container } from "./styles"

export function EmptyDisplay({ icon: Icon, message }) {
  return (
    <Container>
      { Icon && <Icon /> }

      <h2>{message}</h2>
    </Container>
  )
}