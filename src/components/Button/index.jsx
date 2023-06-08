/* eslint-disable react/prop-types */
import { Container } from "./styles"

export function Button({ icon: Icon, title, ...rest }) {
  return (
    <Container {...rest}>
      { Icon && <Icon /> }

      { title }
    </Container>
  )
}