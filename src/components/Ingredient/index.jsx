/* eslint-disable react/prop-types */
import { Container } from "./styles"

export function Ingredient({ name, ...rest }) {
  return (
    <Container {...rest}>
      { name }
    </Container>
  )
}